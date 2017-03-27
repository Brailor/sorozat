<?php

namespace AppBundle\Controller;

use AppBundle\ApiRequest\Discoveries;
use AppBundle\Services\SearchService;
use AppBundle\Services\DiscoverService;

use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations;
use FOS\RestBundle\View\RouteRedirectView;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Routing\ClassResourceInterface;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use FOS\RestBundle\Controller\Annotations\RouteResource;

use AppBundle\Entity\Shows;

/**
 * Class ShowsController
 * @package AppBundle\Controller
 *
 *
 * @RouteResource("show")
 */
//TODO: valamilyen időközönként frissíteni kell az adatbázist majd, hogy ne elavult adatok legyen benne a friss sorozatoknál, mert
//a mostani állapotában egyszer bekerül az adatbázisba, de soha nem frissül :))
class ShowsController extends FOSRestController implements ClassResourceInterface{

    public function getAction($id){

        $em = $this->getDoctrine()->getManager();

        //egy specifikus sorozatot ad vissza imdb_id vagy themoviedb_id alapján

        //ha nem imdb_id
        if(strpos($id, 'tt') === false){
            $data = $em->getRepository('AppBundle:Shows')->findOneBy(array('themoviedbId' => $id));

            if(isset($data)){
                return $data;
            }
            else{
                
                $response = $this->get('discoveries')->getSpecificShowId($id);
                //elmentjük a sorozatot az adatbázisban, hogy később már ne kelljen API-t hívni rá
                $new_show = new Shows();

                $new_show->setActors($response['Actors']);

                $new_show->setGenre($response['Genre']);
         
                $new_show->setTitle($response['Title']);

                $new_show->setYear($response['Year']);

                $new_show->setRuntime($response['Runtime']);

                $new_show->setWriter($response['Writer']);

                $new_show->setPlot($response['Plot']);
           
                $new_show->setPoster($response['Poster']);
      
                $new_show->setImdbRating($response['imdbRating']);
  
                $new_show->setReleased($response['Released']);

                $new_show->setTotalSeasons($response['totalSeasons']);

                $new_show->setImdbID($response['imdbID']);

                $new_show->setImdbVotes($response['imdbVotes']);

                $new_show->setThemoviedbId($id);

                $em->persist($new_show);
                $em->flush();
                
                return $response;
            }
        }
        //ha imdb_id
        else{
            $data = $em->getRepository('AppBundle:Shows')->findOneBy(array('imdbID' => $id));

            if(isset($data)){
                return $data;
            }
            else{
                $data = $this->get('discoveries')->getSpecificShowData($id);
                $response = json_decode($data, true);
                //elmentjük a sorozatot az adatbázisban, hogy később már ne kelljen API-t hívni rá
                $new_show = new Shows();
                $new_show->setActors($response['Actors']);
   
                $new_show->setGenre($response['Genre']);

                $new_show->setTitle($response['Title']);

                $new_show->setYear($response['Year']);

    
                $new_show->setRuntime($response['Runtime']);

                $new_show->setWriter($response['Writer']);
    
                $new_show->setPlot($response['Plot']);

                $new_show->setPoster($response['Poster']);

                $new_show->setImdbRating($response['imdbRating']);
         
                $new_show->setReleased($response['Released']);
 
                $new_show->setTotalSeasons($response['totalSeasons']);

                $new_show->setImdbVotes($response['imdbVotes']);

                $new_show->setImdbID($response['imdbID']);

                $new_show->setThemoviedbId(null);

                $em->persist($new_show);
                $em->flush();
                return $response;
            }
        }
        
    }

   

}