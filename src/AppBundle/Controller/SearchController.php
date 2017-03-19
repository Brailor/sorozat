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
use FOS\RestBundle\Controller\Annotations\Get;

use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use FOS\RestBundle\Controller\Annotations\RouteResource;

/**
 * Class SearchController
 * @package AppBundle\Controller
 *
 *
 * @RouteResource("search")
 */
//TODO: olyan funckió, ami hogyha rákerestek egy sorozatra elmenti a listát az adatbázisban, hogy később már onnan hívja meg a találatokat
class SearchController extends FOSRestController implements ClassResourceInterface{

    /**
    * @Get("search/{name}")
    */

    public function getAction(string $name){

       return $this->get('searchapi')->getSearchListbyName($name);
        
    }
}