
// ******** check why fdunction fullsize and fenster stuff is in this AND Nav.js

// Script Copyright 2001 Paul Shoebottom at paul_shoebottom@fis.edu
//alert(document.referrer)

// *** sort out the split in getWeg to make sure it gets the correct part of the
// document referrer string

var rufer=document.referrer;

// remove BAK functions once all has been tested

// fix at @@

//(new Image).src="../../images/right.wav";
//(new Image).src="../../images/wrong.wav";


// ++++++++++  variables  ++++++++++++

var myAudio;
var myAudio2; 
var audioType;
var segmentEnd=0;
var sTime;
var eTime;

var audioType;
var bPlaySound= new Boolean(false);
var siteBGColor="#ffffff";
var yesColor="#98FB98";
var noColor="#f08080";
var rufer="esl/support/index.htm";
var biggerOK = new Boolean(true);
var smallerOK = new Boolean(true);
var enableBut=new Boolean(true);
var pfad=document.URL.toLowerCase();
var fontGroesse=12;
var adr=""; // holds end code for w("r")

var dots0="";
var dots1="../";
var dots2=dots1 + dots1;
var dots3=dots1 + dots1 + dots1;
var dots4=dots2 + dots2;
var dots5=dots4 + dots1;
var im1=' <img src=\"'
var im2='images/arrow.gif\" alt="">&nbsp;';
var index='\index.htm\" target=\"_top\">';
var prefix0=im1 + dots1 + im2 + '<a' + maus +dots0+'index.htm">';

var prefix1=im1 + dots2 + im2 + '<a' + maus +dots1+'index.htm">';
var level3=im1 + dots3 + im2 + '<a' + maus +dots2+'index.htm">Learners</a>';
var level4=im1 + dots4 + im2 + '<a' + maus +dots3+'index.htm">Learners</a>';

var prefix2=im1 + dots2 + im2 + '<a'+maus + 'index.htm">';
var prefix3=im1 + dots3 + im2 + '<a'+maus + 'index.htm">';
var prefix4=im1 + dots3 + im2 + '<a' + maus +dots1+'index.htm">';
var prefix5=im1 + dots4 + im2 + '<a' + maus +dots2+'index';
var prefix6=im1 + dots4 + im2 + '<a' + maus +dots3+'index.htm">Learners</a>' + prefix5;
var prefix7= prefix1 + 'Teachers</a>' + im1 + dots2 + im2 + '<a'+maus+dots1+'index-';
var prefix8=im1 + dots2 + im2 + '<a' + maus +dots2+'learners/index.htm">';
var vocabI=im1 + dots2 + im2 + '<a' + maus +dots1+'index-';

var learners=prefix1+'Learners</a>';
var teachers=prefix0+'Teachers</a>';
var parents=prefix0+'Parents</a>';
var grammar=prefix1+'Grammar</a>';
var vocab=prefix1+'Vocabulary</a>';
var info=prefix1+'Site information</a>';
var supp=im1 + dots2 + im2 + '<a' + maus +dots2+'learners/index.htm">Learners</a>' + im1 + dots2 + im2 + '<a' + maus +dots2+'learners/support/index';

var bQuote=new Boolean(false);

