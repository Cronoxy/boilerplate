<?php

function crawlerDetect($USER_AGENT) {
    $crawlers = array(
        array('Google', 'Google'),
        array('msnbot', 'MSN'),
        array('Rambler', 'Rambler'),
        array('Yahoo', 'Yahoo'),
        array('AbachoBOT', 'AbachoBOT'),
        array('accoona', 'Accoona'),
        array('AcoiRobot', 'AcoiRobot'),
        array('ASPSeek', 'ASPSeek'),
        array('CrocCrawler', 'CrocCrawler'),
        array('Dumbot', 'Dumbot'),
        array('FAST-WebCrawler', 'FAST-WebCrawler'),
        array('GeonaBot', 'GeonaBot'),
        array('Gigabot', 'Gigabot'),
        array('Lycos', 'Lycos spider'),
        array('MSRBOT', 'MSRBOT'),
        array('Scooter', 'Altavista robot'),
        array('AltaVista', 'Altavista robot'),
        array('IDBot', 'ID-Search Bot'),
        array('eStyle', 'eStyle Bot'),
        array('Scrubby', 'Scrubby robot')
    );

    foreach ($crawlers as $c) {
        if (stristr($USER_AGENT, $c[0])) {
            return(true);
        }
    }

    return false;
}

// example

$crawler = crawlerDetect($_SERVER['HTTP_USER_AGENT']);

if (!$crawler) {
    echo file_get_contents('main.html');
} else {
    
}
?>