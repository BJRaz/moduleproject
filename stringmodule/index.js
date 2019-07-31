function returnStr() {
	return "This is a string...";
}

function reverseStr(str) {
	var temp = new Array(str.length);
	var j = 0;
	for(var i=str.length-1;i>=0;i--) 
		temp[j++] = str[i];		
	return temp.join('');
}

exports.returnString = returnStr;
exports.reverseString = reverseStr;
