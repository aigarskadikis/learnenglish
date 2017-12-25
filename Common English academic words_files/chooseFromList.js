
var itemInfo = new Array();
var liste="";
var count=0;
var itemDivs;
var prevNum=-1;
var breadcrumb="";
var source="";
var bAcademic=new Boolean(false);
var titel = new Array();
var summary = new Array();
var blog = new Array();
var comments = new Array();
var rankLine=new Array();
var moreBei = new Array();
var mode=0; // annotated - academic
var wordZahl = 0; 
var exList="";
var acLinkHTML="<div id='clickedWord'></div>";

if (document.URL.toLowerCase().indexOf("non") == -1) {mode=0} else {mode=1}
var iCurrentBlog=-1;
var iPrevBlog=0;

var ranking= new Boolean(false);
if (document.URL.toLowerCase().indexOf("rank") != -1)
{
ranking=true;
}

function z(s) {

wordZahl=Number(s);
//popAlert(wordZahl)
}

function colorClass(j) {

   if (j % 2 !=1)
   {
   return "<div class='farbLine'>";
   }
   else
   {
   return "<div class='tite'>";
   }
}

function truncate (num)

{
num=num.substring(0,3)
if(num.charAt(2)==",") {num=num.substring(0,2)}
return (num.replace(",",".")+"&nbsp;&nbsp;")

}


if (document.URL.indexOf("cademic")!=-1)
{
bAcademic=true;
}


function q(s) {
if (bAcademic==true) {

var parts=s.split("~");
titel[count]=parts[0].replace(/ /g,"");
summary[count]=parts[0].replace(/ /g,"");
moreBei[count]=parts[7];
blog[count]=parts[0] + "~" + putinlink(parts[1]) + "~" + putinlink(parts[2])+ "~" + parts[3] + "~" + putinlink(parts[4]) + "~" + parts[6];
liste+="<div class='liste'>"+trim(titel[count])+ "</div>";

itemInfo[count]=blog[count];


}
else
{
var t = s.split("^");
liste+="<div class='liste'>"+trim(t[0])+ "</div>"; //t[0] is phrasal/proverb etc. elemnet
itemInfo[count]=t[1];  //// rest of ~ delimited entry

}
count++;

}

function initD() {

source=getSource();

document.getElementById("myp").innerHTML=liste;
//alert(liste)
attachClickCode();
document.getElementById("b1").style.visibility="hidden";
document.getElementById("b2").style.visibility="hidden";
setScrollHeight();
placeElements(); 
//placeScroll(); 

}

function getSource() {

if (document.URL.toLowerCase().indexOf("idiom") !=-1) 
{
return "idiom";
}
else if (document.URL.toLowerCase().indexOf("phras") !=-1) 
{
return "phrasal";
}
else if (document.URL.toLowerCase().indexOf("proverb") !=-1) 
{
return "proverb";
}
else if (document.URL.toLowerCase().indexOf("academic") !=-1) 
{
return "academic";
}

{
popAlert("Unidentified source")
}


}

function placeElements() { 

var t='<br><div><table width="100%"><tr><td align="left"><a target="_top" class="link" href="../../index.htm">Home</a> <img src="../../images/arrow.gif" width="23" height="8">&nbsp;<a target="_top" class="link" href="../index.htm">Vocabulary</a>&nbsp;<img src="../../images/arrow.gif" width="23" height="8">&nbsp;<a target="_top" class="link" ^&nbsp;&nbsp;&nbsp; </td><td align="right"><a class="link" href="#kopf">Top</a></td></tr></table></div><hr class="meet"><address>&copy; Copyright 1996-2011 <a target="_top" class="link" href="../../info/infofiles/master.htm" title="Information about the creator of this site, and his email address.">Paul Shoebottom</a> at <a target="_top" class="link" href="http://www.fis.edu" title="Click to go to the homepage of Frankfurt International School.">Frankfurt International School</a><br><a target="_top" title="Homepage of this website" class="link" href="http://esl.fis.edu">http://esl.fis.edu</a>';
switch (source) {
case "idiom":
breadcrumb=t.replace("^",'href="../index-id.htm">Idioms</a>')
break;
case "phrasal":
breadcrumb=t.replace("^",'href="../index-pv.htm">Phrasal verbs</a>')
break;
case "proverb":
breadcrumb=t.replace("^",'href="../index-pr.htm">Proverbs</a>')
break;
}
document.getElementById("wScript").innerHTML=breadcrumb;
}


