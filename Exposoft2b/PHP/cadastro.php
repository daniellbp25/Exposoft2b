<?php

$conexao= mysqli_connect("localhost", "root", "", "gardenpvz");

    $nome=$_POST["nome"];
   //transformar o conteudo html em um conteudo PHP//
    $email=$_POST["email"];

     $sql="SELECT * FROM gardenpvz WHERE  nome='$nome', email='$email' ";
     //cria a query para selecionar na tabela amigo o apelido informado 
     $resultado=mysqli_query($conexao,$sql);
     $teste=mysqli_num_rows($resultado);//guardar o numero de linhas encontrada na execução da query
     if ($teste<>0){
        //faz teste de verificação de existencia de linhas encontradas na execução da pesquisa query
        //execução da pesquisa da query
               while($linha=mysqli_fetch_array($resultado)){
                //monta o array ($linha) para guardar os dados encontrados 
                echo"nome:".$linha ['nome'];
                echo'<br> email:'.$linha['email'];
                //mostra os dados encontrados que estão guardados no array 
}}
else{echo"amigo não localizado";}
//mostra a mensagem quando não encontrar dados 

?>




