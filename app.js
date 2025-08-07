let listaAmigos = []; //Esta será nuestra lista de amigos.

//función para agregar amigo.
function agregarAmigo() {
let box = document.getElementById('amigo');
let nombre = box.value.trim()  //trim nos permite eliminar los espacios en blanco
if (nombre === "") {
    alert('Por favor ingresa un nombre!.');
    return
}

listaAmigos.push(nombre); //almacenamos el nombre ingresado en la lista
console.log(listaAmigos);
box.value = ''; //limpieamos el imput
}








