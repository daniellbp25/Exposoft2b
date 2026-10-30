<?php
$conexao= mysqli_connect("localhost", "root", "", "gardenpvz");

    $nome=$_POST["nome"];
   //transformar o conteudo html em um conteudo PHP//
    $email=$_POST["email"];

     $sql="INSERT INTO usuario (nome, email) VALUES ('$nome', '$email')";
     //cria a query para selecionar na tabela amigo o apelido informado 
     $resultado=mysqli_query($conexao,$sql);
?>




