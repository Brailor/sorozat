<?php

namespace AppBundle\Services;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\FormType;

class SearchService{

    private $router;
    protected $formFactory;

    public function __construct($formFactory, $router){
	   $this->formFactory = $formFactory;
       $this->router = $router;
	}

    public function mySearch(){
        $search_form= $this->formFactory->createNamedBuilder(null, FormType::class, null, array('csrf_protection' => false))
        ->setMethod('GET')
        ->setAction($this->router->generate('searchbyName'))
        ->add('name', TextType::class)
        ->add('submit', SubmitType::class)
        ->getForm();

        return $search_form;
    }

}