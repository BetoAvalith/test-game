export function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    return array[0];
  }
  
  
  export function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1];
  }
  
  
  export function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
  }
  
  
  export function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    return array.map(numero => numero + 1);
  }
  
  
  export function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento)
    return array;
  }
  
  
  export function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento)
    return array;
  }
  
  
  export function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    return palabras.join(' ');
  }
  
  
  export function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    return array.includes(elemento);
  }
  
  
  export function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    return numeros.reduce((a,b)=> a+b);
  }
  
  
  export function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    return resultadosTest.reduce((a,b)=>a+b) / resultadosTest.length;
  }
  
  
  export function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    return Math.max(...numeros);
  }
  
  
  export function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    if (arguments.length === 0) return 0;
    if (arguments.length === 1) return arguments[0];
  
    let total = 1;
   
    for (let i of arguments) {
      total = total * i;
    }
    return total;
  }
  
  
  export function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    return arreglo.filter(numero => numero > 18).length;
  }
  
  
  export function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    if(numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
    if(numeroDeDia >=2 && numeroDeDia <= 6) return "Es dia Laboral";
  
  } 
  
  
  export function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
     
    return n.toString().charAt(0) === '9';
    
  }
  
  
  export function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    for(let i = 1; i < arreglo.length; i++){
      if(arreglo[i-1] !== arreglo[i]) return false
    }
    return true;
  } 
  
  
  export function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    const meses = ["Marzo", "Noviembre", "Enero"];
    const auxArray = [...new Set(array.filter(mes => meses.includes(mes)))] 
    return auxArray.length === 3 ? auxArray : "No se encontraron los meses pedidos"  
  }
  
  
  export function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    return array.filter(numero => numero > 100);
  }
  
  
  export function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    const auxArray = [];
    let suma = numero;
    let i=0;
    while(i < 10){  
      i++   
      if(i === suma) break;
      suma += 2;   
      auxArray.push(suma)    
    }
    return auxArray.length === 10 ? auxArray : "Se interrumpió la ejecución";
    
  }
  
  
  export function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    const auxArray = [];
    let suma = numero;
    for(let i = 1; i <= 10; i++){
      if(i === 5) continue;
      suma += 2;   
      auxArray.push(suma) 
    }
    return auxArray;
  }