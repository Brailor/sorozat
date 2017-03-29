<?php

namespace AppBundle\Controller;


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

use AppBundle\Entity\Shows;


/**
 * Class NavSearchController
 * @package AppBundle\Controller
 *
 *
 * @RouteResource("navsearch")
 */

class NavSearchController extends FOSRestController implements ClassResourceInterface{

    /**
    * @Get("navsearch/{name}")
    */
    public function getAction(string $name){
       $repository = $this->getDoctrine()->getRepository('AppBundle:Shows');
        
        $query = $repository->createQueryBuilder('t')
                    ->select('t.title')
                    ->where('t.title LIKE :name')
                    ->setParameter('name', $name . '%')
                    ->getQuery();


        $show = $query->getResult();
        return $show;
           
           
    }
        
}