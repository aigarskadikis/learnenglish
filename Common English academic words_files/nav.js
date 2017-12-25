// nav
// weg 23 doesn't work now that there are multiple subject help indexes
// CHNAGE ROOT WHEN GOING LIVE!!

browserDetect();  // disabled - restore

var pageTitle="";
var fenster=null;
var popColor="red";
var mColor='#FFFF99' // selected menu item color

var root="http://esl.fis.edu/";
//var root="file:///C:/Dokumente und Einstellungen/XP/Eigene Dateien/Visual Studio 2010/WebSites/ESL/";
//var root= "http://localhost:1161/ESL/"
var fisLogo='<div align="center"><a title="Go to the homepage of Frankfurt International School." href="http://www.fis.edu"><img title="Go to FIS homepage" border="0" src="' + root + 'images/fis.gif" alt="FIS homepage"></a><br></div>';

var stil1=' style="color: ' + mColor + '; font: italic 8pt Verdana"'
var stil2=' style="color: ' + mColor + '; font: 8pt Verdana"'

var items=new Array("Home","Learners","Teachers","Parents","Grammar","Vocabulary","Site Information")
var URL=new Array(root+"index.htm",root+"learners/index.htm",root+"teachers/index.htm",root+"eltern/index.htm",root+"grammar/index.htm",root+"vocab/index.htm",root+"info/index.htm")

var maus = ' class="menuArrow" href="'; 

var hr='<hr class="meet">'+fisLogo+'<div align="center" style="font-size: 80%">&copy; Copyright <a class="blink" href="' + root + 'info/infofiles/master.htm" title="Information about the creator of this site, and his email address.">Paul Shoebottom</a> '+copyInfo()+'&nbsp;&nbsp;</div><div><address><a'+maus+'title="Homepage of this website" href="http://esl.fis.edu">http://esl.fis.edu</a></address></div>';


// var hr='<hr class=meet><div align=center></a></div><address>&copy Copyright 1996-2007 <A'+maus+' class=picInfo href="' + root + 'info/infofiles/master.htm" title="Information about the creator of this site, and his email address.">Paul Shoebottom</A> at <A'+maus+' class=picInfo href="http://www.fis.edu" title="Click to go to the homepage of Frankfurt International School.">Frankfurt International School</A><BR><a'+maus+'class=picInfo title="Homepage of this website" href="http://esl.fis.edu">http://esl.fis.edu</a></address>';

//popAlert("hr"+hr)

var endIndex = hr; 






function fullsizeAll (picNum) {

var datei=picNum+ ".htm";

var fensterData='dependent=0,toolbar=0,locationbar=0,directories=0,status=0,menubar=0,scrollbars=1,width=800,height=600,resizable=no';

 fenster=window.open(datei,'tt',fensterData);
 
 fenster.moveTo(0,0);
// fenster.document.close();

}


function fullsize (picNum,mode) {

var fensterData='dependent=1,toolbar=0,locationbar=0,directories=0,status=0,menubar=0,scrollbars=1,width=800,height=600,resizable=no';

 fenster=window.open('','tt',fensterData);
 var t="<HTML><head><TITLE>Portrait</TITLE><SCRIPT LANGUAGE=\"JavaScript\" SRC=\"" + root + "script/nav.js\"></SCRIPT></head>";
 t+="<BODY><DIV ID='all'>";
if (mode==1) {
//t+="<TABLE><TR><TD width=90%><img SRC=\""+root+"images/home/" + picNum + ".jpg\" width=640px height=480px><p align=center><a href=\"javascript: newWindow>Click for a show of all student artifacts.</a></p></TD>"; 

t+="<TABLE><TR><TD width='90%'><img SRC=\""+root+"images/home/" + picNum + ".jpg\" width='640px' height='480px'><p align='center'><a href=\"javascript: newWindow('images/home/indexArtwork.htm^800^600')\">Click for a show of all student artefacts.</a></p></TD>"; 
}
else
{
t+="<TABLE><TR><TD width='90%'><img SRC=\""+root+"images/home/" + picNum + ".jpg\" width='500px' height='480px'><p align='center'><a href=\"javascript: newWindow('images/home/indexPortraits.htm^800^600')\">Click for a show of all student portraits.</a></p></TD>"; 
}

 t+="<TD><a class='small' href='javascript: self.close()'>CLOSE</a></TD></TR></TABLE></BODY></HTML>";
 fenster.document.write(t);
 fenster.moveTo(0,0);
// fenster.document.close();

}

function newWindow (winData) {  // call like this: <a class=show href="javascript:newWindow('images/home/datei.htm^800^600')">
//																																		'vocab/academic/academic-important.htm'					
// IT DOES NOT WORK IF TARGET IS SET 

var parts=winData.split("^");
var fensterData='dependent=1,toolbar=0,locationbar=0,directories=0,status=0,menubar=0,scrollbars=1,width=' + parts[1] + ',height=' + parts[2] + ',resizable=yes';
fenster=window.open(root +  parts[0],'tt',fensterData);

fenster.moveTo(0,0);
fenster.document.close();

}

