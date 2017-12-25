function getElementsByClassName(className, tag, elm){
	
	var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
	var tag = tag || "*";
	var elm = elm || document;
	var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);
	var returnElements = [];
	var current;
	var length = elements.length;
	for(var i=0; i<length; i++){
		current = elements[i];
		if(testClass.test(current.className)){
			returnElements.push(current);
		}
	}
	return returnElements;
}


function trim(kette,caseMode) {

kette=kette.replace(/ /g,"");
if (caseMode === 1) {
return kette;
}
else
{
return kette.toLowerCase();
}

}