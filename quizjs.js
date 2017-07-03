//EJERCICIO 1
/*var num1 = prompt();

var num2 = prompt();

var num3 = prompt();

if (num1>num2 && num1>num3){
document.write(" Mayor " + num1 +  " Menor " + num3);
}


if (num2>num1 && num2>num3){
document.write(" Mayor " + num2 +  " Menor " + num3);
}

if (num3>num1 && num3>num2){
document.write(" Mayor " + num3 +  " Menor " + num2);
}
*/
/*
//EJERCICIO 1.1
var numeros = [25, 11, 5, 3, 8, 9];
 
var minimo=Math.min.apply(null, numeros);
var maximo=Math.max.apply(null, numeros);
document.write(" Minimo "+minimo)
document.write(" Maximo "+maximo)
*/


//EJERCICIO 2
/*var par = "" ;
var impar = "";
var a = [12,4,24]
for(var i = 0; i < a.length; i+1 ){
  if(i%2==0){
    par +=i
}
else { impar +=i;
     }
}
*/
//EJERCICIO 3
/*
var numeros = [1, 2, 6, 5];
document.write (numeros.reverse());*/
//EJERCICIO 4
function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += " ";
  return s;
}


var n = 5;
for (var k = 0; k < 2 * n - 1; k++) {
  var i = k < n ? k :  2*n - 2 - k;
  var content = "";
  for (j = 1; j <= 2*i+1; j++)
    content +=  j;
  var sp = espacios (n - (i+1));
  console.log(sp + content);
}

