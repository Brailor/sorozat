<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


use AppBundle\ShowsDataBase\ShowsData;
use AppBundle\Entity\Recent;

class RecentUpdateController extends Controller{
    /**
     * @Route("/update_recentdb")
     */
    public function updateAction(){
         $em = $this->getDoctrine()->getManager();
        
                $response = $this->get('showsdata')->setRecent();
                if(isset($response)){
                  for($j = 0; $j < 15; $j++){ 
                    $newshow = new Recent();
                    $newshow->setName($response[$j]['name']);
                    $newshow->setShow_id($response[$j]['show_id']);
                    $newshow->setCategory($response[$j]['category']);
                    $newshow->setPosterPic($response[$j]['poster_pic']);
                    $newshow->setPlot($response[$j]['plot']);
                    $newshow->setRating($response[$j]['rating']);
                    $newshow->setCreatedAt($response[$j]['created_at']);
                    $newshow->setItem_id($j);
                   
                    $removable = $em->getRepository('AppBundle:Recent')->findOneBy(array('item_id' => $j));

                    if(isset($removable)){
                     $em->remove($removable);
                     $em->flush();
                    }
                    
                     $em->merge($newshow);
                     $em->flush();
                  }
                }
            }
}
    
