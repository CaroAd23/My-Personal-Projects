/* lo que se muestra a continuacion es practica de estructuras de control JS*/ 

let edad=14;


if(edad>=18){
    console.log("usted es mayor de edad");
}
else{
    console.log("usted es menor de edad"); 
}




let edades=65;


if(edades>=18 && edades<60){
    console.log("usted es mayor de edad");
}
else if(edades<18){
    console.log("usted es menor de edad");
}
else if(edades>=60){
    console.log("usted es un adulto mayor ");

}


/*importante recordar que las variables declaradas con let no pueden ser usadas dentro del ciclo for, y se deben
declarar nuevamente dentro de las instrucciones del ciclo.*/ 
for(let numero=0; numero<10; numero++){
    console.log("el numero es: " + numero);
    
}

var numeros=3;
while(numeros<10){
    console.log("el numero es: " + numeros);
    numeros++;
}
/* crear un programa que guarde los resultados de la tabla del 5 en un vector, con estos resultados
recorrer el vector e imprimir la tabla del 5. 
 */

let resultados=[];
for (let i =1; i <=10; i++){
    resultados.push(i*5);
    console.log("5x " + i +"="+ resultados[i-1]);
}

/* las matrices pueden describirce de manera sencilla como verios vectores con datos del mismo tipo 
almecenados dentro de un vector mas grnade, se puede decir que una matriz es un vector de vectores.
 */

let datos= [[ "manzama", "pera", "papaya", "piña"],
             ["papa","tomate","yuca","ajo"],
            ["arroz","frijol","cebada ","garbanzo"]];
 console.log(datos);    

 /*los registros pueden definirse como un vector o matriz que almacena datos de distintos tipos. aqui podemos
 observar que para recorrer y mostrar el arreglo se nesecitan dos ciclos for anidados.  */
 
 let registros=[
    ["juan", "juan@sindato.com", 15, 32.543],
    ["luis","luis@sindato.com", 34, 25.345],
    ["paola", "pao@sindato.com", 45, 45.321],
    ["carlos", "caelos@sindato.com", 64, 34.678], 

 ];
 var total=0; 
 for(let i =0; i <registros.length; i++){
    console.log("registro# " + (i+1));
    for (let j=0; j<registros[i].length;j++){
        console.log(" "+ registros[i] [j]);
    }
 }
 
/* con el elemento .sort(); se puede ordenar un vector de manera 
que sus elementos se muestren de manera asendente
 */
var data=[23,45,65,23];
data.sort();
console.log(data);

/*tambien podemos ordenar un vector de manera desendente utilizando el atributo array.reverse();
 en conjunto con el metodo .sort();
  */
var array=["carolina", "gloria", "laura"];
array.sort().reverse();
console.log(array);
/*Para ordenar un vector con datos numéricos se debe pasar como argumento una función al método

Array.sort(), */
var arg=[ 65,12,5,324,24];

arg.sort(function (a,b) {
    return(a-b);
})
console.log(arg.join(","));

/*Como se puede ver en el codigo se pasa una función (sin identificador) que recibe dos datos del arreglo (a y b)
 y los compara con la diferencia (resta) de ellos.
 A las funciones que no se les pone identificador se les llaman funciones anónimas,
  también existe otra forma de sintaxis para funciones anónimas,
  se denomina funciones flecha. */

  //aqui podemos ver como se realiza el ordenamiento de un vector con datos numericos usando una funcion flecha.
  /*al usar dicha funcion no es nesesario usar la sentencias funtion,return o los corchetes. ya que 
  todos estos se remplazan por el contexto =>*/
  var arg=[ 65,12,5,324,24];

arg.sort((a,b) => (a-b)
);
console.log(arg.join(","));

/*para realizar el ordenamiento de registros: se desea ordenar los registros de mayor edad a menor edad. */

var reg=[
        {usuario:"maria", edad:28, rol: "software developer"},
        {usuario:"juan", edad:34, rol:"contador"},
        {usuario:"carlos", edad:54, rol:"director"}

];
reg.sort((a,b) => {
    return b.edad - a.edad
});
console.log(reg);

/*El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada
 (Array.prototype.find() */

 const array1=[12,23,10,45,80];
 const found = array1.find(Element => Element >10);
 console.log(found);

 /*Como se puede ver en el codigo se usa el identificar elemento
  para referenciar a la variable que se va a aplicar el criterio
  que en el ejemplo es encontrar el primer elemento que sea mayor que 10. */

  /*Muchas veces es importante que, en lugar de retornar un solo valor,
   el resultado sea más de uno, por ejemplo, si en el arreglo del codigo anterior, 
   se retornan los valores que son mayores que 10, por lo tanto,
    debe retornar otro vector con los valores resultados. Para esto existe la función Array.filter()
  , que crea un nuevo arreglo con los datos que cumplan con la condición. */

  const glo=[12,23,10,45,80];
  const arre= array1.filter((Element) => Element >10);
  console.log(arre);

  /*NOTA:En la medida que se va avanzando en el conocimiento de la sintaxis del lenguaje,
   el código fuente se va enriqueciendo de elementos y por tanto de complejidad,
    esto hace que sea necesario conocer herramientas para la depuración de fallas
     y corregir los fallos en la redacción del código. */

/*La forma más sencilla de disparar un error es con la palabra reservada throw,
 este comando permite enviar al intérprete de JavaScript el evento de que ha ocurrido un error, 
 generalmente permite enviar cualquier tipo de dato,
 pero lo más común que envíe un “Error” como se muestra en la siguiente figura. */

 throw new error("no se puede dividir por cero");

 /*Existe un tipo de estructura de control en JavaScript que está pendiente
  de revisar en el flujo de ejecución de un programa para detectar comportamientos inesperados,
   la estructura es try … catch
    que consta de un bloque que intenta la ejecución de una sesión de código (contexto),
     a la espera de que pueda ocurrir una posible excepción.
      Finalizado el contexto existe otro denominado catch que tiene un argumento o variable de contexto,
       donde se captura el elemento disparado.

 */

let numerador=4;
let denomidor=0;
let resultado=null;

try{
if(denomidor== 0){
    throw new error("no se puede dividir por cero");

}
else{
    resultado= numerador/denomidor;

}
}catch(e){
    console.error(e);
    resultado=null; 

}


