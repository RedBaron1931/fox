
// console.log(a,'default');
// $(document).ready(function () {

var a = 11, b = 3, c = 1, d;
d = a + b + c;
// var d2 = document.getElementById("znach_style4");
// var d2 = document.getElementById("znach_style4").querySelector('span').innerText.split()
// var chislo = d2[0];
// var d = chislo;

var bfon= 100/d; 
var dar1, dar2, dar3;
// $('.style3 ').css({'background-color' : '#111'});
$('.style1 a').on('click',function () {
		a = a + 1;
		var znach_style = document.getElementById("znach_style1");
		
		d=d+1;
		document.getElementById("znach_style4").innerHTML = d;
		
		dar1 =(a*bfon)*3;
		// a=dar*3
		znach_style.innerHTML = a;
		// $('.style1').css({'width': dar})
		// console.log(bfon, dar2, dar3, 'znach')
		// console.log(chislo, 'd2')
		
	});
$('.style2 a').on('click',function () {
		b = b + 1;
		var znach_style = document.getElementById("znach_style2");
		znach_style.innerHTML = b;
		d=d+1;
		document.getElementById("znach_style4").innerHTML = d;
		
		dar2 =(b*bfon)*3;
		// $('.style2').css({'width': dar})

	});
$('.style3 a').on('click',function () {
		c = c + 1;
		var znach_style = document.getElementById("znach_style3");
		znach_style.innerHTML = c;
		d=d+1;
		document.getElementById("znach_style4").innerHTML = d;
		
		dar3 =(c*bfon)*3;
		znach_style.innerHTML = c;
		// $('.style3').css({'width': dar})

		
	});

// console.log(bfon, dar2, dar3, 'znach')

// $('#znach_style span' )
// });