var respuesta = document.getElementById('respuesta');
var boton = document.getElementById('btn');

boton.addEventListener('click', e => {
  var conexion = new XMLHttpRequest();
  conexion.open('GET', 'datos.html', true);
  conexion.addEventListener('load', e => {
    respuesta.innerHTML = `${e.target.responseText}`;
  });
  conexion.send();

});
// Viejo metodo (rescantando datos)
window.addEventListener('keyup', ini, false);

function ini() {

  var caja_busqueda = document.getElementById('buscar');
  res(`${caja_busqueda.value}`);
}
var con;

function res(valor) {
  con = new XMLHttpRequest();
  con.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + valor, true);
  con.onreadystatechange = accion;
  con.send();
}

function accion() {
  var r = document.getElementById('respuesta');

  if (con.readyState == 4) {
    let dato = JSON.parse(`${con.responseText}`)
    r.innerHTML = `${dato.title}`;

  }
}
