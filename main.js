// let lista = new Array(5).fill(1,0,4);
// //                longitud     1= valor a rellenar,  0= indice desde donde rellena, 2= cantidad de elementos que rellena
// console.log(lista);
// let generar = ()=> Math.trunc(Math.random()*10);
// let lista = new Array(20);
// lista.fill(null);
// for(let i in lista){
//     lista[i] = generar();
// }
// console.log(lista);
// console.log(lista.slice(5,10));// desde el 5 hasta el 10
// console.log(lista.slice(0,-5));//desde el comienzo le quito los ultimos 5
// console.log(lista.slice(-5));//muestra los ultimos 5



//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// let alfabeto = ["a","b","c","d","e","f","g","h","i","j"];
// console.log(alfabeto);
// alfabeto.splice(5,0,"Jaime");//En el indice 5 agrego Jaime y desplazo los demas
// console.log(alfabeto);
// alfabeto.splice(5,1);
// console.log(alfabeto);//Elimino el elemento del indice 5
// alfabeto.splice(0,5,"J","a","i","m","e");//Me ubico en el indice 0 y reemplazo los siguientes 5 elementos
// console.log(alfabeto);
// alfabeto.splice(-5);//Si solo coloco un negativo, me va a eliminar los ultimos datos
// console.log(alfabeto);
// alfabeto.splice(-3,1,);//Me ubico en el 3r indice contando desde el final y lo elimino
// console.log(alfabeto);
// alfabeto.splice(-2,3,"i","m","e");//me ubico en el penultimo indice, reemplazo los 3 elementos
// console.log(alfabeto);

//arr.copyWithin(target)
// arr.copyWithin(target, start)
// arr.copyWithin(target, start, end)
//Sirve pa copiar una parte del array y reemplazarla sin modificar su longitud

let nuevaLista= ["Jaime","Miguel","Albert","William","Jose","Alfredo"];
console.log(nuevaLista);
nuevaLista.copyWithin(0,1,3);
//el primero indica el indice donde  se insertara lo copiado
//el segundo parametro es opcional e indica el indice a partir de donde se va a copiar
//el tercer parametro tambien es opcional e indica hasta donde se va a copiar
console.log(nuevaLista);
nuevaLista= ["Jaime","Miguel","Albert","William","Jose","Alfredo"];
nuevaLista.copyWithin(1);//Si solo se coloca el target, se copia los elementos desde esa posicion
console.log(nuevaLista);
nuevaLista= ["Jaime","Miguel","Albert","William","Jose","Alfredo"];
nuevaLista.copyWithin(-3)//Si lo coloco negativo, se ubica en el indice contando hacia atras
console.log(nuevaLista);
nuevaLista= ["Jaime","Miguel","Albert","William","Jose","Alfredo"];
nuevaLista.copyWithin(-4,3);
console.log(nuevaLista);
nuevaLista= ["Jaime","Miguel","Albert","William","Jose","Alfredo"];
nuevaLista.copyWithin(-3,-4,-3);
console.log(nuevaLista);

