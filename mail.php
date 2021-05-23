<?php

require_once('PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['username'];
$phone = $_POST['userphone'];
$email = $_POST['usermail'];
$text = $_POST['text'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'artemiy_example@mail.ru';
$mail->Password = 'example_password4509';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('artemiy_example@mail.ru');
$mail->addAddress('belysevartem9@gmail.com');

$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта';
$mail->Body    = ' ' .$name.' '.'оставил заявку. <br>Телефон:'.' '.$phone.' '.'<br>Почта клиента:'.' '.$email.' '.'<br>Сообщение:'.' '.$text;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'good';
}
?>
