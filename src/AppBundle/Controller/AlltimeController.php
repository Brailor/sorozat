<?php

namespace AppBundle\Controller;

use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations;
use FOS\RestBundle\View\RouteRedirectView;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Routing\ClassResourceInterface;
use FOS\RestBundle\Controller\Annotations\Get;

use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use FOS\RestBundle\Controller\Annotations\RouteResource;

use AppBundle\Entity\Alltime;

/**
 * Class AlltimeController
 * @package AppBundle\Controller
 *
 *
 * @RouteResource("alltime")
 */

class AlltimeController extends FOSRestController implements ClassResourceInterface{

    public function getAction(){

      return $this->getDoctrine()->getRepository('AppBundle:Alltime')->findAll();
        
    }
}