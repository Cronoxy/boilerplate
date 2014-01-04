<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="Content-Language" content="<?php echo Config::value('LANGUAGE_CODE'); ?>" />
        <meta http-equiv="Content-Style-Type" content="text/css" />
        <meta http-equiv="Content-Script-Type" content="text/javascript" />
        <meta http-equiv="Expires" content="<?php echo date('D, d M Y H:i:s ', time() + 31 * 24 * 60 * 60) . 'GMT'; ?>" />
        <meta http-equiv="Cache-Control" content="public" />
        <meta http-equiv="Last-Modified" content="Mon, 04 Jan 2011 20:00:00 GMT" />

        <title><?php echo CHtml::encode($this->pageTitle); ?></title>

        <meta name="description" content="<?php echo "Page description"; ?>" />
        <meta name="keywords" content="<?php echo "Page keywords"; ?>" />

        <link href="<?php echo Yii::app()->request->baseUrl; ?>/images/favicon.ico" rel="shortcut icon" />

        <script src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery-1.7.2.min.js" type="text/javascript"></script>

        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/else.css" />
        <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css" />
    </head>

    <body topmargin="0px">
        <?php echo $content; ?>  
        <script type="text/javascript" language="javascript">  
            $(document).ready(function(){
                $("input").attr("autocomplete","off");
                $("form").attr("autocomplete","off");
            });
        </script>
    </body>
</html>