function placeScroll() {  // not needed places scroll to screen right

var breite=(getWidth()-130).toString();
document.getElementById("pseudoWindow").style.left=breite+"px"; 
}

function setScrollHeight() {

var hoehe=(getHeight()-100).toString();
document.getElementById("outerWrapper").style.height=hoehe+"px";
document.getElementById("arrows").style.top=(getHeight()-33).toString()+"px";
}

function attachClickCode() {

itemDivs=getElementsByClassName("liste","div");


for (c=0; c < itemDivs.length;c++) {
 itemDivs[c].setAttribute("id", "d"+c.toString()); 
 itemDivs[c].setAttribute("style", "cursor: pointer"); 
 itemDivs[c].onclick=function() {
 showItem(this.id);
 return false;
  }
 }

}

function showItem(dies) {

var thisItem=Number(dies.substring(1));
upDate(thisItem);
prevNum=thisItem;
checkButtonStatus();
}

function upDate (n) {

if (prevNum !=-1) {
 document.getElementById("d"+prevNum.toString()).style.backgroundColor="white";
}
document.getElementById("d"+n.toString()).style.backgroundColor="yellow";
document.getElementById("itemListing").innerHTML=acLinkHTML+thisElement(n)+format(itemInfo[n],document.getElementById("d"+n.toString()).innerHTML);
//alert(document.getElementById("d"+n.toString()).innerHTML)
if (document.getElementById("mehrEx") && moreBei[Number(n)] == 0) {document.getElementById("mehrEx").innerHTML=""} // turn off .. more examples
//popAlert(thisElement(n)+format(itemInfo[n]))

}

function thisElement(n) {

switch (source) {
case "idiom":
return("<h3 class='lTit'>Idioms containing the element: <span class='highItem'>" + document.getElementById("d"+n.toString()).innerHTML+"</span> </h3>");break;
case "phrasal":
return("<h3 class='lTit'>Phrasal verbs containing the element: <span class='highItem'>" + document.getElementById("d"+n.toString()).innerHTML+"</span> </h3>");break;
case "proverb":
return("<h3 class='lTit'>Proverbs containing the element: <span class='highItem'>" + document.getElementById("d"+n.toString()).innerHTML+"</span> </h3>");break;
case "academic":
//return("<h3 class='lTit'>Academic: <span class='highItem'>" + document.getElementById("d"+n.toString()).innerHTML+"</span> </h3>");
return("<br>");
break;
default:
popAlert("Problem."); break;
}
}

function format(kette,mott) {

var temp="";
var stopp=".";
var ein="";

switch (source) { // not set anywhere
case "idiom":
quelle="Idiom";
break;
case "phrasal":
quelle="Verb";
ein="to ";
stopp="";
break;
case "proverb":
quelle="Proverb";
break;
case "academic":
quelle="Academic word";
stopp="";
break;
}
//alert(quelle)
if (source=="academic") {

temp=formatIdiom(kette);

}
else  // phrasal proverb idiom quote (later)
{

var exa="";
var parts=kette.split("|")
parts.sort();
//var quelle="";


for(var i=1; i < parts.length; i++) {
var parts2=parts[i].split("~");
 for(var c=0; c < parts2.length; c++) {
  switch (c) {
  case 0:
  temp+="<table><tr><td class='tit'>"+quelle+"</td><td class='idi'>"+ein+parts2[c]+ stopp + "</td></tr>";
  break;  
  case 1:
  temp+="<tr><td class='tit'>Definition</td><td class='idDef'>"+parts2[c]+"</td></tr>";
  break;  
  case 2:
  if (quelle!="Proverb") {
  var parts3=parts2[2].split("#");
  
  if (parts3.length ==1){exa="Example"}else{exa="Examples"}
  temp+="<tr><td class='tit'>" + exa + "</td><td class='idExam'>";
  for(var j=0; j<parts3.length; j++) {
   temp+="<img src=\"../../images/li.gif\"> " + replaceStar(parts3[j],mott)+"<br>";
	}

  temp+="</td></tr>";
  }
  break;   
  case 3:
  if (parts2[c] != "@") {
  temp+="<tr><td class='tit'>Explanation</td><td class='idExplan'>"+parts2[c]+"</td></tr>"
  }
  break;  
  }  // switch
 } // c
temp+="</table><br>";
} // i
}
//return(temp + breadcrumb);
return(temp);
}

