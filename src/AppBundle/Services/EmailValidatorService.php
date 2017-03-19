<?php

namespace AppBundle\Services;

class EmailValidator{

    public function isValidEmail($email){
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }
}