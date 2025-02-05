let amigos = [];

function agregarAmigo () {
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado !== ''){
        amigos.push(amigoIngresado);
    }else {
        alert('"Por favor, inserte un nombre."');
    }
    
    console.log(amigos);
}
