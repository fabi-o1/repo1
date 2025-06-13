//  1.IMPRIMIR EN LA CONSOLA los numeros del 1 al 20 
 for(var i =1;i <= 20; i++){
   console.log(i)
 }

 while (condition) {

}

// 2. IGUAL QUE ANTES, pero en una sola fila

var lista = []
for(var i = 1;i <= 20; i++){
    lista.push(i)
}
console.log(lista)
console.log(lista.toString());

var cadena = lista.toString();
var x = cadena.split(",")

