<?php

namespace AppBundle\Services;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class DiscoverService{

    private $router;
    protected $formFactory;

    public function __construct($formFactory, $router){
	   $this->formFactory = $formFactory;
       $this->router = $router;
	}

    public function buildYearChoices() {
    $distance = 27;
    $yearsBefore = date('Y', mktime(0, 0, 0, date("m"), date("d"), date("Y") - $distance));
    $yearsAfter = date('Y', mktime(0, 0, 0, date("m"), date("d"), date("Y")));
    return array_combine(range($yearsBefore, $yearsAfter), range($yearsBefore, $yearsAfter));
    }

    public function Discover(){
        $discover_form = $this->formFactory->createNamedBuilder(null, FormType::class, null, array('csrf_protection' => false))
        ->setMethod('GET')
        ->setAction($this->router->generate('results'))
        ->add('date', ChoiceType::class, array('choices' => $this->buildYearChoices(), 'data' => '2017'))
        ->add('genre', ChoiceType::class, array('choices' => array('Akció & Kaland'=> '10759', 'Animáció' => '16', 'Dokumentum' => '99',  'Dráma' => '18', 'Családi' => '10751', 'Gyerek' => '10762', 'Komédia' => '35', 'Hírek' => '10763', 'Sci-fi & Fantasy' => '10765', 'Krimi' => '80', 'Misztikus' => '9648', 'Western' => '37')))
        ->add('submit', SubmitType::class)
        ->getForm();

        return $discover_form;
    }


}