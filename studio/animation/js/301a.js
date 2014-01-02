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

function getScrollY() {
	var scrOfX = 0 ;
	var scrOfY=0 ;
	if(typeof(window.pageYOffset)=='number') {
		scrOfY=window.pageYOffset;
		scrOfX=window.pageXOffset;
	} else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)) {
		scrOfY=document.body.scrollTop;
		scrOfX=document.body.scrollLeft;
	} else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)) {
		scrOfY=document.documentElement.scrollTop;
		scrOfX=document.documentElement.scrollLeft;
	}
	return scrOfY;
}

document.write("<style>") ;

document.write(".colorpicker301{") ;
document.write("text-align:center;") ;
document.write("visibility:hidden;") ;
document.write("display:none;") ;
document.write("position:absolute;") ;
document.write("top:0px;") ;
document.write("left:0px;") ;
document.write("background-color:#FFF;") ;
document.write("border:solid 1px #CCC;") ;
document.write("padding:4px;") ;
document.write("z-index:999;") ;
//document.write("filter:progid:DXImageTransform.Microsoft.Shadow(color=#D0D0D0,direction=135);") ;
document.write("}") ;

document.write(".o5582brd{") ;
document.write("border-bott6om:solid 1px #DFDFDF;") ;
document.write("border-right:solid 1px #DFDFDF;") ;
document.write("padding:0;") ;
document.write("width:12px;") ;
document.write("height:14px;") ;
document.write("}") ;

document.write("a.o5582n66,.o5582n66,.o5582n66a{" ) ;
document.write("font-family:arial,tahoma,sans-serif;") ;
document.write("text-decoration:underline;") ;
document.write("font-size:9px;") ;
document.write("color:#666;") ;
document.write("border:none;") ;
document.write("}") ;

document.write(".o5582n66,.o5582n66a{") ;
document.write("text-align:center;") ;
document.write("text-decoration:none;") ;
document.write("}") ;

document.write("a:hover.o5582n66{") ;
document.write("text-decoration:none;") ;
document.write("color:#FFA500;") ;
document.write("cursor:pointer;") ;
document.write("}") ;

document.write(".a01p3{") ;
document.write("padding:1px 4px 1px 2px;") ;
document.write("background:whitesmoke;") ;
document.write("border:solid 1px #DFDFDF;") ;
document.write("}") ;

document.write("</style>");

function gettop(){
	csBrHt=0;
	if(typeof(window.innerWidth)=='number'){
		csBrHt=window.innerHeight;
	} else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)) {
		csBrHt=document.documentElement.clientHeight;
	} else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){
		csBrHt=document.body.clientHeight;
	}
	ctop=((csBrHt/2)-132)+getScrollY();
	return ctop;
}

function getLeft(){
	var csBrWt=0;
	if(typeof(window.innerWidth)=='number'){
		csBrWt=window.innerWidth;
	} else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){
		csBrWt=document.documentElement.clientWidth;
	} else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){
		csBrWt=document.body.clientWidth;
	}
	cleft=(csBrWt/2)-125;
	return cleft;
}

var clos1 = "INCHIDE" ;
var tt6 = "" ;
var hm6 = "" ;
hm6 += tt6 ;
var tt6 = "" ;

function setCCbldID6(objID,val){
	document.getElementById(objID).value=val;
}

function setCCbldSty6(objID,prop,val){
	switch(prop){
		case "bc":
			if(objID!='none'){
				document.getElementById(objID).style.backgroundColor=val;
			}
			break;
		case "vs":
			document.getElementById(objID).style.visibility=val;
			break;
		case "ds":
			document.getElementById(objID).style.display=val;
			break;
		case "tp":
			document.getElementById(objID).style.top=val;
			break;
		case "lf":
			document.getElementById(objID).style.left=val;
			break;
	}
}

function putOBJxColor6(OBjElem, Samp, pigMent){
	if(pigMent != 'x'){
		setCCbldID6(OBjElem,pigMent);
		setCCbldSty6(Samp,'bc',pigMent);
	}
	setCCbldSty6('colorpicker301','vs','hidden');
	setCCbldSty6('colorpicker301','ds','none');
	$('div_cover_2').hide() ;
}