var weg = new Array();
weg[0]="";
weg[1]=learners;
weg[2]=learners + prefix2 + 'Advice on learning English</a>';
weg[3]=level3 + prefix3 + '<a' + maus +dots1+'index.htm">Writing practice</a>';
weg[4]=learners + prefix2 + 'Reading exercises</a>';
weg[5]=learners + prefix2 + 'Web sites for language learners</a>';
weg[6]=im1 + dots3 + im2 + '<a' + maus +dots2+'index.htm">Learners</a>' + prefix4 + 'Web projects by FIS students</a>';
weg[8]=level4 + im1 + dots4 + im2 + '<a' + maus +dots2+'index.htm">For students at Frankfurt International School</a>' + im1 + dots4 + im2 + '<a' + maus +dots1+'index.htm">Web projects by ESL students</a>';
weg[9]= prefix6 +  'English.htm">' + 'English literature</a>';
weg[10]=prefix6 +  'Geo.htm">' + 'Humanities</a>';
weg[11]=teachers;
weg[12]=parents;
weg[13]=learners + prefix2 + 'ESL at Frankfurt International School</a>';
weg[14]=getWeg14();
weg[15]=grammar;
weg[16]=grammar + prefix2 + 'Grammar notes</a>';
weg[17]=grammar + prefix2 + 'Language differences</a>';
weg[18]=getWeg18();
weg[19]=vocab;
weg[20]=vocab + vocabI + 'e.htm">First words</a>';
weg[21]=im1 + dots1 + im2 + '<a'+maus + 'index.htm">Vocabulary</a>';
weg[22]=vocab + vocabI + 'h.htm">Harder words</a>';
weg[25]=info;
weg[23]=supp+'English.htm">English literature</a>';
weg[24]=supp+'Geo.htm">Humanities</a>'
weg[26]=supp+'Math.htm">Mathematics</a>';
weg[27]=supp+'Science.htm">Science</a>';
weg[28]=supp+'Other.htm">Other subjects</a>';
weg[29]=learners + prefix2 + 'Games, jokes and puzzles</a>';
weg[30]=prefix2 + '<a'+maus + dots2 + '/learners/index.htm">Learners</a>' + prefix2  + '<a  href="../../learners/support/index.htm">School subject help</a>';
weg[31]=im1 + dots4 + im2 + '<a'+maus + dots4 + 'learners/index.htm">Learners</a>' + im1 + dots4 + im2 + '<a'+maus + dots4 + 'learners/support/index.htm">School subject help</a>';
weg[32]=im1 + dots3 + im2 + '<a'+maus + dots3 + 'learners/index.htm">Learners</a>' + im1 + dots3 + im2 + '<a'+maus + dots3 + 'learners/support/index.htm">School subject help</a>';
weg[33]=grammar + vocabI + 'q.htm">Grammar quizzes</a>';
weg[34]=vocab + vocabI + 'a.htm">General academic vocabulary</a>';
weg[35]=prefix8+'Learners</a>' + im1  + dots2 + im2 + '<a' + maus +dots2+'learners/fis/index.htm">For students at Frankfurt International School</a>' + im1 + dots2 + im2 + '<a'+maus +  dots2 + 'learners/fis/german/index.htm">Deutsch</a>' + im1 + dots2 + im2 + '<a'+maus + dots2 + 'learners/fis/german/indexV.htm">Vokabular</a>'; 
weg[36]=level4 + im1  + dots4 + im2 + '<a' + maus +dots2+'index.htm">For students at Frankfurt International School</a>' + im1 + dots4 + im2 + '<a'+maus + dots1 + 'index.htm">Deutsch</a>' + im1 + dots4 + im2 + '<a'+maus + dots1 + 'indexQ.htm">Quizseiten</a>'; 
weg[37]= prefix6 +  'Science.htm">' + 'Science</a>';
weg[38]=prefix6 +  'Other.htm">' + 'Other subjects</a>';
weg[39]=weg[29];  // classify
weg[40]=weg[11];  // teacher discussion
weg[41]=weg[11].replace("<a", "<a target=\"_top\"");  // blog
weg[42]=level3  + im1 + dots3 + im2 + '<a' + maus +dots1+'index.htm">For students at Frankfurt International School</a>';
weg[43] = supp + 'Math.htm">' + 'Mathematics</a>';
weg[44]=prefix7 + 'm.htm">For mainstream teachers</a>';
weg[45]=prefix7 + 'a.htm">For administrators</a>';
weg[46]=prefix7 + 'e.htm">For ESL teachers</a>';
weg[47]=prefix7 + 'g.htm">Of general interest</a>';
weg[48]=prefix7 + 'f.htm">ESL at Frankfurt International School</a>';
weg[49] = prefix1 + 'Parents</a>';
weg[50] = prefix0 + 'Parents</a>';
weg[51] = prefix1 + 'Parents</a>' + prefix1.replace('index', 'index-g') + 'General advice</a>';
weg[52]=prefix1 + 'Parents</a>' + prefix1.replace('index','index-l') + 'Language learning</a>';
weg[53]=prefix1 + 'Parents</a>' + prefix2 + 'ESL at Frankfurt International School</a>';
weg[54]=prefix0 + 'Grammar</a>';
weg[55]=weg[20] + im1 + dots2 + im2 + '<a' + maus +dots1+'index-rE.htm">Random quizzes</a>';
weg[56]=weg[22] + im1 + dots2 + im2 + '<a' + maus +dots1+'index-rH.htm">Random quizzes</a>';
weg[57]=weg[33] + im1 + dots2 + im2 + '<a' + maus +dots0+'index.htm">Error correction</a>';
weg[58]=grammar + prefix2 + 'Language analysis</a>';
weg[59]=weg[44] + im1 + dots2 + im2 + '<a'+maus + 'index.htm">Cultural information</a>';
weg[60]=vocab + vocabI + 'id.htm">Idioms</a>';
weg[61]=vocab + vocabI + 'pr.htm">Proverbs</a>';
weg[62]=vocab + vocabI + 'pv.htm">Phrasal verbs</a>';
weg[63]=vocab + vocabI + 'qu.htm">Quotes</a>';
weg[64]=level4 + im1 + dots4 + im2 + '<a' + maus +dots2+'index.htm">For students at Frankfurt International School</a>' + im1 + dots4 + im2 + '<a' + maus +dots1+'index.htm">Current work</a>';
weg[65]=prefix6 +  'Other.htm">' + 'Other subjects</a>';


weg[68]=level4 + im1  + dots4 + im2 + '<a' + maus +dots2+'index.htm">For students at Frankfurt International School</a>' + im1 + dots4 + im2 + '<a'+maus + dots1 + 'index.htm">Deutsch</a>' + im1 + dots4 + im2 + '<a'+maus + dots1 + 'indexK.htm">Case grammar</a>'; 
weg[69]=level3 + im1  + dots4 + im2 + '<a' + maus +dots1+'index.htm">For students at Frankfurt International School</a>' + im1 + dots4 + im2 + '<a'+maus + 'index.htm">Deutsch</a>';
weg[70]=weg[35];



var Jetzt = new Date();
var Start = Jetzt.getTime();
var tage = new Array(31,28,31,30,31,30,31,31,30,31,30,31)
var tag=Jetzt.getDate();
var monat=Jetzt.getMonth();
var jahr=Jetzt.getFullYear();
var tNum=0;


