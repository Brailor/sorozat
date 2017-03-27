<?php 

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\Annotations;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Routing\ClassResourceInterface;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use FOS\RestBundle\Controller\Annotations\Post;
use AppBundle\Entity\CronUpdater;
use AppBundle\Entity\Shows;

/**
 * Class CronUpdaterController
 * @package AppBundle\Controller
 *
 *
 * @RouteResource("cron_update")
 */

class CronUpdaterController extends FOSRestController implements ClassResourceInterface{

    /**
    * @Post("cron_update")
    */
    public function postAction(){
       
       $em = $this->getDoctrine()->getManager();

       //megszerzem a táblában lévő sorok (sorozatok) számát
       $query = $em->createQuery(
       'SELECT COUNT(0) FROM AppBundle:Shows');
       $rowsLength = $query->getResult();

       $maxRows = $rowsLength[0]['1'];

       //ez azért kell, mert egy külön táblában tárolom, hogy hol tartunk az update-tel
       $currIndex_db = $em->getRepository('AppBundle:CronUpdater')->findAll();
       $currIndex = $currIndex_db[0]->getUpdateIndex();

       $tempIndex = $currIndex;

       //mivel összesen 40 API call-t tudok lehívni 10sec alatt, ezért biztonsági okokból 20-at hívok le rövid idő alatt, nehogy véletlen letiltoson
       //az API szolgáltató, ha véletlen összejön 20 update meg 20 user API call 10seces időtartamom belül, nyílván ha sokan nézik az oldalt, akkor ezt 
       //a számot lejjebb kell venni/vagy esti órákra tenni az update-et
       for($i = $currIndex; $i < ($currIndex + 20); $i++){
       	if ($i > $maxRows) {
       		break;
       	}
       	else{
       		//lehívom id alapján az adatbázisból a sorozat adatait
       		$dbShow = $em->getRepository('AppBundle:Shows')->findOneBy(array('id' => $i));

       		if(!empty($dbShow) && isset($dbShow)){
	       		//API lehívása a megefelelő id alapján
	       		$apiShow = CronUpdaterController::getSpecificShowData($dbShow->getImdbId());
	       		//megfelelő paraméterek frissítése, ha van eltérés
	       		$dbShow->setImdbVotes($apiShow['imdbVotes']);
	       		$dbShow->setImdbRating($apiShow['imdbRating']);
	       		$dbShow->setTotalSeasons($apiShow['totalSeasons']);
	       		$dbShow->setYear($apiShow['Year']);
	       		$tempIndex++; 
	       		//updatelem a fenti adatokat
	       		$em->flush();
       		}
       	}
       }
       //ha ezek közül bármelyik teljesül, akkor végig értünk a táblán---> mehet előröl, és mivel 41 a min id az adatbázisban, ezért ezt hard
       //-codeoltam bele
       if($tempIndex >= $maxRows){
       	$currIndex = 41;
       	$currIndex_db[0]->setUpdateIndex($currIndex);
       	$currIndex_db[0]->setMaxIndex($maxRows);
       	$em->flush();
       }
       //ha nem teljesül az if feltétele akkor az aktuális tempIndex-re updatelem a cron_update/update_index sort (ugye ez currIndex + 20)
       else{
       	$currIndex_db[0]->setUpdateIndex($tempIndex);
       	$currIndex_db[0]->setMaxIndex($maxRows);
       	$em->flush();
       }
    }



    //egyéni sorozat találatok, info
    public function getSpecificShowData($id){
            $url = "http://www.omdbapi.com/?i=";
            $query = $id . "&plot=full&r=json";

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => $url . $query,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
                CURLOPT_POSTFIELDS => "{}",
                CURLOPT_HTTPHEADER => array('Content-type: application/json')
                ));

                $response = curl_exec($curl);
                $err = curl_error($curl);

                curl_close($curl);

                if($err){
                    return "cURL Erorr #:" .$err;
                }
                else{
                    $response = json_decode($response, true);
                        if($response['Response'] == "False"){
                            $data = CronUpdaterController::getSpecificShowDataWhenNOMD($id);
                            $data = json_decode($data, true);
                            return $data;
                        }
                    return $response;
                }

    }
    //ha az omdapi-ra nincs feltöltve egy specicfikus sorozat, akkor még egy API call kell az id-vel, hogy meg lehessen jeleníteni az adatokat
    public function getSpecificShowDataWhenNOMD($id){
                $url = "https://api.themoviedb.org/3/tv/";
                $query = $id . '?api_key=58355cc8225ef859255e9e88971ab9d7&language=en-US';

                $curl = curl_init();
                curl_setopt_array($curl, array(
                    CURLOPT_URL => $url . $query,
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => "",
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 30,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => "GET",
                    CURLOPT_POSTFIELDS => "{}",
                    CURLOPT_HTTPHEADER => array('Content-type: application/json')
                    ));

                    $response = curl_exec($curl);
                    $err = curl_error($curl);

                    curl_close($curl);

                    if($err){
                        return "cURL Erorr #:" .$err;
                    }
                    else{
                    	
                        return $response;
                    }

    }
}

    
        

