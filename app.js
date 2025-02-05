let amigos = [];

function agregarAmigo () {
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado !== ''){
        amigos.push(amigoIngresado);
    }else {
        alert('"Por favor, inserte un nombre."');
    }
    document.querySelector('#amigo').value='';
    console.log(amigos);
}