for (var c=0;c<monat;c++)
{
 tNum+=getTage(c);
}
tNum+=tag; // the day of the year
//var endRest ='&nbsp;&nbsp;&nbsp; </td><td align="right" class="last"><a'+maus+'#kopf">Top</a></td></tr></table>' + hr;
var endRest ='&nbsp;&nbsp;&nbsp; </td><td align="right" class="last"><a class="goToTop menuarrow" href="#kopf">Top</a></td></tr></table>' + hr;
var oben3="</a>: </span></td><td id='off' width=\"20%\" onClick=\'off();\'></td></tr></table></div>"
var endHome='<div id="endHeim"><br /><table style="margin-top:20px;" width="100%"><tr><td align="left" class="last"><a'+maus+ root + 'index.htm">Home</a>'; 
var endRestNoTop ='&nbsp;&nbsp;&nbsp; </td><td><br></td></tr></table></div>' + hr;
var endDocQ='<p class="last"><a'+maus+ '#kopf">Top</a>&nbsp;&nbsp;&nbsp;<a'+maus+ '../../learners/support/index.htm">Index</a>&nbsp;&nbsp;&nbsp;<a'+maus+'../../../index.htm">Home</a>&nbsp;</p>' + hr;

var filemode;
var t1 = '<table><tr>';
var t2 = '</tr></table>';

var sp="<span";
var sp1=' class="but"><a class="wordBut" href="../q';

var sp2 ='.htm">&nbsp;';
var sp3="&nbsp;</a></span>";

var sp1E='<span title="New quiz." class="but"><a href="../q';
var sp2E ='.htm">&nbsp;';
var sp3E="&nbsp;</a></span>&nbsp;";

var but=new Array(23);
var tit=new Array(23);

if (pfad.indexOf('german') !=-1) 
{
var dotty=dots4;
}
else
{
var dotty=dots2;
}


// +++++++++++++++++ functions +++++++++++++++

function setAllesWidth() {

if (screen.availWidth > 1024 && document.getElementById("alles"))
document.getElementById("alles").style.width="50%";
}


function getTage(monthNum) {

//jahr=2004;
if (monthNum == 1 && jahr % 4 == 0) {return(29)} else {return(tage[monthNum])}

}


function again ()
{
 window.location.reload ();
}

function getDatei(pfad) {

var x=0;
var y=0;
var z="";

 x = pfad.indexOf(".htm");
 for (c=x; c > 1 ; c--)
   {
    z=pfad.charAt(c);
    if ((z=="\\") || (z=="/") || (z=="-"))
    {   
     y=c;
     break; 
     }    
   } 

return(pfad.substring(y+1, x))

}


function sButtons (thisQuiz, datei, numButtons) {


var tempBut='<span style="font: 70% Verdana; margin-left: 4px;" title="Click a button to do a word quiz based on the topic words. Let the mouse rest over the button to see the quiz type."> More quizzes: </span> &nbsp; ';

 for (var c=1; c < numButtons +1 ; c++)
 {
// if (c < 10) {pref=c} else {pref= c-10}; //pref="f";
 
 if (c == thisQuiz) {
  tempBut=tempBut+'<span class="ab">&nbsp;' + c + '&nbsp;</span>';
 }
 else
 {
  tempBut=tempBut + sp + tit[c-1] + sp1 + c + "/"  + datei + sp2 + c + sp3;

// tempBut=tempBut + sp + tit[c-1] + sp1 + c + "/" + pref + "-" + datei + sp2 + c + sp3;
 }
}

 if (document.title.indexOf("Shard") != -1) {
     tempBut += "&nbsp;&nbsp;<span class='qbut' style='text-decoration: none;'><a title='Go to test page.' href='../test/" + datei + ".htm'> T </a></span> &nbsp;&nbsp;"
 }



if (document.title.indexOf("Wortschatz:") !=-1)

{
    tempBut += "&nbsp;&nbsp;<span class='qbut' style='text-decoration: wave;'><a title='Go to test page.' href='../../learners/fis/german/quiz1/" + datei + ".htm'> T </a></span> &nbsp;&nbsp;"
}

return(tempBut);



}
//+++++++



//=================

function updateArrows(qNum, countwords) {

if (qNum > 0){

document.getElementById('b4').src=dotty+'images/next.gif';
document.getElementById('b4').title='Next question.';
document.getElementById('b1').style.visibility="visible"} else {document.getElementById('b1').style.visibility="hidden"} 

if (qNum > 4){
document.getElementById('b2').style.visibility="visible"}  else {document.getElementById('b2').style.visibility="hidden"} 

if (qNum + 5 < countwords){
document.getElementById('b3').style.visibility="visible"}  else {document.getElementById('b3').style.visibility="hidden"} 

if (qNum + 1 < countwords){document.getElementById('b4').style.visibility="visible"} else {
 if ((qNum + 1)==countwords){
 if (pfad.indexOf('jokes') ==-1 && pfad.indexOf('german') ==-1){
  alert("This is the last item.\n\nYou can start again by clicking the Next arrow button!");
  }
  
 document.getElementById('b4').src=dotty+'images/next.gif';
 document.getElementById('b4').title='Start again.';
 
 } 
 
else {
 document.getElementById('b4').style.visibility="hidden"} 
}
}


  function ZeitAnzeigen() 
   { 
   var absSekunden = Math.round(ZeitBerechnen()); 
    document.getElementById('zeit').innerHTML =  " " + absSekunden;
    timerID=window.setTimeout('ZeitAnzeigen()',1000); 
  }  

   function ZeitBerechnen()
   { 
    var Immernoch = new Date(); 
    return((Immernoch.getTime() - Start)/1000); 
   }


