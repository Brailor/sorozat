<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\FormType;



use AppBundle\ApiRequest\Discoveries;
use AppBundle\Services\SearchService;
use AppBundle\Services\DiscoverService;
use AppBundle\ShowsDataBase\ShowsData;
use AppBundle\Forms\Mailer;
use AppBundle\Forms\Searcher;
use AppBundle\Entity\Recent;
use AppBundle\Entity\Mail;
use AppBundle\Entity\Search;





class DefaultController extends Controller
{


    public function buildYearChoices() {
    $distance = 27;
    $yearsBefore = date('Y', mktime(0, 0, 0, date("m"), date("d"), date("Y") - $distance));
    $yearsAfter = date('Y', mktime(0, 0, 0, date("m"), date("d"), date("Y")));
    return array_combine(range($yearsBefore, $yearsAfter), range($yearsBefore, $yearsAfter));
    }

   
    public function discoverAction(Request $request){
        $search = new Search();
        //ezt a részt le lehet minimalizálni a discover servic-el, amit csináltam!!!
        $discover_form = $this->container->get('form.factory')
            ->createNamedBuilder(null, FormType::class, null, array('csrf_protection' => false))
            ->setAction($this->generateUrl('results'))
            ->setMethod('GET')
            ->add('date', ChoiceType::class, array('choices' => $this->buildYearChoices(), 'data' => '2017'))
            ->add('genre', ChoiceType::class, array('choices' => array('Akció & Kaland'=> '10759', 'Animáció' => '16', 'Dokumentum' => '99',  'Dráma' => '18', 'Családi' => '10751', 'Gyerek' => '10762', 'Komédia' => '35', 'Hírek' => '10763', 'Sci-fi & Fantasy' => '10765', 'Krimi' => '80', 'Misztikus' => '9648', 'Western' => '37')))
            ->add('submit', SubmitType::class)
            
            ->getForm();

            $discover_form->handleRequest($request);

             if($discover_form->isSubmitted() && $discover_form->isValid()){

                $date = $discover_form['date']->getData();
                $genre = $discover_form['genre']->getData();

                $search->setDate($date);
                $search->setGenre($genre);
                return $this->redirect('results', array(
                   'date' => $date,
                   'genre' => $genre
               ));
             }
              $recent = $this->getDoctrine()
                ->getRepository('AppBundle:Recent')
                ->findAll();
              $alltime = $this->getDoctrine()
                ->getRepository('AppBundle:Alltime')
                ->findAll();  

            //létrehozzuk a kapcsolat formot a lap aljára
            $mail = new Mail();
            $form = $this->createForm(Mailer::class, $mail);
            $form->handleRequest($request);
            if($form->isSubmitted() && $form->isValid()){
                  $message = \Swift_Message::newInstance()
                  ->setSubject($form['name']->getData())
                  ->setFrom($form['email']->getData())
                  ->setTo('viktor.ohad@gmail.com')
                  ->setBody($form['message']->getData());
                  $this->get('mailer')->send($message);
                 
   
            }
            
            $search_form = $this->get('searchservice')->mySearch();
             
             return $this->render('public/discover.html.twig', array(
                 'data' => $recent,
                 'discover_form' => $discover_form->createView(),
                 'form' => $form->createView(),
                 'search_form' => $search_form->createView(),
                 'alltime' => $alltime
                 
             ));

    }


    
    public function resultAction(Request $request)
    {
        //megszerezzük a GET methoddal elküldött infókat a formból
         $data ['date'] = $request->query->get('date');
         $data ['genre'] = $request->query->get('genre');

        //meghívjuk az API-t, amivel megkapjuk a discover listát
        $response = $this->get('discoveries')->sendApiCall($data['date'], $data['genre']);
        $data = json_decode($response, true);
        $results = ($data['results']);
        $recent = $this->getDoctrine()
                ->getRepository('AppBundle:Recent')
                ->findAll();
        $alltime = $this->getDoctrine()
                ->getRepository('AppBundle:Alltime')
                ->findAll();

        //létrehozzuk a kapcsolat formot a lap aljára
        $mail = new Mail();
        $form = $this->createForm(Mailer::class, $mail);
        $form->handleRequest($request);
            if($form->isSubmitted() && $form->isValid()){
                  $message = \Swift_Message::newInstance()
                  ->setFrom($form['email']->getData())
                  ->setTo('viktor.ohad@gmail.com')
                  ->setBody($form['message']->getData());
                  $this->get('mailer')->send($message);

                return $this->redirect('discover');
                  
            }

        $search_form = $this->get('searchservice')->mySearch();
        $discover_form = $this->get('discoverservice')->Discover();
        

        // replace this example code with whatever you need
        return $this->render('public/results.html.twig', array(
            'name' => $results,
            'data' => $recent,
            'form' => $form->createView(),
            'search_form' => $search_form->createView(),
            'discover_form' => $discover_form->createView(),
            'alltime' => $alltime
        ));
        
    }
   
