let listaAmigos = []; //Acá cargaremos todos los nombres en un array

const listadoDeAmigos = document.getElementById('listaAmigos'); // lista de amigos
const resultadoUL = document.getElementById('resultado'); // lista donde mostraremos el resultado de los amigos sorteados.

//creamos nuestra función para agregar a un amigo
function agregarAmigo() {
    const box = document.getElementById('amigo'); //Acá es dónde escribiremos el nombre de nuestro amigo
    const nombre = box.value.trim();  //verifica lo que escribimos y con el trim() borraremos los espacios en blanco para asi no generar errores

    if (!nombre) {
        alert('Por favor ingresa un nombre.'); //Acá avisamos con un alert si no ingresamos un nombre.
        box.focus(); 
        return;
    }

    // Evitamos nombres duplicados.
    if (listaAmigos.includes(nombre)) {
        alert('Ese nombre ya está en la lista.'); //damos un aviso con alert
        box.value = ''; //borramos el contenido del box
        box.focus();
        return;
    }

    // Guardamos el nombre en el array/listaAmigos.
    listaAmigos.push(nombre);

    // creamos una lista de los nombres ya agregados.
    const li = document.createElement('li');
    li.textContent = nombre; //Evitamos que nombres con caracteres especiales se interpreten como html
    listadoDeAmigos.appendChild(li);

    // Limpiamos el contenido del box y volvemos a poner en foco
    box.value = '';
    box.focus();

    console.log('Lista de amigos:', listaAmigos); //mostramos el array en nuestra consola.
}

function sortearAmigo() {
    if (listaAmigos.length === 0) { //si la lista está vacia no nos permitirá sortear
        alert('Se necesitan más personas para que se lleve a cabo el sorteo.'); //avisaremos con un alert que se necesitan más personas para jugar
        return;
    }

    // generamos un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); //con el math random generamos un número entre 0 y 1, a este lo multiplicaremos por el length de la lista.

    // Accedemos al nombre elegido por el índice aleatorio
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // mostramos el resultado
    resultadoUL.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}


