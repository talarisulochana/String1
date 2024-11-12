
var a="            Nanna"
var trimStr=a.trimStart();
console.log(a)
console.log(a.length)
console.log(trimStr)

var a1="Amma         "
var trimStr1=a1.trimEnd();
console.log(a1)
console.log(a1.length)
console.log(trimStr1)
var concatStr=trimStr.concat(trimStr1)
var uppercase_concat_str=concatStr.toUpperCase();
console.log(uppercase_concat_str)


var extract=uppercase_concat_str.slice(4,6);
 console.log(extract)
 var index_value=extract.indexOf("S");
console.log(index_value)
var lower_case=extract.toLowerCase();
console.log(lower_case)



var char="S"
var concat=char.concat(lower_case)
console.log(concat)
var upper_case=concat.toUpperCase();
console.log(upper_case)
var last_extrct=upper_case.slice(-2,-1)
console.log(last_extrct)


var firststr="chinni";
var secstr="kavya"
console.log(firststr)
console.log(secstr)

var extract_first=firststr.slice(0,3);
console.log(extract_first)

var extract_sec=secstr.slice(-3)
console.log(extract_sec)

var concat_together=extract_first.concat(extract_sec)
console.log(concat_together)

var uppercase_all=concat_together.toUpperCase();
console.log(uppercase_all)


var a = "            Nanna";
var trimStr = a.trimStart();
console.log(a);           
console.log(a.length);     
console.log(trimStr);      
var a1 = "Amma         ";
var trimStr1 = a1.trimEnd();
console.log(a1);        
console.log(a1.length);    
console.log(trimStr1);     
var concatStr = trimStr.concat(trimStr1).toLowerCase(); 
var firstChar = concatStr.charAt(0).toUpperCase();      
var lastChar = concatStr.charAt(concatStr.length - 1).toUpperCase(); 
var finalStr = firstChar + concatStr.slice(1, -1) + lastChar;

console.log(finalStr); 



var sentence="hello there , how are you";
console.log(sentence)

var index=sentence.indexOf("are");
console.log(index);