function newWindow2 (winData) { // used to open book answer + extra pages

var fenster2=window.open(winData,'','width=1024,height=768,resizable=yes,scrollbars=yes');
fenster2.moveTo(0,0);

}

function getMenuLine(currIndex, menuMode) {

var temp="";

for (var c=0; c < 7; c++) {

  if (c==currIndex)
   {
   if (menuMode==0)  
     {
     temp=temp +  '<span ' + stil1 + '>' + items[c] + '</span>'
     }
     else
     {
      temp=temp  + getURL(c) + '<span ' + stil2 + '>' + items[c] + '</span></a>'
  
     }
   }
   else
   {
      temp=temp  + getURL(c) + items[c] + '</a>'
   }
    if (c < 6) {temp=temp+'&nbsp;&nbsp;<span class="ktrenn">&middot;</span>&nbsp;&nbsp;'}
}

return (temp);
}

function getURL(num) {

return('<a class="kopf" href=\"' + URL[num] + '\">')

}


function a (currIndex, menuMode, titel, titelMode) {


var sClass="";

pageTitle=titel;

//var t= "<div id='menubar'><table width='100%'><tr><td style=\"color: #FFFFFF\" width='75%' align='left'><a name='kopf'></a>&nbsp;" + getMenuLine(currIndex, menuMode)+"</td><td width='25%' align='right'>";
var t = "<nav id='menubar'><table width='100%'><tr><td style=\"color: #FFFFFF\" width='75%' align='left'>" + getMenuLine(currIndex, menuMode) + "</td><td width='25%' align='right'>";



if (currIndex==0) {  // homepage only
  
t+= "<a class='kopf' style=\"vertical-align: top\" href=\"info/infofiles/search.htm\" title=\"Information about searching this site.\">Search site&nbsp;&nbsp;&nbsp;</a>&nbsp;&nbsp;<br><span id='tag'><i> ..&nbsp;all your English needs ..&nbsp;&nbsp;</i></span></td></tr></table></div>";

}
else
{

t+="<span class='logo'><a class='hp' title=\"Return to homepage.\" href=\"" + root+"index.htm" + "\">A guide to learning English</a></span><br><span id='tag'> ..&nbsp;all your English needs ..&nbsp;&nbsp;</span></td></tr></table></nav>";

}

if (1==2) {
//popAlert(t)
if (titel!="") {
 if (titelMode!=null)  {   // title in left of screen
    t+="<h1 class='h1TitleLeft'>"+titel+"</h1>";
	//alert(t);
   }
   else  
   {
   // title in middle of screen
  // t+="<h1 class='h1TitleCenter'>"+titel+"</h1>";
   }
}


document.getElementById("thisTitel").innerHTML=titel;
} // end if 1==2

if (document.URL.indexOf("fis/german") == -1 && document.title.indexOf("Wortschatz") == -1) {
    document.write(t);
	
} else {
    document.write('<header><div style="width: 100%; height: 30px; background: black;"><div style="float: left; color: white; font-weight: bold; font: 20px Verdana sans-serif;  padding: 4px 10px;">German 1: 2012-2013</div><div style="float: right; color: white; font-weight: bold; font: 20px Verdana sans-serif; padding: 4px 10px;">Mr Shoebottom</div></div><div style="width: 100%; height: 10px; background: red;"></div><div style="width: 100%; height: 4px; background: gold; margin-bottom: 0px;"></div></header>');
}

}


function homePageEnd () {

document.write(fisLogo+'<div align="center" style="font-size: 80%">&copy; Copyright <a class="blink" href="' + root + 'info/infofiles/master.htm" title="Information about the creator of this site, and his email address.">Paul Shoebottom</a> '+ copyInfo() +'&nbsp;&nbsp;</div><div><address>http://esl.fis.edu</address></div>');

}

function copyInfo() {

var diesJahr=new Date();
return("1996-"+diesJahr.getFullYear());
}

function browserDetect() {

//if (! document.all) {window.location.replace("http://esl.fis.edu/index_a.htm")}

}


function pop (num,text) {

var schirmW = screen.availWidth - 20;

var winData='dependent=1,toolbar=0,locationbar=0,directories=0,status=0,menubar=0,scrollbars=0,height=200,width=' + schirmW + ',top=1,left=1,resizable=no';

 fenster=window.open('','tt',winData);
 fenster.document.write('<div style="margin: 20px; font: 11pt Verdana">'+text+'</div>');
 fenster.document.close();

}

function checkFenster () {

}

function geheZu(datei) {

top.location.href=datei;
}



function mobileVersion() {

    document.getElementById("alles").style.width = "320px";
    document.getElementById("menubar").style.display = "none";
    document.getElementById("raum").style.display = "none";
    document.getElementById("art").style.display = "none";
    document.getElementById("biggif").style.display = "none";
    document.getElementById("endHeim").style.display = "none";
    document.getElementById("mobile").style.display = "block";
    insertMobile();
    document.getElementById("alles").innerHTML = document.getElementById("alles").innerHTML + "<div><a href='#kopf' id='gototop'>Top</a></div>";

}