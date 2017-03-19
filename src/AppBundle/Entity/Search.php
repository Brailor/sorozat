<?php 

namespace AppBundle\Entity;

class Search{

    
    protected $genre;
    protected $date;
    protected $name;

    
   
    public function getGenre(){
        return $this->genre;
    }

    public function setGenre($genre){
        $this->genre = $genre;
        return $this;
    }
    public function getDate(){
        return $this->date;
    }

    public function setDate($date){
        $this->date = $date;
        return $this;
    }
     public function getName(){
        return $this->name;
    }

    public function setName($name){
        $this->name = $name;
        return $this;
    }




}