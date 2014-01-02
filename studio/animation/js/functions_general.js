function maximizare_fereastra() {
	window.moveTo(0,0)
	window.resizeTo(screen.width,screen.height)
}

function window_open(url, toolbar, location, directories, status, menubar, scrollbars, resizable, copyhistory, width, height) {
	window.open(url, '_blank', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=900, height=520');		
}

function myalert(x) {
	x	=	x.replace( /&acirc;/g, String.fromCharCode( 226 ) );
	x	=	x.replace( /&Acirc;/g, String.fromCharCode( 194 ) );
	x	=	x.replace( /&icirc;/g, String.fromCharCode( 238 ) );
	x	=	x.replace( /&Icirc;/g, String.fromCharCode( 206 ) );
	x	=	x.replace( /&#259;/g, String.fromCharCode( 259 ) );
	x	=	x.replace( /&#258;/g, String.fromCharCode( 258 ) );
	x	=	x.replace( /&#238;/g, String.fromCharCode( 238 ) );
	x	=	x.replace( /&#237;/g, String.fromCharCode( 237 ) );
	x	=	x.replace( /&#351;/g, String.fromCharCode( 351 ) );
	x	=	x.replace( /&#350;/g, String.fromCharCode( 350 ) );
	x	=	x.replace( /&#355;/g, String.fromCharCode( 355 ) );
	x	=	x.replace( /&#354;/g, String.fromCharCode( 354 ) );
	alert( x );
}

function myconfirm(x) {
	x	=	x.replace( /&acirc;/g, String.fromCharCode( 226 ) );
	x	=	x.replace( /&Acirc;/g, String.fromCharCode( 194 ) );
	x	=	x.replace( /&icirc;/g, String.fromCharCode( 238 ) );
	x	=	x.replace( /&Icirc;/g, String.fromCharCode( 206 ) );
	x	=	x.replace( /&#259;/g, String.fromCharCode( 259 ) );
	x	=	x.replace( /&#258;/g, String.fromCharCode( 258 ) );
	x	=	x.replace( /&#238;/g, String.fromCharCode( 238 ) );
	x	=	x.replace( /&#237;/g, String.fromCharCode( 237 ) );
	x	=	x.replace( /&#351;/g, String.fromCharCode( 351 ) );
	x	=	x.replace( /&#350;/g, String.fromCharCode( 350 ) );
	x	=	x.replace( /&#355;/g, String.fromCharCode( 355 ) );
	x	=	x.replace( /&#354;/g, String.fromCharCode( 354 ) );
	r = confirm (x) ;
	return r ;
}

function checkemail(id) {
	var testresults ;
	var str = $(id).value ;
	var filter=/^.+@.+\..{2,3}$/ ;
	
	if (filter.test(str))
		return true ;
	else		
		return false ;	
}

function check_color_hex(checked_value) {
	var filter=/^#{1}[a-fA-F0-9]{6}$/ ;
	
	if (filter.test(checked_value))
		return true ;
	else		
		return false ;	
}

function findPosX(obj) {
    var curleft = 0;
    if(obj.offsetParent)
        while(1) {
          	curleft += obj.offsetLeft;
          	if(!obj.offsetParent)
            	break;
          	obj = obj.offsetParent;
        }
    else if(obj.x)
        curleft += obj.x;
    return curleft;
}

function findPosY(obj) {
    var curtop = 0;
    if(obj.offsetParent)
        while(1) {
          	curtop += obj.offsetTop;
          	if(!obj.offsetParent)
            	break;
          	obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    return curtop;
}

function move_To(id, x, y) {
	//alert (id) ;
	//alert (x) ;
	//alert (y) ;
	$(id).style.top = parseInt(y) + "px" ;
	$(id).style.left = parseInt(x) + "px" ;
}

//	sterge spatiile de la inceput
function LTrim(value) {
	var re = /\s*((\S+\s*)*)/ ;
	return value.replace(re, "$1") ;
}

//	sterge spatiile de la sfarsit
function RTrim(value) {
	var re = /((\s*\S+)*)\s*/ ;
	return value.replace(re, "$1") ;
}

//	sterge spatiile de la inceput si de la sfarsit
function trim(value) {
	return LTrim(RTrim(value)) ;	
}

function rest(x, y) {//restul impartirii lui x la y
	if (y == 0)
		myalert("Valoarea &icirc;mp&#259;r&#355;itorului trebuie s&#259; fie diferit&#259; de 0 !!!")
	else
		restul = x/y - Math.floor(x/y) 
	return restul
}

// Crearea unui cookie si atribuirea acesteia unei valori
function setCookie(c_name,value,expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	var string = "" ;
	string += c_name ;
	string += "=" ;
	string += escape(value) ;
	string += (expiredays==null) ? "" : ";expires=" ;
	string += exdate.toGMTString() ;
	document.cookie = string ; 
}

// Stergerea unui cookie
function unsetCookie(c_name) {
	//var x = getCookie(c_name) ;
	//if (x) 
		setCookie(c_name,'',-1) ;
}



// Verifica daca a fost creata o anumita variabila cookie si returneaza valoarea acesteia
function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) { 
			c_start = c_start + c_name.length + 1; 
			c_end = document.cookie.indexOf(";",c_start);
			if (c_end == -1)
				c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return "";
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//	USED FOR GETTING THE COMPUTED WIDTH OF AN ELEMENT IN PIXELS
//	el - Object
//	includePadding - boolean
//	includeBorder - boolean
///////////////////////////////////////////////////////////////////////////////////////////////////
function getWidth(el, includePadding, includeBorder) {
    var width;
    el = (typeof(el) === "string") ? document.getElementById(el) : el;	
    
    if (window.getComputedStyle) { // FF, Safari, Opera
        var style = document.defaultView.getComputedStyle(el, null);
        if (style.getPropertyValue("display") === "none")
            return 0;
        width = parseInt(style.getPropertyValue("width"));
        
        if (/opera/i.test(navigator.userAgent)) {
            // opera includes the padding and border when reporting the width/height - subtract that out
            width -= parseInt(style.getPropertyValue("padding-left"));
            width -= parseInt(style.getPropertyValue("padding-right"));
            width -= parseInt(style.getPropertyValue("border-left-width"));
            width -= parseInt(style.getPropertyValue("border-right-width"));
        }
        
        if (includePadding) {
            width += parseInt(style.getPropertyValue("padding-left"));
            width += parseInt(style.getPropertyValue("padding-right"));
        }
        
        if (includeBorder) {
            width += parseInt(style.getPropertyValue("border-left-width"));
            width += parseInt(style.getPropertyValue("border-right-width"));
        }
    } else { // IE
        if (el.currentStyle["display"] === "none")
            return 0;
        var bRegex = /thin|medium|thick/; // regex for css border width keywords
        width = el.offsetWidth; // currently the width including padding + border
        
        if (!includeBorder) {
            var borderLeftCSS = el.currentStyle["borderLeftWidth"];
            var borderRightCSS = el.currentStyle["borderRightWidth"];
            var temp = document.createElement("DIV");
            if (el.offsetWidth > el.clientWidth && el.currentStyle["borderLeftStyle"] !== "none") {
                if (!bRegex.test(borderLeftCSS)) {
                    temp.style.width = borderLeftCSS;
                    el.parentNode.appendChild(temp);
                    width -= Math.round(temp.offsetWidth);
                    el.parentNode.removeChild(temp);
                } else if (bRegex.test(borderLeftCSS)) {
                    temp.style.width = "10px";
                    temp.style.border = borderLeftCSS + " " + el.currentStyle["borderLeftStyle"] + " #000000";
                    el.parentNode.appendChild(temp);
                    width -= Math.round((temp.offsetWidth-10)/2);
                    el.parentNode.removeChild(temp);
                }
            }
            if (el.offsetWidth > el.clientWidth && el.currentStyle["borderRightStyle"] !== "none") {
                if (!bRegex.test(borderRightCSS)) {
                    temp.style.width = borderRightCSS;
                    el.parentNode.appendChild(temp);
                    width -= Math.round(temp.offsetWidth);
                    el.parentNode.removeChild(temp);
                } else if (bRegex.test(borderRightCSS)) {
                    temp.style.width = "10px";
                    temp.style.border = borderRightCSS + " " + el.currentStyle["borderRightStyle"] + " #000000";
                    el.parentNode.appendChild(temp);
                    width -= Math.round((temp.offsetWidth-10)/2);
                    el.parentNode.removeChild(temp);
                }
            }
        }
        
        if (!includePadding) {
            var paddingLeftCSS = el.currentStyle["paddingLeft"];
            var paddingRightCSS = el.currentStyle["paddingRight"];
            var temp = document.createElement("DIV");
            temp.style.width = paddingLeftCSS;
            el.parentNode.appendChild(temp);
            width -= Math.round(temp.offsetWidth);
            temp.style.width = paddingRightCSS;
            width -= Math.round(temp.offsetWidth);
            el.parentNode.removeChild(temp);
        }
    }
    
    return width;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// 	USED FOR GETTING THE COMPUTED HEIGHT OF AN ELEMENT IN PIXELS
//	el - Object
//	includePadding - boolean
//	includeBorder - boolean
///////////////////////////////////////////////////////////////////////////////////////////////////
function getHeight(el, includePadding, includeBorder) {
    var height;
    el = (typeof(el) === "string") ? document.getElementById(el) : el;
    
    if (window.getComputedStyle) { // FF, Safari, Opera
        var style = document.defaultView.getComputedStyle(el, null);
        if (style.getPropertyValue("display") === "none")
            return 0;
        height = parseInt(style.getPropertyValue("height"));
        
        if (/opera/i.test(navigator.userAgent)) {
            // opera includes the padding and border when reporting the width/height - subtract that out
            height -= parseInt(style.getPropertyValue("padding-top"));
            height -= parseInt(style.getPropertyValue("padding-bottom"));
            height -= parseInt(style.getPropertyValue("border-top-width"));
            height -= parseInt(style.getPropertyValue("border-bottom-width"));
        }
        
        if (includePadding) {
            height += parseInt(style.getPropertyValue("padding-top"));
            height += parseInt(style.getPropertyValue("padding-bottom"));
        }
        
        if (includeBorder) {
            height += parseInt(style.getPropertyValue("border-top-width"));
            height += parseInt(style.getPropertyValue("border-bottom-width"));
        }
    } else { // IE
        if (el.currentStyle["display"] === "none")
            return 0;
        var bRegex = /thin|medium|thick/; // regex for css border width keywords
        height = el.offsetHeight; // currently the height including padding + border
    
        if (!includeBorder) {
            var borderTopCSS = el.currentStyle["borderTopWidth"];
            var borderBottomCSS = el.currentStyle["borderBottomWidth"];
            var temp = document.createElement("DIV");
            if (el.offsetHeight > el.clientHeight && el.currentStyle["borderTopStyle"] !== "none") {
                if (!bRegex.test(borderTopCSS)) {
                    temp.style.width = borderTopCSS;
                    el.parentNode.appendChild(temp);
                    height -= Math.round(temp.offsetWidth);
                    el.parentNode.removeChild(temp);
                } else if (bRegex.test(borderTopCSS)) {
                    temp.style.width = "10px";
                    temp.style.border = borderTopCSS + " " + el.currentStyle["borderTopStyle"] + " #000000";
                    el.parentNode.appendChild(temp);
                    height -= Math.round((temp.offsetWidth-10)/2);
                    el.parentNode.removeChild(temp);
                }
            }
            if (el.offsetHeight > el.clientHeight && el.currentStyle["borderBottomStyle"] !== "none") {
                if (!bRegex.test(borderBottomCSS)) {
                    temp.style.width = borderBottomCSS;
                    el.parentNode.appendChild(temp);
                    height -= Math.round(temp.offsetWidth);
                    el.parentNode.removeChild(temp);
                } else if (bRegex.test(borderBottomCSS)) {
                    temp.style.width = "10px";
                    temp.style.border = borderBottomCSS + " " + el.currentStyle["borderBottomStyle"] + " #000000";
                    el.parentNode.appendChild(temp);
                    height -= Math.round((temp.offsetWidth-10)/2);
                    el.parentNode.removeChild(temp);
                }
            }
        }
    
        if (!includePadding) {
            var paddingTopCSS = el.currentStyle["paddingTop"];
            var paddingBottomCSS = el.currentStyle["paddingBottom"];
            var temp = document.createElement("DIV");
            temp.style.width = paddingTopCSS;
            el.parentNode.appendChild(temp);
            height -= Math.round(temp.offsetWidth);
            temp.style.width = paddingBottomCSS;
            height -= Math.round(temp.offsetWidth);
            el.parentNode.removeChild(temp);
        }
    }
    
    return height;
}

function select_current_date(zi, luna, an) {
	
	var current_date = new Date() ;
	
	var year = current_date.getYear() ;	    
	var month = current_date.getMonth() ;    
	var today = current_date.getDate() ;    
	
	$(zi).selectedIndex = today - 1 ;	
	$(luna).selectedIndex = month ;
	
	j = 0 ;
	for (i = 2006; i < 2037; i++) {
		if (i == year)
			break
		else
			j++ 
	}
	
	
	$(an).selectedIndex = j;
}

function pageWidth() {
	return window.innerWidth != null? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
}

function pageHeight() {
	return  window.innerHeight != null? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body != null ? document.body.clientHeight : null;
} 

function pausecomp(millis) {
	var date = new Date();
	var curDate = null;
	
	do { 
		curDate = new Date(); 
	} while(curDate-date < millis);
}

function timedBack(time_ms) {
	var t = setTimeout("window.history.back()", time_ms);
}

function getWindowInnerWidth() {
  	var myWidth = 0 ;
  	if( typeof( window.innerWidth ) == 'number' ) {
    	//Non-IE
    	myWidth = window.innerWidth;
  	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    	//IE 6+ in 'standards compliant mode'
    	myWidth = document.documentElement.clientWidth;
  	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    	//IE 4 compatible
    	myWidth = document.body.clientWidth;
  	}
  	//window.alert( 'Width = ' + myWidth );
  	
	return myWidth ;
}

function getWindowInnerHeight() {
  	var myHeight = 0 ;
  	if( typeof( window.innerWidth ) == 'number' ) {
    	//Non-IE
    	myHeight = window.innerHeight;
  	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    	//IE 6+ in 'standards compliant mode'
    	myHeight = document.documentElement.clientHeight;
  	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    	//IE 4 compatible
    	myHeight = document.body.clientHeight;
  	}
  	//window.alert( 'Height = ' + myHeight );
	
	return myHeight ;
}

function getScrollX() {
  	var scrOfX = 0 ;
  	if( typeof( window.pageYOffset ) == 'number' ) {
    	//Netscape compliant
    	scrOfX = window.pageXOffset;
  	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    	//DOM compliant
    	scrOfX = document.body.scrollLeft;
 	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    	//IE6 standards compliant mode
    	scrOfX = document.documentElement.scrollLeft;
  	}
  	//window.alert('Horizontal scrolling = ' + scrOfX);
  	return scrOfX ;
}

function getScrollY() {
  	var scrOfY = 0 ;
  	if( typeof( window.pageYOffset ) == 'number' ) {
    	//Netscape compliant
    	scrOfY = window.pageYOffset;
  	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    	//DOM compliant
    	scrOfY = document.body.scrollTop;
 	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    	//IE6 standards compliant mode
    	scrOfY = document.documentElement.scrollTop;
  	}
  	//window.alert('Vertical scrolling = ' + scrOfY);
  	return scrOfY ;
}

//	returneaza variabilele get din url
function url_get_vars(name) {
	var q = unescape(location.search.substring(1)).split(/[=&]/);
	for (var j = 0; j < q.length; j += 2) {
		if (q[j] == name) {
			return q[j+1];
		}
	}
	return null;
}

function getURLParam(url, strParamName) {
	var strReturn = "";
	if (!url)
		var strHref = window.location.href;
	else
		var strHref = url;
	if ( strHref.indexOf("?") > -1 ){
		var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
		var aQueryString = strQueryString.split("&");
		for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
			if (aQueryString[iParam].indexOf(strParamName + "=") > -1 ){
				var aParam = aQueryString[iParam].split("=");
				strReturn = aParam[1];
				break;
			}
		}
	}
	return strReturn;
}

function pushURLParam(url, strParamName, ParamValue) {
	var strReturn = "";
	if (!url)
		var strHref = window.location.href;
	else
		var strHref = url;
	//alert (strHref) ;
	if ( strHref.indexOf("?") > -1 ) {
		var url_principale = strHref.substr(0, strHref.indexOf("?")) ;
		strReturn += url_principale ;
		//alert (strReturn) ;
		var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
		var aQueryString = strQueryString.split("&");
		var has_written = false ;
		var put_or_modify = 'put' ;
		for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
			if (aQueryString[iParam].indexOf(strParamName + "=") > -1 ){	//	daca suntem la parametrul caruia vrem sa-i schimbam valoarea
				var aParam = aQueryString[iParam].split("=");
				if (has_written == false)
					strReturn += aParam[0] + "=" + ParamValue;
				else if (has_written == true)
					strReturn += "&" + aParam[0] + "=" + ParamValue;
				has_written = true ;
				put_or_modify = 'modify' ;
			} else {	//	daca nu suntem la parametrul caruia vrem sa-i schimbam valoarea
				if (has_written == false)
					strReturn += aQueryString[iParam] ;
				else if (has_written == true)
					strReturn += "&" + aQueryString[iParam] ;
				has_written = true ;
			}
		}
		if (put_or_modify == 'put') {
			if (has_written == false)
				strReturn += "?" + strParamName + "=" + ParamValue ;
			else if (has_written == true)
				strReturn += "&" + strParamName + "=" + ParamValue ;
		}
	} else {
		strReturn += strHref + "?" + strParamName + "=" + ParamValue ;
	}
	return strReturn;
}

function deleteURLParam(url, strParamName) {
	var strReturn = "";
	if (!url)
		var strHref = window.location.href;
	else
		var strHref = url;
	//alert (strHref) ;
	if ( strHref.indexOf("?") > -1 ) {
		var url_principale = strHref.substr(0, strHref.indexOf("?")) ;
		strReturn += url_principale ;
		//alert (strReturn) ;
		var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
		var aQueryString = strQueryString.split("&");
		var has_written = false ;
		for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
			if (aQueryString[iParam].indexOf(strParamName + "=") > -1 ){	//	daca suntem la parametrul pe care vrem sa-l stergem
			} else {	//	daca nu suntem la parametrul pe care vrem sa-l stergem
				if (has_written == false)
					strReturn += "?" + aQueryString[iParam] ;
				else if (has_written == true)
					strReturn += "&" + aQueryString[iParam] ;
				has_written = true ;
			}
		}
	} else {
		strReturn = strHref ;	
	}
	return strReturn;
}

function modif_createURLParam(url, strParamName, ParamValue) {
	var strReturn = "";
	if (!url)
		var strHref = window.location.href;
	else
		var strHref = url;
	
	var new_url = deleteURLParam(url, strParamName) ;	
	
	if ( new_url.indexOf("?") > -1 )
		strReturn += new_url + "&" + strParamName + "=" + ParamValue ;
	else
		strReturn += new_url + "?" + strParamName + "=" + ParamValue ;
	
	return strReturn ;
}

function isAlphaNumeric (str) {
	if (/[^a-zA-Z0-9._ ]/g.test(str))
	{
		return false; 	
	}
	else
		return true ;
}

function isFloat (str) {
	if (/[^0-9.]/g.test(str))
	{
		return false; 	
	}
	else
		return true ;
}

function checkCheckBox(id) {
	if ($(id).checked)
		$(id).checked = false ;
	else if (!$(id).checked)
		$(id).checked = true ;
	else
		$(id).checked = false ;
}

function set_div_product_details_border(id1, id2, id_content, px, brdColor, bgrdColor) {
	if (!px)
		var px = 1 ;
	if (!brdColor)
		var brdColor = '#555555' ;
		
	var border_relative_arr = [];
	var oborder_relative_arr = [];
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	crearea matricei cu bordele si marginile elementelor, dimensiuni la care sunt raportate calculele noilor dimeniuni
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (var i = px + 1; i <= px + 5; i++) {
		var relative = i - px + 1 ;
		var border_relative = $(id1 + relative).getStyle('border-left-width') ;
		if (border_relative)
			border_relative = parseInt(border_relative.replace( /px/, ''));
		else
			border_relative = 0 ;
		//alert ("border_relative " + relative + " : " + border_relative) ;
		
		var margin_relative = $(id1 + relative).getStyle('margin-left') ;
		if (margin_relative)
			margin_relative = parseInt(margin_relative.replace( /px/, '')) ;
		else
			margin_relative = 0 ;
		//alert ("margin_relative " + relative + " : " + margin_relative) ;
		
		border_relative_arr[relative] = border_relative + margin_relative ;
		//alert (relative + " => " + border_relative_arr[relative]) ;
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	//	calcularea noilor dimeniuni in functie de noua grosime
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (var i = px + 1; i <= px + 5; i++) {
	
		/////////////////////////////////////////////////////////////////////////////////////////////
		//	aflam dimensiunile initiale ale elementului pt care calculam noua bordura
		/////////////////////////////////////////////////////////////////////////////////////////////
		//	aflarea bordurii initiale a elementului pt care calculam noile dimensiuni
		var border_init = $(id1 + i).getStyle('border-left-width') ;
		if (border_init)
			border_init = parseInt(border_init.replace( /px/, ''));
		else
			border_init = 0 ;
		
		//	aflarea bordurii initiale a elementului pt care calculam noile dimensiuni
		var margin_init = $(id1 + i).getStyle('margin-left') ;
		if (margin_init)
			margin_init = parseInt(margin_init.replace( /px/, '')) ;
		else
			margin_init = 0 ;
		
		/////////////////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////////////////
		
		
		/////////////////////////////////////////////////////////////////////////////////////////////
		//	calculam noua vordura folosind functia lui costi
		/////////////////////////////////////////////////////////////////////////////////////////////
		var relative = i - px + 1 ;		
		//alert (relative + " => " + border_relative_arr[relative]) ;
		
		var new_border = Math.abs((border_init + margin_init) - border_relative_arr[relative]) + (px - 1) + border_init ;
		//alert ("new_border" + " : " + new_border) ;
		
		/////////////////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////////////////
		
		/////////////////////////////////////////////////////////////////////////////////////////////
		//	aplicam noua bordura elementului
		/////////////////////////////////////////////////////////////////////////////////////////////
		
		$(id1 + i).style.borderLeft = "solid " + new_border + "px " + brdColor ;
		$(id1 + i).style.borderRight = "solid " + new_border + "px " + brdColor ;
		
		$(id2 + i).style.borderLeft = "solid " + new_border + "px " + brdColor ;
		$(id2 + i).style.borderRight = "solid " + new_border + "px " + brdColor ;
		
		/////////////////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////////////////
		
		/////////////////////////////////////////////////////////////////////////////////////////////
		//	modificam si culoarea backgroundului
		/////////////////////////////////////////////////////////////////////////////////////////////
		
		$(id1 + i).style.backgroundColor = bgrdColor ;
		$(id2 + i).style.backgroundColor = bgrdColor ;
		
		/////////////////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////////////////
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	modificam bordurile celorlalte elemente, pt care nu a fost necesara noua bordura (noua bordura = grosimea data de variabila px)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	for (var i = px + 5; i <= 10; i++) {
		if (i <= 10) {
			$(id1 + i).style.borderLeft = "solid " + px + "px " + brdColor ;
			$(id1 + i).style.borderRight = "solid " + px + "px " + brdColor ;
			$(id1 + i).style.backgroundColor = bgrdColor ;
			
			$(id2 + i).style.borderLeft = "solid " + px + "px " + brdColor ;
			$(id2 + i).style.borderRight = "solid " + px + "px " + brdColor ;
			$(id2 + i).style.backgroundColor = bgrdColor ;
		}
	}	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	randurile de la primul la cel = cu px sunt umplute, avand culoarea data de variabila culorii bordurii
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	for (var j = 1; j <= px; j++) {
		$(id1 + j).style.backgroundColor = brdColor ;
		$(id1 + j).style.borderColor = brdColor ;
		$(id2 + j).style.backgroundColor = brdColor ;
		$(id2 + j).style.borderColor = brdColor ;
	}	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//	la final, latimea si culoarea bordurilor divului ce contine imaginile sunt modificate
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	$(id_content).style.borderLeft = "solid " + px + "px " + brdColor ;
	$(id_content).style.borderRight = "solid " + px + "px " + brdColor ;
	$(id_content).style.backgroundColor = bgrdColor ;
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}


function isset(varname) {
  	if ( typeof(window[varname]) != "undefined" ) 
		return true;
  	else 
		return false;
}


function get_html_translation_table(table, quote_style) {
    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: noname
    // +   bugfixed by: Alex
    // +   bugfixed by: Marco
    // %          note: It has been decided that we're not going to add global
    // %          note: dependencies to php.js. Meaning the constants are not
    // %          note: real constants, but strings instead. integers are also supported if someone
    // %          note: chooses to create the constants themselves.
    // %          note: Table from http://www.the-art-of-web.com/html/character-codes/
    // *     example 1: get_html_translation_table('HTML_SPECIALCHARS');
    // *     returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}
    
    var entities = {}, histogram = {}, decimal = 0, symbol = '';
    var constMappingTable = {}, constMappingQuoteStyle = {};
    var useTable = {}, useQuoteStyle = {};
    
    useTable      = (table ? table.toUpperCase() : 'HTML_SPECIALCHARS');
    useQuoteStyle = (quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT');
    
    // Translate arguments
    constMappingTable[0]      = 'HTML_SPECIALCHARS';
    constMappingTable[1]      = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';
    
    // Map numbers to strings for compatibilty with PHP constants
    if (!isNaN(useTable)) {
        useTable = constMappingTable[useTable];
    }
    if (!isNaN(useQuoteStyle)) {
        useQuoteStyle = constMappingQuoteStyle[useQuoteStyle];
    }
    
    if (useQuoteStyle != 'ENT_NOQUOTES') {
        entities['34'] = '&quot;';
    }
 
    if (useQuoteStyle == 'ENT_QUOTES') {
        entities['39'] = '&#039;';
    }
 
    if (useTable == 'HTML_SPECIALCHARS') {
        // ascii decimals for better compatibility
        entities['38'] = '&amp;';
        entities['60'] = '&lt;';
        entities['62'] = '&gt;';
    } else if (useTable == 'HTML_ENTITIES') {
        // ascii decimals for better compatibility
      entities['38']  = '&amp;';
      entities['60']  = '&lt;';
      entities['62']  = '&gt;';
      entities['160'] = '&nbsp;';
      entities['161'] = '&iexcl;';
      entities['162'] = '&cent;';
      entities['163'] = '&pound;';
      entities['164'] = '&curren;';
      entities['165'] = '&yen;';
      entities['166'] = '&brvbar;';
      entities['167'] = '&sect;';
      entities['168'] = '&uml;';
      entities['169'] = '&copy;';
      entities['170'] = '&ordf;';
      entities['171'] = '&laquo;';
      entities['172'] = '&not;';
      entities['173'] = '&shy;';
      entities['174'] = '&reg;';
      entities['175'] = '&macr;';
      entities['176'] = '&deg;';
      entities['177'] = '&plusmn;';
      entities['178'] = '&sup2;';
      entities['179'] = '&sup3;';
      entities['180'] = '&acute;';
      entities['181'] = '&micro;';
      entities['182'] = '&para;';
      entities['183'] = '&middot;';
      entities['184'] = '&cedil;';
      entities['185'] = '&sup1;';
      entities['186'] = '&ordm;';
      entities['187'] = '&raquo;';
      entities['188'] = '&frac14;';
      entities['189'] = '&frac12;';
      entities['190'] = '&frac34;';
      entities['191'] = '&iquest;';
      entities['192'] = '&Agrave;';
      entities['193'] = '&Aacute;';
      entities['194'] = '&Acirc;';
      entities['195'] = '&Atilde;';
      entities['196'] = '&Auml;';
      entities['197'] = '&Aring;';
      entities['198'] = '&AElig;';
      entities['199'] = '&Ccedil;';
      entities['200'] = '&Egrave;';
      entities['201'] = '&Eacute;';
      entities['202'] = '&Ecirc;';
      entities['203'] = '&Euml;';
      entities['204'] = '&Igrave;';
      entities['205'] = '&Iacute;';
      entities['206'] = '&Icirc;';
      entities['207'] = '&Iuml;';
      entities['208'] = '&ETH;';
      entities['209'] = '&Ntilde;';
      entities['210'] = '&Ograve;';
      entities['211'] = '&Oacute;';
      entities['212'] = '&Ocirc;';
      entities['213'] = '&Otilde;';
      entities['214'] = '&Ouml;';
      entities['215'] = '&times;';
      entities['216'] = '&Oslash;';
      entities['217'] = '&Ugrave;';
      entities['218'] = '&Uacute;';
      entities['219'] = '&Ucirc;';
      entities['220'] = '&Uuml;';
      entities['221'] = '&Yacute;';
      entities['222'] = '&THORN;';
      entities['223'] = '&szlig;';
      entities['224'] = '&agrave;';
      entities['225'] = '&aacute;';
      entities['226'] = '&acirc;';
      entities['227'] = '&atilde;';
      entities['228'] = '&auml;';
      entities['229'] = '&aring;';
      entities['230'] = '&aelig;';
      entities['231'] = '&ccedil;';
      entities['232'] = '&egrave;';
      entities['233'] = '&eacute;';
      entities['234'] = '&ecirc;';
      entities['235'] = '&euml;';
      entities['236'] = '&igrave;';
      entities['237'] = '&iacute;';
      entities['238'] = '&icirc;';
      entities['239'] = '&iuml;';
      entities['240'] = '&eth;';
      entities['241'] = '&ntilde;';
      entities['242'] = '&ograve;';
      entities['243'] = '&oacute;';
      entities['244'] = '&ocirc;';
      entities['245'] = '&otilde;';
      entities['246'] = '&ouml;';
      entities['247'] = '&divide;';
      entities['248'] = '&oslash;';
      entities['249'] = '&ugrave;';
      entities['250'] = '&uacute;';
      entities['251'] = '&ucirc;';
      entities['252'] = '&uuml;';
      entities['253'] = '&yacute;';
      entities['254'] = '&thorn;';
      entities['255'] = '&yuml;';
    } else {
        throw Error("Table: "+useTable+' not supported');
        return false;
    }
    
    // ascii decimals to real symbols
    for (decimal in entities) {
        symbol = String.fromCharCode(decimal);
        histogram[symbol] = entities[decimal];
    }
    
    return histogram;
}

function htmlspecialchars (string, quote_style) {
    // http://kevin.vanzonneveld.net
    // +   original by: Mirek Slugen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Nathan
    // +   bugfixed by: Arno
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: get_html_translation_table
    // *     example 1: htmlspecialchars("<a href='test'>Test</a>", 'ENT_QUOTES');
    // *     returns 1: '&lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;'
 
    var histogram = {}, symbol = '', tmp_str = '', entity = '';
    tmp_str = string.toString();
    
    if (false === (histogram = get_html_translation_table('HTML_SPECIALCHARS', quote_style))) {
        return false;
    }
    
    for (symbol in histogram) {
        entity = histogram[symbol];
        tmp_str = tmp_str.split(symbol).join(entity);
    }
    
    return tmp_str;
}