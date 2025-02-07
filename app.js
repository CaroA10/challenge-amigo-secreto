let amigos = [];

function agregarAmigo () {
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado !== ''){
        amigos.push(amigoIngresado);
    }else {
        alert('"Por favor, inserte un nombre."');
    }
    document.querySelector('#amigo').value='';
    document.getElementById('amigo').focus();
    actulizarListaAmigos ();
    console.log(amigos);
}

function actulizarListaAmigos () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML="";
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos [i];
        lista.appendChild(li);

    }
}

function sortearAmigo () {
    if (amigos.length <= 1){
        alert('No hay amigos suficientes para sortear.');
        document.getElementById('amigo').focus();

    }else{
        let indiceGenerado =  Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos [indiceGenerado];
        let listaResultado = document.getElementById('resultado');
        listaResultado.innerHTML= `<li> El amigo secreto sorteado es: ${amigoSorteado}</li>`;
        console.log(indiceGenerado);
        console.log(amigos[indiceGenerado]);
    }
}