<?php
$browser = get_browser(null, true);
echo '<pre>' . print_r($browser, true) . '</pre>';

echo file_get_contents('index.html');
?>