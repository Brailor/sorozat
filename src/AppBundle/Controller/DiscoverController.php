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
use FOS\RestBundle\Controller\Annotations\Get;

use AppBundle\Entity\Discover;


/**
 * Class DiscoverController
 * @package AppBundle\Controller
 *
 *
 * @RouteResource("discover")
 */

class DiscoverController extends FOSRestController implements ClassResourceInterface{

    /**
    * @Get("discover/{date}:{genre}")
    */
    public function getAction(string $date, int $genre){
       
         $show = $this->getDoctrine()
                ->getRepository('AppBundle:Discover')
                ->findOneBy(array(
                    'categoryId' => $genre,
                    'year' => $date
                ));
        return json_decode($show->getShowData(), true);        
           
    }
        
}