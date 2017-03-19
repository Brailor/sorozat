<?php

namespace AppBundle\ApiRequest;

class SearchAPI{

     public function getSearchListbyName($name){
            $url = "http://www.omdbapi.com/?s=";
            $query = $name . "&type=series";

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
                    $data = json_decode($response, true);
                    return $data;
                }
     }
}