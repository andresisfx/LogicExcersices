let matriz = [[6,-2,2,4],[12,-8,6,10],[3,-13,9,3],[-6,4,1,-18]];
let vector =[16,26,-19,-34];
let matrizaum =[
[matriz[0][0],matriz[0][1],matriz[0][2],matriz[0][3],vector[0]],
[matriz[1][0],matriz[1][1],matriz[1][2],matriz[1][3],vector[1]],
[matriz[2][0],matriz[2][1],matriz[2][2],matriz[2][3],vector[2]],
[matriz[3][0],matriz[3][1],matriz[3][2],matriz[3][3],vector[3]]];

max=0;
piv=0;
let mat=[[]];
//Devuelve el valor maximo de la primera columna aplicando valor absoluto
function maximo(arreglo){
    let arr=[];
    //Recorre la primera columna
    for (i=0;i<arreglo.length;i++) {
     // guarda cada elemento de la primera columna en nuevo arreglo aplicando valor absoluto
     arr.push(Math.abs(arreglo[i][0]))
    }
    //extrae el número mayor del arreglo
    let max = arr.reduce(function (a, b) {
        return Math.max(a, b);
      }, -Infinity);

      //devuelve la posición donde esta ubicado el número mayor      
      max=arr.indexOf(max);


    return max;
}
//método para cambiar las filas de la matriz
function cambiarfilas(arreglo,fila1=0,fila2=0){
    for (i=0;i<arreglo[0].length;i++) {
    temp=0;  
    //Se guarda el valor de la primera fila en una variable temporal  
    temp=arreglo[fila1][i];
    //Se guardan los nuevos valores en la primera fila
    arreglo[fila1][i]=arreglo[fila2][i];
    //Se guardan los valores iniciales de la primera fila en la otra fila
    arreglo[fila2][i]=temp;   

    }  
    imprimir(arreglo)

}
//método para imprimir la matriz
function imprimir([[]]=matriz){
    //iteramos las filas
    for (x=0;x<matrizaum.length;x++) {
        text = ""
        num=0; 
        fil=0;
    // iteramos las columnas    
        for (y=0;y<matrizaum[x].length;y++) {
            text += matrizaum[x][y] + "\t";
            num=matrizaum[x][0];

                if(max<num){
                    max=num;               
                }
            }      
    console.log(text)
    }
}

function eliminacion(arreglo){
for (i=0;i<arreglo.length-1;i++) {
etapa=i+1;
pivote=0;
pivote=arreglo[i][i]
//console.log("pivote"+pivote)   

num=0;
for (k=i+1;k<arreglo.length;k++) {
    ref=arreglo[k][i]/pivote
    for (j=0;j<arreglo.length+1;j++) {    
    //console.log("ref"+arreglo[k][i])      
    //console.log("num"+arreglo[k][j]+"-"+arreglo[i][j]+"*"+ref) 
    num=arreglo[k][j]=arreglo[k][j]-arreglo[i][j]*ref

    }

}
console.log("Etapa:"+etapa)
console.log("---------------------------------------------------------")
imprimir(arreglo)
}

}

console.log("Matriz inicial")    
imprimir(matrizaum)
console.log("Matriz con pivote") 
piv=maximo(matrizaum)   
cambiarfilas(matrizaum,0,piv)
console.log("Eliminación de Gauss") 
eliminacion(matrizaum)

//Al finalizar el ciclo for tenemos que se han despejado todas las incógnitas y la ultima incognita es x1 la cual su valor es la soucion a todo el sistema 
console.log(incognitas)

console.log("la solucion del sistema es  "+ incognitas[3])

// creamos una variable para almacenar el valor de las incognitas
let incognitas =[]

// Despejamos la variable x4
let x4 = (matrizaum[3][4] / matrizaum[3][3] )
//agregamos al array el valor de la incognita x4
incognitas.push(x4);
console.log("este es incognita x4:  " + incognitas[0])

//implementamos un bucle for para despejar el resto de incognitas
for (let i = 2; i >= 0; i--) { // i recorre el array matrizau, condicionamos a i>= 0 porque i al inicio vale 2 y con i-- ira disminuyendo su valor 
    let suma = 0;
    for (let j = i + 1; j < 4; j++) {                  //implementamos un bucle anidado para que recorra los array gurdados en matrizaum( recordemos que matrizaum es un array de arrays)
        suma += matrizaum[i][j] * incognitas[3 - j];   //calculamos el valor de la incógnita despejada anteriormente multiplcada por su coeficiente
    }
    let x = (matrizaum[i][4] - suma) / matrizaum[i][i];//despejamos la incógnita y calculamos su valor
    incognitas.push(x);                                //cada vez que se ejecute el bucle padre se guardará el valor de la incognita buscada en el array incognitas   
    console.log("Valor de x" + (i + 1) + ": " + x);
}