function checkRes() {
if (screen.height < 700 || screen.width < 1000)
{
alert("You need to set your screen resolution to 1024 x 768 or higher to view the clicked page comfortably.")
}
}


function stoptime() {

window.clearTimeout(timerID);
return document.getElementById('zeit').innerHTML;
 
}


function ranQ () {

return(Math.floor(Math.random()* quote.length))

}

function checkMargText (mode) {


if (mode == 'q' && document.getElementById("rightMarg")) {
bQuote=true;
document.getElementById("rightMarg").innerHTML=quote[ranQ()];
document.getElementById("rightMarg").style.visibility="visible";
document.getElementById("rightMarg").style.backgroundColor="#DCDCDC";
document.getElementById("rightMarg").title="Click in the quote to go to a page containing all quotes.";

}
else
{
if (document.getElementById("margText"))
{
//alert(document.getElementById("margText").innerHTML)
var add=""; 
if (document.getElementById("margText").innerHTML.charCodeAt(0) > 96)
{
add=".. ";
}
bQuote=false;
document.getElementById("rightMarg").innerHTML='"'+ add + document.getElementById("margText").innerHTML + '"';
document.getElementById("rightMarg").style.visibility="visible";
document.getElementById("rightMarg").title="Click to highlight this quote in the text.";
} 
}
}

function hoerenBAK() {

//alert("hhh")
playSegment(sTime, eTime);

}

function hoeren() {

//alert("hhh")
playSegment(sTime, eTime, 1);

}


function playSegmentBAK(startTime, endTime) {
 //   alert(endTime)
	
  segmentEnd = endTime;
  
  // note - removed firefox filter
  if (navigator.userAgent.indexOf("Direfox") !== -1) {
      alert("Sorry, audio currently works in Google Chrome only.");
  } else {
      myAudio.currentTime = startTime;
      myAudio.play();
  }
}

function playSegment(startTime, endTime, aD) {  
// aD = 0 if yes no or 1 if other German quiz file
    //  alert(segmentEnd)
    // myAudio.src = auDatei + audioType;
    //   startTime=10
    segmentEnd = endTime;
    // segmentEnd=12
    if (navigator.userAgent.indexOf("Direfox") !== -1) {
        alert("Sorry, audio currently works in Google Chrome and Safari only.");
    } else {
        if (aD === 1) {
            myAudio.currentTime = startTime;
            myAudio.play();
        } else {
            myAudio2.currentTime = startTime;
            myAudio2.play();
        }
    }
}

function checkAudio() {

    var auDatei = document.URL.replace(/^.*[\\\/]/, '').replace(/.htm/, "");

    if (document.getElementById("audio")) {  // if audio gif, then check it can play html5 audio

        if (!window.HTMLAudioElement) {  // ie8 and lower; hide audio elements
            document.getElementById("audio").style.visibility = "hidden";
            if (document.getElementById("tt")) { document.getElementById("tt").style.visibility = "hidden"; }

// if (german trans) tt then src is filename else (simple yes no))

        } else { // "ok to play"
            //alert(auDatei);
			myAudio = document.createElement('audio');
            myAudio2 = document.createElement('audio');
            if (!myAudio.canPlayType('audio/mp3')) {
                audioType = ".ogg";
            } else {
                audioType = ".mp3";
            }

                      if (document.getElementById("tt")) {
                // tt is following - see quiz1/2.htm
                //<span id="tt" onmouseover="hoeren()" onmouseout="myAudio.pause()" style="cursor: pointer">Hören</span>
                myAudio.src = auDatei + audioType; // german; has yes no at start
                myAudio.addEventListener('timeupdate', function () {
                    if (segmentEnd && myAudio.currentTime >= segmentEnd) {
                        myAudio.pause();
                    }
                }, false);
            } else { // not german; ie just regular yes / no
                //alert(dotty)
                
                myAudio2.src = dotty + "audio/yesNo" + audioType;
                myAudio2.addEventListener('timeupdate', function () {
                    console.log(myAudio2.currentTime + " " + segmentEnd)
                    if (segmentEnd && myAudio2.currentTime >= segmentEnd) {
                        myAudio2.pause();
                    }
                }, false);
            }


        }


    }



}

function checkAudioBAK() {

    var auDatei = document.URL.replace(/^.*[\\\/]/, '').replace(/.htm/, "");

    if (document.getElementById("audio")) {  // if audio gif, then check it can play html5 audio

        if (!window.HTMLAudioElement) {  // ie8 and lower; hide audio elements
            document.getElementById("audio").style.visibility = "hidden";
            if (document.getElementById("tt")) { document.getElementById("tt").style.visibility = "hidden"; }

// if (german trans) tt then src is filename else (simple yes no))

        } else { // "ok to play"
            
			myAudio = document.createElement('audio');
            
            if (!myAudio.canPlayType('audio/mp3')) {
                audioType = ".ogg";
            } else {
                audioType = ".mp3";
            }

            if (document.getElementById("tt")) {
				   myAudio.src = auDatei + audioType; // german; has yes no at start
			} else { // not german; ie just regular yes / no
				//alert(dotty)
				   myAudio.src = dotty + "audio/yesNo" + audioType;
			}
			
			// listener works oin ie9+
         //   setTimeout(function() {
            myAudio.addEventListener('timeupdate', function () {
            if (segmentEnd && myAudio.currentTime >= segmentEnd) {
                myAudio.pause();
            }
            }, false);
 //   }, 5000);
        }
  

    }
    
    

}

