<?php

echo json_encode($_POST);


if($_SERVER['PHP_AUTH_USER'] !== "admin" && $_SERVER['PHP_AUTH_PW'] !== "guia2021"){
    header('WWW-Authenticate: Basic realm="Mi dominio"');
    header('HTTP/1.0 401 Unauthorized');

    echo "incorrecto";
    exit;
}
?>

<a href="https://gpoguia2.com/sepanka/propiedades_ftp.csv" download="propiedades_ftp.csv">Download</a>