// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    array = [];

    for(const item in objeto){
      array.push([ item, objeto[item]]);
    }

    return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var array = string.split("");
  


  return array.reduce((a,d) => (a[d] ? a[d] += 1 : a[d] = 1, a),{});
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var cadena = s.split("");
  var STR = [];
  var str = [];
  var STRstr = [];
  for(let i=0; i < cadena.length; i ++){
    if(s[i] === s[i].toUpperCase()){
      str.push(s[i]);
    }else if(s[i] === s[i].toLowerCase()){
      STR.push(s[i]);
    }
  }
  STRstr = str.concat(STR);
  return STRstr.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  /*
    primero pasar el string a una lista copn split

    invertir cada uno de los strings de cada elemento

    volver a juntar el array en un solo string

    */
      var lista = str.split(" ");
      var lista2 = [];
      var lista3 = [];
      for(let i = 0; i < lista.length; i++){
          lista2.push(lista[i].split("").reverse().join(""));
      }
      lista3 = lista2.join(" ");
      return lista3;
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    parsedN = numero.toString();
    revertedN = parsedN.split("").reverse().join("");
    
    if(parsedN == revertedN){
      str = "Es capicua";
      return str;
    }else{
      str = "No es capicua";
      return str;
    }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí let listaMod = str1.filter(str1 => str1); 

  // function esABC(char){
  //   if(char  == "a"|| char  == "b" || char == "c"){
  //     return true;
  //   }
  // }

  // let listaMod = str1.filter(str1 => !esABC(str1));
  var ncadena = cadena.split(""); 

  function esABC(char){
    if(char  == "a"|| char  == "b" || char == "c"){
      return true;
    }
  }
  let listaMod = ncadena.filter(ncadena => !esABC(ncadena));
  
  return listaMod.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  const asc = arr.sort((a,b) => a.length - b.length);
  return asc;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var inter = [];

  for(let i = 0; i < arreglo1.length; i ++){
    for(let j = 0; j < arreglo2.length; j ++){
      if(arreglo1[i] === arreglo2[j]){
        inter.push(arreglo1[i]);
      }
    }
  }

  return inter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

