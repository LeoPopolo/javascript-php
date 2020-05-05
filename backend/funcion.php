<?php 

    $retorno = $_POST['valorCaja1'];
    

    
    $arr_clientes = array("name" => $retorno);
    
    //Creamos el JSON
    $json_string = json_encode($arr_clientes);
    $file = 'datos.json';
    file_put_contents($file, "[".$json_string."]");

?>