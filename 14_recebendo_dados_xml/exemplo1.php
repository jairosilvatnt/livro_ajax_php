<?php 
  $gmtDate = gmdate("D,d M Y H:i:s");
  header("Expires: {$gmtDate} GMT");  
  header("Last-Modified: {$gmtDate} GMT");
  header("Cache-Control: no-cache, must-revalidate");
  header("Pragma: no-cache");

  // obtendo os dados do formulario
  $nome = $_POST["nome"];
  $cidade = $_POST["cidade"];
  $estado = $_POST["estado"];
  $pais = $_POST["pais"];

  // criar a string XLM
  $meuXML ="<?xml version=\"1.0\"?>";
  $meuXML .= "<dados>";
  $meuXML .= "<nome>$nome</nome>";
  $meuXML .= "<cidade>$cidade</cidade>";
  $meuXML .= "<estado>$estado</estado>";
  $meuXML .= "<nome>$nome</nome>";
  $meuXML .= "</dados>";

  // retorna o resultado ao navegador
  header("content-type: application/xml");
  echo $meuXML;
?>