<?php

namespace AppBundle\ShowsDatabase;

use AppBundle\Entity\Recent;




class ShowsData {

    //adatbázisból megszerezzük a top legújabb sorozatok listáját ha meghívjuk ezt a funkciót
    public function getRecent(){

    }
    //frissíti az adatbázist a legújabb sorozatokkal, ha meghívjuk ezt a funkciót(valami időzítés kell rá)
    public function setRecent(){
        $curl = curl_init();
            $date = (date("Y") - 1);
            curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.themoviedb.org/3/discover/tv?include_null_first_air_dates=false&without_genres=10762%2C10751%2C16%2C99%2C10763&page=1&first_air_date.gte=".$date."&sort_by=popularity.desc&language=en-US&api_key=58355cc8225ef859255e9e88971ab9d7",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_POSTFIELDS => "{}",
            CURLOPT_HTTPHEADER => array('Content-type: application/json')
            ));

            $response = curl_exec($curl);
            $err = curl_error($curl);

            curl_close($curl);

            if ($err) {
            return  $err;
            } 
            else {
                $data = json_decode($response, true);
                $infos = [];
                for($i = 0; $i < 15; $i++){
                  if(!isset($data['results'][$i]['genre_ids'][0])){
                    $data['results'][$i]['genre_ids'][0] = 0;
                  }
                   $infos[$i] = array(
                       'name' => $data['results'][$i]['name'],
                       'show_id' => $data['results'][$i]['id'],
                       'category' =>  $data['results'][$i]['genre_ids'][0],
                       'poster_pic' => $data['results'][$i]['poster_path'],
                       'plot' => $data['results'][$i]['overview'],
                       'rating' => $data['results'][$i]['vote_average'],
                       'created_at' => $data['results'][$i]['first_air_date']
                    );
                }
              return $infos;
            }
    }
    
}