function goon(n) {

switch (n) {
case 0:
upDate(0);
prevNum=0;
break;
case 2:
upDate(itemInfo.length-1);
prevNum=itemInfo.length-1;

break;
default:
upDate(prevNum+n);
prevNum=prevNum+n;
break;
}

checkButtonStatus();
}


function checkButtonStatus() {

if (prevNum==0) {
document.getElementById("b1").style.visibility="hidden";
document.getElementById("b2").style.visibility="hidden";
document.getElementById("b3").style.visibility="visible";
document.getElementById("b4").style.visibility="visible";
}
else if (prevNum==itemInfo.length-1) {

document.getElementById("b1").style.visibility="visible";
document.getElementById("b2").style.visibility="visible";
document.getElementById("b3").style.visibility="hidden";
document.getElementById("b4").style.visibility="hidden";
}
else {
document.getElementById("b1").style.visibility="visible";
document.getElementById("b2").style.visibility="visible";
document.getElementById("b3").style.visibility="visible";
document.getElementById("b4").style.visibility="visible";
}

}



function getHeight() {

// function returns both heighj and with if required

var myWidth = 0, myHeight = 0;
if( typeof( window.innerWidth ) == 'number' ) {
//Non-IE
myWidth = window.innerWidth;
myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
//IE 6+ in 'standards compliant mode'
myWidth = document.documentElement.clientWidth;
myHeight = document.documentElement.clientHeight;
} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
//IE 4 compatible
myWidth = document.body.clientWidth;
myHeight = document.body.clientHeight;
}
//window.popAlert( 'Width = ' + myWidth );
//window.popAlert( 'Height = ' + myHeight );

return(myHeight);

}


function getWidth() {

// function returns both heighj and with if required

var myWidth = 0, myHeight = 0;
if( typeof( window.innerWidth ) == 'number' ) {
//Non-IE
myWidth = window.innerWidth;
myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
//IE 6+ in 'standards compliant mode'
myWidth = document.documentElement.clientWidth;
myHeight = document.documentElement.clientHeight;
} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
//IE 4 compatible
myWidth = document.body.clientWidth;
myHeight = document.body.clientHeight;
}
//window.popAlert( 'Width = ' + myWidth );
//window.popAlert( 'Height = ' + myHeight );

return(myWidth);

}

