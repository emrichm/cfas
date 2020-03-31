<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Request-Headers: POST");
        header('Access-Control-Allow-Headers: content-type');
        exit;
    case ("POST"):
        header("Access-Control-Allow-Origin: *");

        $inquiry = json_decode(file_get_contents('php://input'), true);

        $firstName = $inquiry['firstName'];
        $lastName = $inquiry['lastName'];
        $email = $inquiry['email'];
        $subject = $inquiry['subject'];
        $wishDate = substr($inquiry['wishDate'], 0, 10);
        $hour = $inquiry['hour'];
        $message = $inquiry['message'];

        // Create the email and send the message
        $myemail = 'Anna@CrossFitamSee.de';
        $email_subject = "Webseiten-Anfrage: $subject";
        $email_body = "Name: $firstName $lastName";
        if ($wishDate) {
            $email_body .= "\nWunschtermin: $wishDate";
        }
        if ($hour) {
            $email_body .= " -> $hour";
        }
        $email_body .= "\n\nNachricht:\n$message";
        $headers = "From: $email";
        $headers .= "\nReply-To: $email";

        mail($myemail, $email_subject, $email_body, $headers);

        echo json_encode(true);
        break;
    default:
        header("Allow: POST", true, 405);
        exit;
}