function showColorGrid3(OBjElem, Sam, general){
	
	$('div_cover_2').show() ;	
	
	var objX = new Array('00','33','66','99','CC','FF');
	var c = 0;
	var z = '"' + OBjElem+'","'+Sam+'",""';
	var xl='"'+OBjElem+'","'+Sam+'","x"';
	var mid='';
	mid += '<center>' ;
	mid += '<table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" style="border:solid 1px #F0F0F0;padding:2px;">' ;
	mid += '<tr>';
	mid += "<td colspan='18' align='left' style='font-size:10px;background:#660000;color:#FFF;font-family:arial;'>&nbsp;Selectati culoarea</td>" ;
	mid += "</tr>" ;
	mid += "<tr>" ;
	mid += "<td colspan='18' align='center' style='margin:0;padding:2px;height:14px;' >" ;
	mid += "<input class='o5582n66' type='text' size='10' id='o5582n66' value='#FFFFFF' disabled='disabled'>&nbsp;&nbsp;&nbsp;" ;
	mid += "<input class='o5582n66a' type='text' size='2' style='width:14px;' id='o5582n66a' value='' style='border:solid 1px #666;' disabled='disabled'>&nbsp;&nbsp;&nbsp;" ;
	mid += "<a class='o5582n66' href='javascript:onclick=putOBJxColor6("+xl+")'>" ;
	mid += "<span class='a01p3'>"+clos1+"</span>" ;
	mid += "</a>" ;
	mid += '</td>' ;
	mid += '</tr>' ;
	mid += "<tr>";
	var br=1;
	for(o=0;o<6;o++){
		mid += '</tr><tr>';
		for(y=0;y<6;y++){
			if(y==3){
				mid +='</tr><tr>';
			}
			for(x=0;x<6;x++){
				var grid='';
				grid=objX[o]+objX[y]+objX[x];
				var b="'"+OBjElem+"', '"+Sam+"','#"+grid+"'";
				mid += '<td class="o5582brd" style="background-color:#'+grid+'">' ;
				mid += '<a class="o5582n66"  href="javascript:onclick=putOBJxColor6('+b+'); ' ;
				if (general == "ok")
					mid += 'set_all_bgs(\'#' + grid + '\')' ;
				mid += '" onmouseover=javascript:document.getElementById("o5582n66").value="#'+grid+'";javascript:document.getElementById("o5582n66a").style.backgroundColor="#'+grid+'";  title="#'+grid+'">' ;
				mid += '<div style="width:12px;height:14px;"></div>' ;
				mid += '</a>' ;
				mid += '</td>';
				c++;
			}
		}
	}
	mid += '</tr></table>';
	var objX=new Array('0','3','6','9','C','F');
	var c=0;
	var z='"'+OBjElem+'","'+Sam+'",""';
	var xl='"'+OBjElem+'","'+Sam+'","x"';
	mid+='<table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" style="border:solid 1px #F0F0F0;padding:1px;"><tr>';
	var br=0;
	for(y=0;y<6;y++){
		for(x=0;x<6;x++){
			if(br==18){
				br=0;
				mid+='</tr><tr>';
			}
			br++;
			var grid='';
			grid=objX[y]+objX[x]+objX[y]+objX[x]+objX[y]+objX[x];
			var b="'"+OBjElem+"', '"+Sam+"','#"+grid+"'";
			mid += '<td class="o5582brd" style="background-color:#'+grid+'">' ;
			mid += '<a class="o5582n66"  href="javascript:onclick=putOBJxColor6('+b+');' ;
			if (general == "ok")
				mid += 'set_all_bgs(\'#' + grid + '\')' ;
			mid += '" onmouseover=javascript:document.getElementById("o5582n66").value="#'+grid+'";javascript:document.getElementById("o5582n66a").style.backgroundColor="#'+grid+'";  title="#'+grid+'">' ;
			mid += '<div style="width:12px;height:14px;"></div>' ;
			mid += '</a>' ;
			mid += '</td>';
			c++;
		}
	}
	mid += "</tr>" ;
	mid += "<tr>" ;
	mid += "<td colspan='18' align='right' style='padding:2px;border:solid 1px #FFF;background:#FFF;'>" ;
	mid += "<a href='"+hm6+"' style='color:#666;font-size:8px;font-family:arial;text-decoration:none;lett6er-spacing:1px;'>"+tt6+"</a>" ;
	mid += "</td>";
	mid += '</tr>' ;
	mid += '</table>' ;
	mid += '</center>';
	
	setCCbldSty6('colorpicker301','tp','100px');
	
	var window_height = getWindowInnerHeight() ;
	var window_width = getWindowInnerWidth() ;
	var ScrollX = getScrollX() ;
	var ScrollY = getScrollY() ;
	
	var Height_div_colorpicker301 = 253 ;
	var Width_div_colorpicker301 = 246 ;	
	
	document.getElementById('colorpicker301').style.top = ScrollY + window_height / 2 - Height_div_colorpicker301 / 2 + "px" ;
	document.getElementById('colorpicker301').style.left = ScrollX + window_width / 2 - Width_div_colorpicker301 / 2 + "px" ;	
	
	setCCbldSty6('colorpicker301','vs','visible');
	setCCbldSty6('colorpicker301','ds','block');
	document.getElementById('colorpicker301').innerHTML=mid;
}

function set_all_bgs(color_hx) {
	document.getElementById('color_hx_nume_prenume').value = color_hx;
	document.getElementById('color_nume_prenume').style.backgroundColor = color_hx;
	
	document.getElementById('color_hx_functie').value = color_hx;
	document.getElementById('color_functie').style.backgroundColor = color_hx;
	
	var num_of_rows_1 = document.getElementById('num_of_rows_1').value ;
	for (var i = 1; i <= num_of_rows_1; i++) {
		if ($('color_rand_1_' + i)) {
			document.getElementById('color_rand_1_' + i).style.backgroundColor = color_hx;
			document.getElementById('color_hx_rand_1_' + i).value = color_hx;
		}
	}
	var num_of_rows_2 = document.getElementById('num_of_rows_2').value ;
	for (var i = 1; i <= num_of_rows_2; i++) {
		if ($('color_rand_2_' + i)) {
			document.getElementById('color_rand_2_' + i).style.backgroundColor = color_hx;
			document.getElementById('color_hx_rand_2_' + i).value = color_hx;
		}
	}
}