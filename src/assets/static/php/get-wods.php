<?php
header('Access-Control-Allow-Methods: GET');
header('Content-Type: application/json');

class API
{
    function GetWods()
    {
        $opts = array(
            'http' => array(
                'method' => "GET",
                'header' => "Authorization: efdac3ad-1c14-4515-acdd-45320577b810\r\n" .
                    "Content-Type: application/json\r\n"
            )
        );

        $dates = $_GET['dates'];
        $requestUrl = 'https://api.sugarwod.com/v2/workouts?dates=' . $dates;

        $context = stream_context_create($opts);
        $wods = file_get_contents($requestUrl, false, $context);

        return $wods;
    }
}

$API = new API;
echo $API->GetWods();