function w(s,nav,mode) {


var popArray = new Array();

checkAudio();


if (!nav && nav !=0) {alert("There is no navigation number!")}
 var datei=getDatei(document.URL.toLowerCase());
 
 switch (s)
 {
     case "r":

         if (document.URL.indexOf("fis/german") !== -1) {
             document.write('<footer><hr><div align="center"><a title="Go to the homepage of Frankfurt International School." href="http://esl.fis.edu/learners/fis/german/index.htm"><img title="Go to German 1 homepage" border="0" src="http://esl.fis.edu/images/fis.gif" alt="FIS homepage"></a><br></div></footer>');
             return false;
         }
         if (nav == 41) {
             endHome = endHome.replace("<a", "<a target=\"_top\"")
             endRest = endRest.replace("Copyright 2000 <a", "&copy; Copyright " + copyInfo() + " <a target=\"_top\"")
             endRest = endRest.replace("at <a", "at <a target=\"_top\"")
         }  // blog - set target to top
         adr = endHome;
         adr += weg[nav];
         if (nav == 40) {   // do not include top in discussion forum
             adr += '&nbsp;&nbsp;&nbsp; </td></tr></table></div>' + hr;
         }
         else {
             adr += endRest;
         }
         adr += "</div>";

         if (mode != "x") { document.write(adr) }
         //alert(adr)
         break;
  
case "o":

  document.write(endHome);
  document.write(weg[nav]);  
  document.write(endRestNoTop);
  break;

default:  // creates the 15 buttons in the word quizzes

but[0]='q1/';
but[1]='q2/';
but[2]='q3/';
but[3]='q4/';
but[4]='q5/';
but[5]='q6/';
but[6]='q7/';
but[7]='q8/';
but[8]='q9/';
but[9]='q10/';
but[10]='q11/';
but[11]='q12/';
but[12]='q13/';
but[13]='q14/';
but[14]='q15/';

tit[0]= ' title=\"A table of the topic words with definitions and example sentences.\"';
tit[1]= ' title=\"Choose the definition to match a topic word.\"';
tit[2]= ' title=\"Choose the topic word to fill a gap sentence.\"';
tit[3]= ' title=\"Choose the topic word to match a definition.\"';
tit[4]= ' title=\"Write the topic word to match a definition.\"';
tit[5]= ' title=\"Write the topic word to fill a gap sentence.\"';
tit[6]= ' title=\"Quiz - Select the topic word to fit a definition.\"';
tit[7]= ' title=\"Quiz - Select the definition to match the topic word.\"';
tit[8]= ' title=\"Quiz - Select the topic word to fill a gap sentence.\"';
tit[9]= ' title=\"Quiz - Write the topic word to match a definition.\"';
tit[10]= ' title=\"Quiz - Write the topic word to fill a gap sentence.\"';
tit[11]= ' title=\"Quiz - Match the topic words and their definitions.\"';
tit[12]= ' title=\"Game - Play hangman with the topic words.\"';
tit[13]= ' title=\"Look through the topic words in browse or quiz mode.\"';
tit[14]= ' title=\"Do a wordsearch game with the topic words.\"';



//document.getElementById("qKnopf").innerHTML=sButtons(s,datei,15) + " <a class='link' href=\"../demo/demo.htm\">Preview</a>";
//document.getElementById("qKnopf").style.display="block";

if (document.URL.toLowerCase().indexOf("lit") != -1) {  // hack!! to not show buttons on q5 literature
                // do nothing
				
            } else {
			
                document.getElementById("qKnopf").innerHTML = sButtons(s, datei, 15) + " <a class='link' href=\"../demo/demo.htm\">Preview</a>";
                document.getElementById("qKnopf").style.display = "block";
            }


filemode=s;

  if (document.title.substring(0,8) == "Deutsch:")
  {
document.write('<br><br><div><table width="100%"><tr><td align="left" class="last"><a'+maus+'../../learners/fis/german/index.htm">Deutsch</a>') 
  
  }
   else
   {
	//alert("s")
	popArray.push(endHome);
   }  
popArray.push(weg[nav]);

popArray.push(endRestNoTop);

if (document.title.indexOf("Wortschatz") !== -1) {
             document.write('<footer><hr><div align="center"><a title="Go to the homepage of Frankfurt International School." href="http://esl.fis.edu/learners/fis/german/index.htm"><img title="Go to German 1 homepage" border="0" src="http://esl.fis.edu/images/fis.gif" alt="FIS homepage"></a><br></div></footer>');
             
         } else {
document.write(popArray.join(" "));
}


   break;
} 
checkMargText(mode);
turnOffTag();
if (document.getElementById("alles")!="undefined") {
setAllesWidth();
//insertMobile();
}


var elinks = document.getElementsByClassName("e-1");
for (var i = 0; i < elinks.length; i++) {
console.log(i);
  var part1=elinks[i].getAttribute('data-ep1');
  var part2=elinks[i].getAttribute('data-ep2');
  var part3=elinks[i].getAttribute('data-ep3');
var newAddress = part1 + "@" + part2 + "." + part3;
elinks[i].setAttribute('href','mailto:'+newAddress);
elinks[i].innerHTML=newAddress;
}




}