    public function specificSerieAction(Request $request, $id)
    {
        if(strpos($id, 'tt') === false){
             $response = $this->get('discoveries')->getSpecificShowId($id);
            
        }
        else{
            $response = $this->get('discoveries')->getSpecificShowData($id);
            $response = json_decode($response, true);
        }
       
        $recent = $this->getDoctrine()
                ->getRepository('AppBundle:Recent')
                ->findAll();
        $alltime = $this->getDoctrine()
                ->getRepository('AppBundle:Alltime')
                ->findAll();        

        $mail = new Mail();
        $form = $this->createForm(Mailer::class, $mail);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
                  $message = \Swift_Message::newInstance()
                  ->setSubject($form['name']->getData())
                  ->setFrom($form['email']->getData())
                  ->setTo('viktor.ohad@gmail.com')
                  ->setBody($form['message']->getData());
                  $this->get('mailer')->send($message);
                  var_dump($form['email']->getData());
   
            }
        $search_form = $this->get('searchservice')->mySearch();
        
        
        
        
    return $this->render('public/specific_result.html.twig', array(
        'name' => $response,
        'data' => $recent,
        'search_form' => $search_form->createView(),
        'form' => $form->createView(),
        'alltime' => $alltime
        ));
 
    }
     
    public function indexAction(Request $request)
    {
        /* Ez a funckió frissíti az adatbázisban a top 15 aktuális (év - 1) sorozatait, viszont azt még
        meg kell oldani, hogy valahogy időzíteni lehessen, a másik probléma viszont az, hogy mindenképp
        insertálja az új adatokat a táblába, ahelyett hogy updatelné őket, szóval ezt is meg kell még
        oldani

        $response = $this->get('showsdata')->setRecent();
         if(isset($response)){
                  for($j = 0; $j < count($response); $j++){ 
                    $newshow = new Recent();
                    $newshow->setName($response[$j]['name']);
                    $newshow->setShow_id($response[$j]['show_id']);
                    $newshow->setCategory($response[$j]['category']);
                    $newshow->setPosterPic($response[$j]['poster_pic']);
                    $newshow->setPlot($response[$j]['plot']);
                    $newshow->setRating($response[$j]['rating']);
                    $newshow->setCreatedAt($response[$j]['created_at']);

                     $em = $this->getDoctrine()->getManager();
                     $em->merge($newshow);
                     $em->flush();
                  }
                }
                */
        $recent = $this->getDoctrine()
                ->getRepository('AppBundle:Recent')
                ->findAll();
        $alltime = $this->getDoctrine()
                ->getRepository('AppBundle:Alltime')
                ->findAll();        

        $mail = new Mail();
        $form = $this->createForm(Mailer::class, $mail);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
                  $message = \Swift_Message::newInstance()
                  ->setSubject($form['name']->getData())
                  ->setFrom($form['email']->getData())
                  ->setTo('viktor.ohad@gmail.com')
                  ->setBody($form['message']->getData());
                  $this->get('mailer')->send($message);
                  var_dump($form['email']->getData());
   
            }
        $search_form = $this->get('searchservice')->mySearch();
        $discover_form = $this->get('discoverservice')->Discover();

       

        return $this->render('base.html.twig', array(
         'data' => $recent,
         'form' => $form->createView(),
         'search_form' => $search_form->createView(),
         'discover_form' =>  $discover_form->createView(),
         'alltime' => $alltime

        ));   
        
    }
}

