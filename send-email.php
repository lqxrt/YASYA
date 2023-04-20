<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create the email message
$to = 'info@yasya.org'; // Replace with your own email address
$subject = 'New Contact Form Submission';
$body = "Name: $name\nEmail: $email\nMessage:\n$message";

// Send the email
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
if (mail($to, $subject, $body, $headers)) {
    echo 'success';
} else {
    echo 'error';
}
?>