function insertMobile() {
 if (document.getElementById("mobile")) {
    document.getElementById("mobile").innerHTML = "<nav><h3 class='mobileH3'><a href='http://esl.fis.edu'>A guide to learning English</a></h3><ul><li class='mobileLI'><a href='http://esl.fis.edu/learners/index.htm'>Learners</a></li><li class='mobileLI'><a href='http://esl.fis.edu/teachers/index.htm'>Teachers</a></li><li class='mobileLI'><a href='http://esl.fis.edu/parents/index.htm'>Parents</a></li><li class='mobileLI'><a href='http://esl.fis.edu/grammar/index.htm'>Grammar</a></li><li class='mobileLI'><a href='http://esl.fis.edu/vocab/index.htm'>Vocabulary</a></li><li class='mobileLI'><a href='http://esl.fis.edu/info/index.htm'>Site Information</a></li></ul></nav>";
}
}

function wBAK(s,nav,mode) {

var popArray=new Array();

////// audio

	var newAudio = document.createElement('audio');

	if (document.getElementById("audio")) { 
	//alert("yes"); 
	} else { 
	//alert(document.getElementById("audio")); 
	}
	if (!newAudio.canPlayType) {  // returns undefined if <ie9

		document.getElementById("audio").style.visibility = "hidden";
	} else {  // browser plays audio

		if (!newAudio.canPlayType('audio/mp3')) {

			newAudio.src = "audio/t.ogg";
		} else {
			newAudio.src = "audio/t.mp3";
		}
	}


//// audio


if (!nav && nav !=0) {alert("There is no navigation number!")}
 var datei=getDatei(document.URL.toLowerCase());

 switch (s)
 {
  case "r":

           if (document.URL.indexOf("fis/german") !== -1) {
             document.write('<footer><hr><div align="center"><a title="Go to the homepage of Frankfurt International School." href="http://www.fis.edu"><img title="Go to FIS homepage" border="0" src="http://esl.fis.edu/images/fis.gif" alt="FIS homepage"></a><br></div></footer>');
             return false;
         }

if (nav==41) {
      endHome=endHome.replace("<a", "<a target=\"_top\"")
      endRest=endRest.replace("Copyright 2000 <a", "&copy; Copyright " + copyInfo() +" <a target=\"_top\"")
      endRest=endRest.replace("at <a", "at <a target=\"_top\"")
      }  // blog - set target to top
   adr=endHome;
   adr+=weg[nav];
  if (nav==40) {   // do not include top in discussion forum
    adr+='&nbsp;&nbsp;&nbsp; </td></tr></table></div>' + hr;
   }
   else
   {
    adr+=endRest;
   } 
adr+="</div>";

if (mode!="x") {document.write(adr)}
//alert(adr)
break;
  
case "o":

  document.write(endHome);
  document.write(weg[nav]);  
  document.write(endRestNoTop);
  break;

default:  // creates the 15 buttons in the word quizzes

but[0]='q1/';
but[1]='q2/';
but[2]='q3/';
but[3]='q4/';
but[4]='q5/';
but[5]='q6/';
but[6]='q7/';
but[7]='q8/';
but[8]='q9/';
but[9]='q10/';
but[10]='q11/';
but[11]='q12/';
but[12]='q13/';
but[13]='q14/';
but[14]='q15/';

tit[0]= ' title=\"A table of the topic words with definitions and example sentences.\"';
tit[1]= ' title=\"Choose the definition to match a topic word.\"';
tit[2]= ' title=\"Choose the topic word to fill a gap sentence.\"';
tit[3]= ' title=\"Choose the topic word to match a definition.\"';
tit[4]= ' title=\"Write the topic word to match a definition.\"';
tit[5]= ' title=\"Write the topic word to fill a gap sentence.\"';
tit[6]= ' title=\"Quiz - Select the topic word to fit a definition.\"';
tit[7]= ' title=\"Quiz - Select the definition to match the topic word.\"';
tit[8]= ' title=\"Quiz - Select the topic word to fill a gap sentence.\"';
tit[9]= ' title=\"Quiz - Write the topic word to match a definition.\"';
tit[10]= ' title=\"Quiz - Write the topic word to fill a gap sentence.\"';
tit[11]= ' title=\"Quiz - Match the topic words and their definitions.\"';
tit[12]= ' title=\"Game - Play hangman with the topic words.\"';
tit[13]= ' title=\"Look through the topic words in browse or quiz mode.\"';
tit[14]= ' title=\"Do a wordsearch game with the topic words.\"';
document.getElementById("qKnopf").innerHTML=sButtons(s,datei,15) + " <a class='link' href=\"../demo/demo.htm\">Preview</a>";
document.getElementById("qKnopf").style.display="block";
filemode=s;

  if (document.title.substring(0,8) == "Deutsch:")
  {
document.write('<br><br><div><table width="100%"><tr><td align="left" class="last"><a'+maus+'../../learners/fis/german/index.htm">Deutsch</a>') 
  
  }
   else
   {
popArray.push(endHome);

   }  
popArray.push(weg[nav]);

popArray.push(endRestNoTop);
document.write(popArray.join(" "));
   break;
} 
checkMargText(mode);
turnOffTag();
if (document.getElementById("alles")!="undefined") {
setAllesWidth();
}

}


function turnOffTag() {  // turns off tag in quiz files
if(document.getElementById("menues")) {
document.getElementById("tag").style.visibility="hidden";
}

}


function soundBAK(mode) {

if (document.getElementById("klang")) {

switch (mode) {
case 0:
document.getElementById("klang").src=dotty+"images/right.wav";
break;
case 1:
document.getElementById("klang").src=dotty+"images/wrong.wav";
break;
default:
document.getElementById("klang").src=dotty+"images/ding.wav";
break
}
}
}