function putinlink(kette) {


var temp ="";
var tString ="";
var parts;
var linkParts;
var linkedWord ="";
var tLink ="";
var extraPunct ="";

//if (kette.indexOf("^") !=-1)
//{ 

// <<<<<<<<<<<<<<<<<<

//Mike is absent^ very unwell. Can you please *accompany him to the nurse?
//#Problems in accessible^access will often *accompany  problems at home.
//#If submitted in other languages, an English version^ must *accompany the submission.
//#All the forms below can be electronically filled and 
//submitted with the exception^except of Form^ B, which must *accompany attend^. copies^yet, of material.
 
 kette=kette.replace(/#/g," # ");
 // if (kette.toLowerCase().indexOf("<span") !=-1){popAlert(kette)}
 parts = kette.split(" ");

 for (var i = 0; i < parts.length; i++)
 
    {

      if (parts[i].indexOf("^") == -1) // nohat word
      {
        tString += parts[i] + " "
      }
     
    else  // hatWord
      {

     // next finds all words that are identical to the linked word
      if (parts[i].charAt(parts[i].length - 1) == "^" || parts[i].charAt(parts[i].length - 2) == "^") 
      {
  //  if(kette.indexOf("Mike") !=-1) {popAlert(">> " + parts[i])}  // check code
    
       tLink = parts[i].replace("^", "");
    
       switch (tLink.charAt(tLink.length-1))   {
        case ".": 
        case ",": 
        case "?": 
        case "!": 
        case ";": 
        case ":": 
        case "'": 
        case '"': 
        case ")": 
        case "\\": 
          extraPunct = tLink.charAt(tLink.length-1);
          tLink = tLink.substring(0, tLink.length - 1);
        break;
        default:
          extraPunct = "";
			   break;
       }
     if (mode==0) { // annotated
  
       // mouseover
//       tString += "<span id=exWord class=aclink2 onmouseover='acLinkShow(this.id,\"" + tLink + "\")' onmouseout='popOut(this.id)'>" +  tLink + "</span>" + extraPunct + " "; 

       // click     
     //   tString += "<span id='exWord' class='aclink2' onclick='acLinkShow(this.id,\"" + tLink + "\")'>" +  tLink + "</span>" + extraPunct + " "; 
  tString += "<span class='acLink2' onclick='acLinkShow(this.id,\"" + tLink + "\")'>" +  tLink + "</span>" + extraPunct + " "; 

        }
        else
        {
   // tString += "<span id='exWord' class='acDead2' onmouseover='acLinkNein(this.id,\"" + tLink + "\")' onmouseout='popDead(this.id)'>" +  tLink + "</span>" + extraPunct + " "; 
 tString += "<span class='acDead2' onmouseover='acLinkNein(this.id,\"" + tLink + "\")' onmouseout='popDead(this.id)'>" +  tLink + "</span>" + extraPunct + " "; 
 //  tString += "<span id=exWord class=acDead2>" +  tLink + "</span>" + extraPunct + " "; 

    //   tString += tLink  + extraPunct + " "; 
        }
      
     }
     else //'the word and link word are not identical
      {        

     linkParts = parts[i].split("^");
      tLink = linkParts[0] //+ " ";
      linkedWord = linkParts[1]
 
       switch (linkedWord.charAt(linkedWord.length-1))   {
        case ".": 
        case ",": 
        case "?": 
        case "!": 
        case ";": 
        case ":": 
        case "'": 
        case '"': 
        case ")": 
        case "\\": 
        extraPunct = linkedWord.charAt(linkedWord.length-1);
        linkedWord = linkedWord.substring(0, linkedWord.length - 1);
 
        break;
        default:
         extraPunct = "";
         break;   
       }
     if (mode==0) {
     
     // mouseover
  //    tString += "<span id=exWord class=aclink2 onmouseover='acLinkShow(this.id,\"" + linkedWord + "\")' onmouseout='popOut(this.id)'>" +  tLink + "</span>" + extraPunct + " "; 
     //click
      tString += "<span class='acLink2' onclick='acLinkShow(this.id,\"" + linkedWord + "\")'>" +  tLink + "</span>" + extraPunct + " "; 

      }
     else  // non-annotated
     {
//popAlert("here")
      tString += "<span class='acDead2' onmouseover='acLinkNein(this.id,\"" + linkedWord + "\")' onmouseout='popDead(this.id)'>" +  tLink + "</span>" + extraPunct + " "; 
 //     tString += "<span id=exWord class=acDead2>" +  tLink + "</span>" + extraPunct + " "; 

//      tString += tLink + extraPunct + " "; 
     }

   
    }
   
  
  }
 
 
 
 }  // next


//if(kette.indexOf("Mike") !=-1) {popAlert(tString)}  // check code


return(tString); 
  
// <<<<<<<<<<<<<<<<<<  



//}
//else
//{
//return(kette)
//}


}

function goonOLD ()
{
document.getElementById("entry").innerHTML=formatIdiom(blog[iCurrentBlog]); 
if (moreBei[iCurrentBlog] == 0) {document.getElementById("mehrEx").innerHTML=""}  
document.getElementById("sum").innerHTML="Academic words: <b>" + summary[iCurrentBlog] +"</b>";
}


function acLinkShow (linkid,showWord) {

var text="";

showWord=showWord.replace("(","");
showWord=showWord.replace(")","");

for (var c=0;c<wordZahl;c++) {
var parts =blog[c].split("~");
if (showWord.toLowerCase() == parts[0].toLowerCase())
 {
 text=formatPop(blog[c]); 
 break;
 }
}
//popAlert(text)
document.getElementById("clickedWord").innerHTML=text + "<div align='center'><br><input class='qbut' type='button' value='Close' onclick='closeClickedWord()'></div>";
document.getElementById("clickedWord").style.border= "thin solid green";
document.getElementById("clickedWord").style.padding= "1em";
window.scrollTo(1,1);
//pop(linkid,text);  // popupp window now not used
//document.getElementById("itemListing").style.visibility="hidden";
}

function acLinkNein (linkid,showWord) {
// do nothing
}
function closeClickedWord(kette) {
document.getElementById("clickedWord").innerHTML="";
document.getElementById("clickedWord").style.border= "none";
document.getElementById("clickedWord").style.padding= "0";
//document.getElementById("itemListing").style.visibility="visible";
}
function formPos(kette) {
if (kette.indexOf("@") == -1)
{
return("<br><i>Associated</i>: " + kette)
}
else
{
return("")
}
}
function formNote(kette) {
kette=kette.replace(/onclick/g,"deadclick")
kette=kette.replace(/class=extraWord/g,"style=\'color: red\'")
kette=kette.replace(/class=extraDef/g,"style=\'font-Style: italic\'")
kette=kette.replace(/class=extraExample/g,"style=\'font-Style: italic\'")
if (kette.indexOf("@") == -1)
{
return(kette.replace("<div class=extra>","<div class=extra><i>Note</i>: "))
}
else
{
return("")
}
}
function formatPop(kette) {
var parts=kette.split("~")
//popAlert(parts[3])
return ("<b style='color: black'>"+parts[0]+"</b>: "  + "<i>" +parts[1] + "</i>" + formatEx(parts[2]) + formPos(parts[3])+ formNote(parts[4]));
}
function formatEx(kette) {
kette=kette.replace(/#/g, " # ");
var ketteWords=kette.split(" ");
for (var c=0;c < ketteWords.length;c++) {
if (ketteWords[c].indexOf("*") != -1) {
ketteWords[c]="<span style='color: red'>" + ketteWords[c].substring(1) + "</span>";
}
}
kette="";
for (var c=0;c < ketteWords.length;c++) {
kette += ketteWords[c] + " ";
}
var parts=kette.split("#");
var temp =""
for (var c=0; c< parts.length;c++) {
temp+="<br> - "+parts[c];
}
return(temp)
}
function popOut(num) {
if (fenster == null ||  fenster.closed) {} else {fenster.close();}
document.getElementById(num).style.color="blue";
}
function popDead() {
}


function stripSpace(kette) {
kette=kette.replace(/\s\?/g,"?");
return (kette)
}

function stripPunct(wort) {

//wort=wort.replace("(","");
switch (wort.charAt(wort.length-1))
{
case "?":
 return (wort.substring(0,wort.length-1) + "</span>? ")
case ".":
 return (wort.substring(0,wort.length-1) + "</span>. ")
case ",":
 return (wort.substring(0,wort.length-1) + "</span>, ")
case ";":
 return (wort.substring(0,wort.length-1) + "</span>; ")
case "!":
 return (wort.substring(0,wort.length-1) + "</span>! ")
case "'":
 return (wort.substring(0,wort.length-1) + "</span>' ")
case '"':
 return (wort.substring(0,wort.length-1) + '</span>" ')
case ')':
 return (wort.substring(0,wort.length-1) + '</span>) ')
default:
return (wort+ "</span> ")
}
}


function getAnto(assKette) {
var temp="";
var tempA="";
var parts=assKette.split(";");
for (var c=0; c < parts.length; c++)
 {
 if (parts[c].indexOf("oppTit") ==-1)
 {
 temp+=parts[c] + ";"; 
 }
 else
 {
 tempA+=parts[c] + ";";
 }
 }
 if (temp.charAt(temp.length-1)==";") {temp=temp.substring(0,temp.length-2)}
 if (tempA.charAt(tempA.length-1)==";") {tempA=tempA.substring(0,tempA.length-2)}
 temp+="</td></tr>"; 
if (tempA != "") {
temp+="<tr><td class='tite'>Antonym:</td><td class='antWord'>" + tempA.substring(tempA.indexOf(":")+2) + "</td></tr>";
}
return(temp)
}

function addDic(mot) {

return ("<a id='slav' href=\"http://thefreedictionary.com/" + mot + "\" class='show'>" + mot + "</a> &nbsp;&nbsp;&nbsp;<span class='klein'> .. <a href='http://dictionary.reference.com/search?q=" + mot + "' class='link'>translate</a></span>");

}

function formatIdiom (kette) {

var temp="";
var parts=kette.split("~");
  temp+="<table width='100%'><tr><td class='tite'>Word:</td><td class='idi'>"+ addDic(parts[0]) +  "</td></tr>";
  temp+="<tr><td class='tite'>Definition:</td><td class='idDef'>"+parts[1]+"</td></tr>";
 // popAlert(parts[3])
  if (parts[3] != "@") 
  {
   var ass=""; 
   if (parts[3].indexOf(";")==-1 && parts[3].indexOf("oppTit") !=-1)
   {} else {ass="Associated:"}
   temp+="<tr><td class='tite'>" + ass + "</td><td class='idExplan'>"+getAnto(parts[3]); 
  }   
 if (parts[4].indexOf("@") == -1) 
  {
    temp+="<tr><td class='tite'>Note:</td><td class='idExplan'>"+parts[4]+"</td></tr>"; 
  }
  var parts3=parts[2].split("#");
  temp+="<tr><td class='tite'>Examples:</td><td class='idExam'>";
  
 // popAlert(parts3.length)
  for(var j=0; j < parts3.length; j++) {
 temp+=colorClass(j)+"<img src=\"../../images/li.gif\" alt='icon'>" + replaceStar2(parts3[j])+"</div><div class='space'>&nbsp;</div>";
 // temp+=colorClass(j)+"<ul class="li"><li class="li"> " + replaceStar(parts3[j])+"</li></ul></div>";
    }
   
//popAlert(">>>>>>>>"+temp)
exList=temp;
    temp+="<br><div id='mehrEx'>.. <a class='link' href='javascript: mehr(exList)'>more examples</a></div></td></tr>";
    temp+="</table><br>";
	//popAlert(temp)
return(temp);

}

function mehr(kette) {
//popAlert(kette)
var mot=document.getElementById("slav").innerHTML;
//document.getElementById("entry").innerHTML= kette  + getAssociated(mot) + "</td></tr></table>" ;
//var exList=document.getElementById("itemListing").innerHTML;
document.getElementById("itemListing").innerHTML=acLinkHTML+ kette  + getAssociated(mot) + "</td></tr></table>" ;

}

function getAssociated(mot) {

//popAlert("hr")
var temp="";
var parts;
var satz;
var p=0;
for (var c=0; c < wordZahl;c++) {

 parts=blog[c].split("~");
 satz=parts[2].split("#");    

  for (var i=0; i < satz.length;i++)
   {
 // popAlert(satz[i])
if (satz[i].indexOf('acLinkShow(this.id,"' + mot + '"') !=-1 || satz[i].indexOf('acLinkNein(this.id,"' + mot + '"') !=-1)
 // if (satz[i].indexOf('acLinkShow(this.id,"' + mot + '"') !=-1)
  {

   temp+="<div class='space'>&nbsp;</div>" + colorClass(p)+'<img src=\"../../images/li.gif\"> '+ formatNewSatz(satz[i],mot) +'</div>';
 p++;
  }
  
  }

//


}
//popAlert(temp)

return(temp);  //entry line

}

function formatNewSatz(kette,headWord) {

//popAlert(kette + " " + headWord)
var temp="";
var wordPos=0;
var startPos=0;
var endPos=0;
var wort="";

  wordPos=kette.indexOf('"'+headWord+'"');
  for (var c=wordPos; c > 0; c--)
  {
   if (kette.charAt(c)=="<")
   {
   startPos=c;
   break;
   } 
  }

  for (var c=wordPos; c < kette.length; c++)
  {
   if (kette.charAt(c)==">")
   {
   endPos=c;
   break;
   } 
   }

 temp=kette.substring(0,startPos-1) + " <span class='bold'>" + " ";

 temp+=kette.substring(endPos+1);

  //temp=temp.replace("farbe","dead");
  temp=temp.replace("<b>","");
  temp=temp.replace("</b>","");
  temp=replaceStar3(temp);
//  <span class=aclink onmouseover=\"acLinkShow(this.id,\'decision\')\" onmouseout=\"popOut(this.id)\">decided </span>  
 
// popAlert(temp)
  return (temp)


}

function replaceStar1(kette) {
var words = kette.split(" ");
var neu=" ";
for (var c=0; c < words.length; c++)
{
if (words[c].charAt(0)=="*")
 {
 neu+="<span class='farbe'>" + stripPunct(words[c].substring(1)); // + "</span> ";
 }
 else
 {
 neu+=stripSpace(words[c]) + " ";
 }
}
return (neu);
}


function replaceStar2(kette) {
var words = kette.split(" ");
var neu=" ";
for (var c=0; c < words.length; c++)
{
if (words[c].charAt(0)=="*")
 {
 neu+="<span class='black'>" + stripPunct(words[c].substring(1)); // + "</span> ";
 }
 else
 {
 neu+=stripSpace(words[c]) + " ";
 }
}
return (neu);
}


function replaceStar(kette,mott) {

kette=kette.replace("<b>","");
kette=kette.replace("</b>","");
var words = kette.split(" ");
var neu=" ";
for (var c=0; c < words.length; c++)
{
if (words[c].toLowerCase()==mott.toLowerCase())
 {
 neu+="<span class='black'>" + stripPunct(words[c].substring(0)); // + "</span> ";
 }
 else
 {
 neu+=stripSpace(words[c]) + " ";
 }
}
//alert(neu)
return (neu);
}


function replaceStar3 (temp) {

var t=temp.split("*")

var starWord=t[1].substring(0, t[1].indexOf(" "))
if (mode==0) {
return temp.replace("*"+starWord,"<span class='acLink2' onclick='acLinkShow(this.id,\"" + starWord + "\")'>" +  starWord + "</span>")
}
else
{
return temp.replace("*"+starWord,"<span class='acDead2'>" +  starWord + "</span>")

}
}


function mausU(a) {
	a.textDecoration = "underline";
}
function mausA(a) {
  a.textDecoration = "none";
}
function showEntry(blogNum) {

// BAK - not used  in new version
var pos=getPos(blog[blogNum].charAt(blog[blogNum].length-1))
document.getElementById("sum").innerHTML="Academic word: <b>" + summary[blogNum] +  pos + "</b>";
//document.getElementById("entry").innerHTML=formatIdiom(blog[blogNum]);
document.getElementById("itemListing").innerHTML=formatIdiom(blog[blogNum]);
if (moreBei[blogNum] == 0) {document.getElementById("mehrEx").innerHTML=""}  
iPrevBlog=iCurrentBlog;
iCurrentBlog=blogNum;
document.getElementById(iCurrentBlog).style.backgroundColor="#FFFF99";
if (iPrevBlog > -1){document.getElementById(iPrevBlog).style.backgroundColor="white"};
}

function getPos(ps) {
var s="<span class='posp'>";
var n="</span>";
var p="";
switch (ps) {
case "v": p="verb"; break;
case "n": p="noun"; break;
case "a": p="adjective"; break;
case "d": p="adverb"; break;
case "c": p="conjunction"; break;
case "p": p="preposition"; break;
default: p="UNKNOWM";
break;
}
return s+" ["+p+"]"+n;
}





if (window.addEventListener) {
addOnLoadEvent(initD);

}
else
{
addOnLoadEvent(initD);
}



