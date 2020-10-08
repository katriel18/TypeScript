var a=5;
console.log("a",a);
//a="d";//error-ya fue declarada como number

var b:number=10;
console.log("b",b);
//b="hola";//error-ya fue declarada como number

var c:String="diez";
console.log("c",c);
//c=10;//error-ya fue declarada como String

var d:any=15;
console.log("d",d);
d="quince";
console.log("d",d);
d=true;
console.log("d",d);
d=15;
console.log("d",d);
d="quince";
console.log("d",d);