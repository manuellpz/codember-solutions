/*
# = +1 @ = -1 * = multiplicaca el valor por si mismo & = imprime el valor actual
*/
let str = "";
let result = 0;
const string = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"

string.split('').forEach(el => {
   if (el === "&"){
      str += result
      console.log(str)
   }
   else if (el === "#") ++result
   else if (el === "*") result *= result
   else if(el === "@") --result
})