function soundBAK(mode) {

if (mode === 1) {
	playSegment(1, 2);
} else {
	playSegment(4, 6);
}

}

function sound(mode) {

    /*
    if (document.getElementById("klang")) {
    */

       myAudio.src = "http://esl.fis.edu/audio/yesNo" + audioType;
    //myAudio.src = "../../audio/yesNo" + audioType;
    //  alert(audioType)
    if (mode === 1) {
        console.log("wrong")
        playSegment(0, 1, 0);
    } else {
        console.log("right")
        playSegment(5, 6, 0);
    }

}

function removeAllTags(temp) {

// returns string minus all html tags
var t=temp;

t=t.replace(/<[^<>]*>/ig,"")

return(t)

}


function getWeg14 () {

var parts=rufer.split("/")

switch(parts[parts.length-2]) {
case 'grammar':
return(grammar);
break;
case 'learners':
return(im1 + dots2 + im2 + '<a' + maus +dots2+'learners/index.htm">Learners</a>');
break;
case 'teachers':
return(im1 + dots2 + im2 + '<a' + maus +dots2+'teachers/index.htm">Teachers</a>');
break;
case 'parents':
return(im1 + dots2 + im2 + '<a' + maus +dots2+'parents/index.htm">Parents</a>');
break;
default:
return(grammar);
break;
}

}


function getWeg18 () {

var parts=rufer.split("/")
var easy=im1 + dots2 + im2 + '<a'+maus + 'index.htm">English - an easy language?</a>';
switch(parts[parts.length-2]) {
case 'grammar':
return(grammar + easy);
break;
case 'learners':
return(im1 + dots2 + im2 + '<a' + maus +dots2+'learners/index.htm">Learners</a>'+easy);
break;
case 'teachers':
return(im1 + dots2 + im2 + '<a' + maus +dots2+'teachers/index.htm">Teachers</a>'+easy);
break;
case 'parents':
return(im1 + dots2 + im2 + '<a' + maus +dots2+'parents/index.htm">Parents</a>'+easy);
break;
default:
return(grammar+easy);
break;
}

}




function resize (mode) {


//alert(fontGroesse)

fontGroesse=fontGroesse+mode;

if (fontGroesse > 24)  {
fontGroesse=24;

}

else if (fontGroesse < 8)

{
fontGroesse=8;

}

else

{
biggerOK=true;
smallerOK=true;


document.getElementById('kleiner').src=root + "images/smaller.gif";
document.getElementById('kleiner').style.cursor="pointer";
document.getElementById('grosser').style.cursor="pointer";
document.getElementById('grosser').src=root + "images/bigger.gif";
document.getElementById('alles').style.fontSize=fontGroesse+"pt";
document.getElementById('grosser').alt="Click to make the text bigger.";
document.getElementById('kleiner').alt="Click to make the text smaller.";

}

if (fontGroesse==24) {
biggerOK=false;smallerOK=true;
document.getElementById('grosser').style.cursor="text";
document.getElementById('grosser').src=root + "images/biggerOff.gif";
document.getElementById('grosser').alt="You cannot make the text any bigger.";
}

if (fontGroesse==8) {
document.getElementById('kleiner').style.cursor="text";
document.getElementById('kleiner').src=root + "images/smallerOff.gif";
document.getElementById('kleiner').alt="You cannot make the text any smaller.";
smallerOK=false;
biggerOK=true;
}

}

function setBigSmall () {

//alert('hi')

document.getElementById('grosser').style.cursor='pointer';
document.getElementById('grosser').alt="Click to make the text bigger."
document.getElementById('kleiner').style.cursor='pointer';
document.getElementById('kleiner').alt="Click to make the text smaller."


//document.getElementById('kleiner').alt="Click to make the text smaller. (This button works only after the text has been made bigger.)"

}
function druck() {

// next is hack becuase druck function is also in printCode
// fix properly sometime
if (document.URL.indexOf("german/") !== -1) { return false}


checkFenster();
var t="";
var cleaned=removehref(document.getElementById('alles').innerHTML);
// find out how to do above with regexp

var printData='dependent=1,toolbar=0,locationbar=0,directories=0,status=0,menubar=0,scrollbars=1,width=800,height=600,resizable=no';

 fenster=window.open('','tt',printData);
 t+="<HTML><HEAD><script>function mausU () {} function mausA() {}</script><TITLE>" + pageTitle + "</TITLE>";
 t+="</HEAD>";
 t+="<BODY style=\"margin: 30px; font: 12pt 'Times New Roman'\">"  + cleaned;
 t+="<p><hr><b>A guide to learning English</b><br>&copy; Copyright " + copyInfo() + " Paul Shoebottom at Frankfurt International School. <br>paul_shoebottom@fis.edu<br>http://esl.fis.edu</p>";
 t+="<a href='javascript: print()'>Print this page</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href='javascript: close()'>Close this page</a>";
 t+="<p><br></P></BODY></HTML>";
 fenster.document.write(t);
 fenster.moveTo(0,0);
 fenster.document.close();

}

function mausIOver (pic) {

switch (pic.id) {
case 'drucker': 
 pic.src="../../images/printOver.gif";
 break;
case 'grosser': 
 if (biggerOK==true) {
  pic.src="../../images/biggerOver.gif";
 }
 break;
case 'kleiner': 
 if (smallerOK==true) {
 pic.src="../../images/smallerOver.gif";
 }
 break;
 }
}

