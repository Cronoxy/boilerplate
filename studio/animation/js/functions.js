/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// IE5.5+ PNG Alpha Fix v1.0RC4
// (c) 2004-2005 Angus Turnbull http://www.twinhelix.com

// This is licensed under the CC-GNU LGPL, version 2.1 or later.
// For details, see: http://creativecommons.org/licenses/LGPL/2.1/


// This must be a path to a blank image. That's all the configuration you need.
if (typeof blankImg == 'undefined')
    var blankImg = '<?php echo abs_url_site ; ?>_images/blank.gif';

var f = 'DXImageTransform.Microsoft.AlphaImageLoader';

function filt(s, m) {
    if (filters[f]) {
        filters[f].enabled = s ? true : false;
        if (s)
            with (filters[f]) {
                src = s;
                sizingMethod = m;
            }
    } else if (s)
        style.filter = 'progid:' + f + '(src="' + s + '",sizingMethod="' + m + '")';
}

function doFix() {
    // Assume IE7 is OK.
    if (!/MSIE (5\.5|6\.)/.test(navigator.userAgent) || (event && !/(background|src)/.test(event.propertyName)))
        return;

    var bgImg = currentStyle.backgroundImage || style.backgroundImage;

    if (tagName == 'IMG') {
        if ((/\.png$/i).test(src)) {
            if (currentStyle.width == 'auto' && currentStyle.height == 'auto')
                style.width = offsetWidth + 'px';
            filt(src, 'scale');
            src = blankImg;
        } else if (src.indexOf(blankImg) < 0)
            filt();
    } else if (bgImg && bgImg != 'none') {
        if (bgImg.match(/^url[("']+(.*\.png)[)"']+$/i)) {
            var s = RegExp.$1;
            if (currentStyle.width == 'auto' && currentStyle.height == 'auto')
                style.width = offsetWidth + 'px';
            style.backgroundImage = 'none';
            filt(s, 'crop');
            // IE link fix.
            for (var n = 0; n < childNodes.length; n++)
                if (childNodes[n].style)
                    childNodes[n].style.position = 'relative';
        } else
            filt();
    }
}
doFix();

function initMousePos() {
    positioning_elements();
    setTimeout(function() {
        start_animation();
    }, 400);
}

function positioning_elements() {
    //	marimea coverului
    var WindowInnerWidth = getWindowInnerWidth();
    var WindowInnerHeight = getWindowInnerHeight();

    var ScrollX = getScrollX();
    var ScrollY = getScrollY();

    var PosY = findPosY($('img_pos_rel_cover'));

    if (WindowInnerHeight + ScrollY > PosY)
        $('div_cover').style.height = WindowInnerHeight + ScrollY + "px";
    else
        $('div_cover').style.height = PosY + "px";

    $('div_cover').style.width = WindowInnerWidth + ScrollX + "px";

    var div_1_Width = getWidth("div_1", true, true);
    var div_1_Height = getHeight("div_1", true, true);
    var div_1_left = (WindowInnerWidth - div_1_Width) / 2 + ScrollX;
    var div_1_top = (WindowInnerHeight - div_1_Height) / 2 + ScrollY;
    $('div_1').style.top = div_1_top + "px";
    $('div_1').style.left = div_1_left + "px";

    var div_2_up_Height = getHeight("div_2_up", true, true);
    var div_2_up_top = div_1_top;
    $('div_2_up').style.top = div_2_up_top + "px";
    $('div_2_up').style.left = div_1_left + "px";

    var div_2_bottom_Height = getHeight("div_2_bottom", true, true);
    var div_2_bottom_top = div_1_top + div_1_Height - div_2_bottom_Height;
    $('div_2_bottom').style.top = div_2_bottom_top + "px";
    $('div_2_bottom').style.left = div_1_left + "px";

    var div_3_up_Height = getHeight("div_3_up", true, true);
    var div_3_up_top = div_1_top;
    $('div_3_up').style.top = div_3_up_top + "px";
    $('div_3_up').style.left = div_1_left + "px";

    var div_3_bottom_Height = getHeight("div_3_bottom", true, true);
    var div_3_bottom_top = div_1_top + div_1_Height - div_3_bottom_Height;
    $('div_3_bottom').style.top = div_3_bottom_top + "px";
    $('div_3_bottom').style.left = div_1_left + "px";

    var div_4_Width = getWidth("div_4", true, true);
    var div_4_Height = getHeight("div_4", true, true);
    var div_4_left = (WindowInnerWidth - div_4_Width) / 2 + ScrollX;
    var div_4_top = (WindowInnerHeight - div_4_Height) / 2 + ScrollY;
    $('div_4').style.top = div_4_top + "px";
    $('div_4').style.left = div_4_left + "px";

    var div_5_top = div_1_top + 200;
    $('div_5').style.top = div_5_top + "px";
    $('div_5').style.left = div_1_left + "px";

    var div_logo_top = div_1_top + 230;
    $('div_logo').style.top = div_logo_top + "px";
    $('div_logo').style.left = div_1_left + 100 + "px";
}

function start_animation() {
    Effect.Fade('div_4', {duration: 1});

    new Effect.Parallel(
            [
                new Effect.Morph('div_3_up', {sync: true, style: 'height:0px'}),
                new Effect.Opacity('div_3_up', {sync: true, from: 1, to: 0}),
                new Effect.Move('div_3_bottom', {sync: true, y: 320, mode: 'relative'}),
                new Effect.Morph('div_3_bottom', {sync: true, style: 'height:0px'}),
                new Effect.Opacity('div_3_bottom', {sync: true, from: 1, to: 0})
            ],
            {
                duration: 1.3
            }
    );

    new Effect.Parallel(
            [
                new Effect.Morph('div_2_up', {sync: true, style: 'height:50px'}),
                new Effect.Move('div_2_bottom', {sync: true, y: 120, mode: 'relative'}),
                new Effect.Morph('div_2_bottom', {sync: true, style: 'height:200px'})
            ],
            {
                duration: 1,
                delay: 0.2
            }
    );
    new Effect.Parallel(
            [
                new Effect.Morph('div_2_up', {sync: true, style: 'height:250px'}),
                new Effect.Move('div_2_bottom', {sync: true, y: 120, mode: 'relative'}),
                new Effect.Morph('div_2_bottom', {sync: true, style: 'height:80px'})
            ],
            {
                duration: 2,
                delay: 1.1
            }
    );
    new Effect.Parallel(
            [
                new Effect.Morph('div_2_up', {sync: true, style: 'height:640px'}),
                new Effect.Opacity('div_2_up', {sync: true, from: 1, to: 0}),
                new Effect.Move('div_2_bottom', {sync: true, y: -560, mode: 'relative'}),
                new Effect.Morph('div_2_bottom', {sync: true, style: 'height:640px'}),
                new Effect.Opacity('div_2_bottom', {sync: true, from: 1, to: 0})
            ],
            {
                duration: 1.6,
                delay: 3
            }
    );

    new Effect.Parallel(
            [
                new Effect.Opacity('div_5', {sync: true, from: 0, to: 1}),
                new Effect.Opacity('div_logo', {sync: true, from: 0, to: 1})
            ],
            {
                duration: 1.5,
                delay: 4.5
            }
    );
        
    setTimeout(function() {
        window.parent.document.getElementById('iframeAnimation').style.display = 'none';        
    }, 7000);
}