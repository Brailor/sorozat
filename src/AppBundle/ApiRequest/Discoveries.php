<?php

namespace AppBundle\ApiRequest;
use AppBundle\ApiRequest\Discoveries;

class Discoveries{
    
    //megszerezzük az idő és kategória alapján a sorozatok json listáját, majd visszaküldjük az eredményt a controllernek
    public function sendApiCall($date, $genre){
       $url = "https://api.themoviedb.org/3/discover/tv?include_null_first_air_dates=false&sort_by=popularity.desc&page=1";
       $firstdate = "&first_air_date.gte=" . $date;
       $category = "&with_genres=" . $genre;
       $api_key = '&api_key=58355cc8225ef859255e9e88971ab9d7';
       
        $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => $url . $firstdate . $category . $api_key,
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
            return "cURL Error #:" . $err;
            } else {
            return $response;
            }
    }

    //egy specifikus sorozat id-je alapján megszerezzük az Imdb ID-t, amivel egy másik API segítségével részletesebb,
    //infokat kapunk az adott sorozatról
    public function getSpecificShowId($id){
        $url = "https://api.themoviedb.org/3/tv/";
        $queryapi= "/external_ids?language=en-US&api_key=58355cc8225ef859255e9e88971ab9d7";
        $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => $url . $id . $queryapi,
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
            $response = json_decode($response, true);
            curl_close($curl);

            if ($err) {
            return "cURL Error #:" . $err;
            } 
            else {
            $data = Discoveries::getSpecificShowData($response['imdb_id']);
            $data = json_decode($data, true);
                if($data['Response'] == "False"){
                    $data_02 = Discoveries::getSpecificShowDataWhenNOMD($id);
                    $data_02 = (json_decode($data_02, true));
                    return $data_02;
                }
            return $data;
            
            }
    }

    //egyéni sorozat találatok, info
    public function getSpecificShowData($id){
            $url = "http://www.omdbapi.com/?i=";
            $query = $id . "&plot=full&r=json";

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => $url . $query,
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

                if($err){
                    return "cURL Erorr #:" .$err;
                }
                else{
                    return $response;
                }

    }
    //ha az omdapi-ra nincs feltöltve egy specicfikus sorozat, akkor még egy API call kell az id-vel, hogy meg lehessen jeleníteni az adatokat
    public function getSpecificShowDataWhenNOMD($id){
                $url = "https://api.themoviedb.org/3/tv/";
                $query = $id . '?api_key=58355cc8225ef859255e9e88971ab9d7&language=en-US';

                $curl = curl_init();
                curl_setopt_array($curl, array(
                    CURLOPT_URL => $url . $query,
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

                    if($err){
                        return "cURL Erorr #:" .$err;
                    }
                    else{
                        return $response;
                    }

    }
}