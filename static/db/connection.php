<?php

    $data = file_get_contents("db.json");
    $products = json_decode($data, true);
    $productId = trim($_POST['id']);


    echo json_encode(searchProductById($productId, $products));



    function searchProductById($id, $products){
            $response = "sin coincidencias";


            foreach ($products as $key => $value) {

                if($products[$key]["id"] === $id){
                    $response = $value;
                    break;
                }
            }

            return $response;
        }