
function callfacebook()
{
	window.open("https://www.facebook.com/profile.php?id=100022066748422");
	console.log("facebook called");
}

function callgplus(){
	window.open("https://plus.google.com/u/0/100225601484919260437");
	console.log("gplus called");

}
function calltwitter(){
	window.open("https://www.twitter.com/fati_2304");
	console.log("twitter called");

}

function calllinkedin(){
	window.open("https://www.linkedin.com/in/fatima-khan-2304");
	console.log("linkedin called");

}

function calc1()
{
		var x = parseInt('1');
    	document.getElementById("answer").value += x;
    	console.log(" button called");
};
function calc2()
{
		var x1 = parseInt('2');
    	document.getElementById("answer").value += x1;
    	console.log(" button called");
};
function calc3()
{
    	document.getElementById("answer").value += '3';
    	console.log(" button called");
};
function calc4()
{
    	document.getElementById("answer").value += '4';
    	console.log(" button called");
};
function calc5()
{
    	document.getElementById("answer").value += '5';
    	console.log(" button called");
};
function calc6()
{
    	document.getElementById("answer").value += '6';
    	console.log(" button called");
};
function calc7()
{
    	document.getElementById("answer").value += '7';
    	console.log(" button called");
};
function calc8()
{
    	document.getElementById("answer").value += '8';
    	console.log(" button called");
};
function calc9()
{
    	document.getElementById("answer").value += '9';
    	console.log(" button called");
};
function calc0()
{
    	document.getElementById("answer").value += '0';
    	console.log(" button called");
};
function calcplus()

{
    	document.getElementById("answer").value +='+';
    	console.log(" button called");
};
function calcminus()

{
    	document.getElementById("answer").value +='-';
    	console.log(" button called");
};
function calcmul()

{
    	document.getElementById("answer").value +='*';
    	console.log(" button called");
};
function calcdiv()

{
    	document.getElementById("answer").value +='/';
    	console.log(" button called");
};
function calcclear()

{
		document.getElementById("answer").value ='';
		console.log(" button called");
};
function calcequal()

{
	var x2 = parseInt(eval(document.getElementById("answer").value));
	document.getElementById("answer").value = x2;
	console.log(" button called");
};


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("facebook").addEventListener("click",callfacebook);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("twitter").addEventListener("click",calltwitter);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("gplus").addEventListener("click",callgplus);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("linkedin").addEventListener("click",calllinkedin);
});




document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("f1").addEventListener("click",calc1);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("f2").addEventListener("click",calc2);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("f3").addEventListener("click",calc3);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("f4").addEventListener("click",calc4);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("f5").addEventListener("click",calc5);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("f6").addEventListener("click",calc6);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("f7").addEventListener("click",calc7);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("f8").addEventListener("click",calc8);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("f9").addEventListener("click",calc9);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("f0").addEventListener("click",calc0);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("plus").addEventListener("click",calcplus);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("minus").addEventListener("click",calcminus);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("mul").addEventListener("click",calcmul);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("div").addEventListener("click",calcdiv);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("clear").addEventListener("click",calcclear);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("equal").addEventListener("click",calcequal);
});
