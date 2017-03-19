<?php

namespace AppBundle\Forms; 

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use AppBundle\Entity\Mail;
use AppBundle\Services\EmailValidator;

class Mailer extends AbstractType{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder            
          ->add('name', TextType::class, array('label' => 'Név', 'required' => false, 'empty_data' => null ))
          ->add('email', EmailType::class, array('label' => 'Email',
          'required' => true))
          ->add('message', TextareaType::class, array('label' => 'Üzenet', 'required' => 'true'))
          ->add('submit', SubmitType::class);
          
    }
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Mail::class,
                'error_mapping' => array(
                    'isValidEmail' => 'email'
            )
        ));
    }

} 