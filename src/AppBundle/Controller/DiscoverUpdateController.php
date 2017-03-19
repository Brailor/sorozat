<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use AppBundle\Entity\Discover;
use AppBundle\ApiRequest\Discoveries;




class DiscoverUpdateController extends Controller{
    /**
     * @Route("/updatedb")
     */
    public function updateAction(){
        //két külön tömb, ahol az indexek összefüggenek, azért, hogy egy forloop-pal könnyedén tudjam frissíteni az adatbázist
        $genre_ids = [ 10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10765, 37];
        $genre_names = ['Akció & Kaland', 'Animáció', 'Komédia', 'Krimi', 'Dokumentum', 'Dráma', 'Családi', 'Gyerek', 'Misztikus', 'Hírek', 'Sci-fi & Fantasy', 'Western'];

        //az évek, amikre lefut az adatbázisra mentés
        $years = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014','2015', '2016', '2017'];

        $em = $this->getDoctrine()->getManager();
        for($j = (count($years) - 1); $j >= 0; $j--){
            for($i = 0; $i < count($genre_ids); $i++){
             $data = new Discover();
                $response = $this->get('discoveries')->sendApiCall($years[$j], $genre_ids[$i]);
                $data->setCategoryId($genre_ids[$i]);
                $data->setCategoryName($genre_names[$i]);
                $data->setYear($years[$j]);
                $data->setShowData($response);
                //ha már van az adatábizsban ilyen row, akkor töröljük azt mielőtt feltöltjük a frisset
                $removable = $em->getRepository('AppBundle:Discover')->findOneBy(array('year' => $years[$j],'categoryId' => $genre_ids[$i]));

                if(isset($removable)){
                     $em->remove($removable);
                     $em->flush();
                    }
                
                $em->merge($data);
                $em->flush();
            }
        }
    }
}