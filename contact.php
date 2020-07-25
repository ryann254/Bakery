<?php

if(isset($_POST['submit'])) {
    $email = $_POST['EMAIL'];
    $mailTo = "zooking81@gmail.com";
    $subject = "Testing email";
    $headers = "From: ".$email;
    $txt = "The message is from ".$email;

    mail($mailTo, $subject, $txt);
    header("Location: coming-soon-page.html?mailsend");

}