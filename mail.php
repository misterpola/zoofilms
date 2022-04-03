<?php
  $email = $_POST['email'];
  $name = $_POST['name'];
  $message = $_POST['message'];

  // $to = "walter@zoofilms.com.ar";
  $to = "misterpola@gmail.com";
  $subject = "Consulta de " . $name . " (". $email .") desde Zoofilms.com.ar";
  $headers = "From: " . $email . "\r\n" .
  'Reply-To: '. $email;

  mail($to,$subject,$message,$headers);


  header('Location: index.html?s=1#contacto');

?>