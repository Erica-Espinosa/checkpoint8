var miLista = ['velma', 'exploradora', 'jane', 'john', 'harry'];
var contador = 0;
//Primera forma del for
for(valor in miLista){
    console.log(miLista[valor]);
}

//Segunda forma del for
for(var i = 0; i < miLista.length; i++){
    console.log(miLista[i]);
}

//Tercera forma del for
miLista.forEach(function (valor){
    console.log(valor);
});

//While
console.log("**************************");
while (contador < miLista.length){
    console.log(miLista[contador]);
    contador++;
}

//Funcion flecha
obtenerMensaje = () => {console.log('Hola mundo');}
obtenerMensaje();