function mausIOut (pic) {


switch (pic.id) {
case 'drucker': 
 pic.src="../../images/print.gif";
 break;
case 'grosser': 
 if (biggerOK==true)
 {pic.src="../../images/bigger.gif"}
 else
 {pic.src="../../images/biggerOff.gif"}
 break;
case 'kleiner': 
 if (smallerOK==true)
 {pic.src="../../images/smaller.gif"}
 else
 {pic.src="../../images/smallerOff.gif"}
 break;
}
}


// quiz index buttons

function mausUber (a) {
a.backgroundColor="#808080";
}

function mausOu (a,butType) {
a.color="#000000";
}

function mausOv (a, butType) {
a.color="#009900";
}

function offne(datei) {  // used in index pages of quizzes
if (
fenster == null ||  fenster.closed) {

var printData='dependent=1,toolbar=0,locationbar=0,directories=0,status=0,menubar=0,scrollbars=1,width=800,height=500,resizable=yes';

 fenster=window.open(datei,'tt',printData);
 fenster.moveTo(0,0);
 fenster.document.close();

} else {

fenster.focus();

}

}

function removehref(kette) {

//@@' fix next line!!!
var d = kette.replace(/<\/a>/gi,"</span>")
d = d.replace(/<a /gi,"<span style='color: blue' ")
return d

}


function lightMargText() {

if (bQuote == true) {

newWindow('vocab/quote/quote_frm.htm^800^600');

} else {
document.getElementById("margText").style.color="red";
}
}

function quizHelp(num) {
 help(num);
}

function getFarbe(bgFarbe) {

if (bgFarbe.indexOf("#") !=-1)
{
return (bgFarbe);
}
else
{
var rgb=bgFarbe.substring(4,bgFarbe.length-1).split(',');
return ("#" + toHex(rgb[0])+toHex(rgb[1])+toHex(rgb[2])).replace(/ /g,'');
}
}

function toHex(N) {
 if (N==null) return "00";
 N=parseInt(N); if (N==0 || isNaN(N)) return "00";
 N=Math.max(0,N); N=Math.min(N,255); N=Math.round(N);
 return "0123456789ABCDEF".charAt((N-N%16)/16)
      + "0123456789ABCDEF".charAt(N%16);
}


function popAlertBAK(kette) {
var newDivLight=document.createElement("div");
var newDivFade=document.createElement("div");
newDivLight.setAttribute("class","white_content");
newDivLight.setAttribute("id","light")
newDivFade.setAttribute("class","black_overlay");
newDivFade.setAttribute("id","fade")
document.body.appendChild(newDivLight);
document.body.appendChild(newDivFade);
showPop(kette)
}


function popAlert(kette, stars) {

var newDivLight=document.createElement("div");
var newDivFade=document.createElement("div");
newDivLight.setAttribute("class","white_content");
newDivLight.setAttribute("id","light")
newDivFade.setAttribute("class","black_overlay");
newDivFade.setAttribute("id","fade")
document.body.appendChild(newDivLight);
document.body.appendChild(newDivFade);

if (stars == 1) {  // coming from German 20 vocabulary translation pop-uop
 kette = kette.replace(/\*([^*]*)\*/g, "<span class='farbe'>$1</span>");
}

showPop(kette)

}


function showPop(kette) {
var closeCross='<div style="text-align: right; margin: 0.5em 0 0.5em 0;"><a href="javascript:void(0)" onclick="ferme()"> X</a></div>';
var closeBut='<div style="text-align: center; margin: 1em 0 0.5em 0;"><a href="javascript:void(0)" onclick="ferme()">Close</a></div>';

document.getElementById('light').innerHTML=closeCross+kette+closeBut; 
document.getElementById('light').style.display='block'; 
document.getElementById('fade').style.display='block';
window.scrollTo(0,0);
}

function ferme() {

document.getElementById('light').style.display='none'; 
document.getElementById('fade').style.display='none';
}


function checkScreenResolution () {

if  (screen.availWidth < 1280 || screen.availWidth < 1024) {alert("Please note. This quiz may not function comfortably and reliably at a screen resolution of less than 1280x1024.")}
    var ausset = (navigator.userAgent.indexOf("Mac") != -1 || 
                  navigator.userAgent.indexOf("Gecko") != -1 || 
                  navigator.appName.indexOf("Netscape") != -1) ? 0 : 4;
    window.moveTo(-ausset, -ausset);
    window.resizeTo(screen.availWidth + (2 * ausset), screen.availHeight + (2 * ausset));
}

function setAudio() {

if(document.getElementById("audio").src.indexOf("Off")==-1)
{
document.getElementById("audio").src=dotty+"images/audioOff.gif";
document.getElementById("audio").title="Click to turn quiz response sound on.";
bPlaySound=false;
}
else
{
document.getElementById("audio").src=dotty+"images/audioOn.gif";
document.getElementById("audio").title="Click to turn quiz response sound off.";
bPlaySound=true;
}
}

function setAudio2() {

if(document.getElementById("audio2").src.indexOf("Off")==-1)
{
document.getElementById("audio2").src=dotty+"images/audioOff.gif";
document.getElementById("audio2").title="Click to turn quiz reponse sound on.";
bPlaySound=false;
}
else
{
document.getElementById("audio2").src=dotty+"images/audioOn.gif";
document.getElementById("audio2").title="Click to turn quiz reponse sound off.";
bPlaySound=true;
}
}

