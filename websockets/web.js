var respuesta = document.getElementById('respuesta');
var boton = document.getElementById('btn');

boton.addEventListener('click', e => {
  var conexion = new XMLHttpRequest();
  conexion.open('GET', 'datos.json', true);
  if (conexion.readyState == 1) {
     respuesta.innerHTML=`Cargando...`;
  }
  conexion.addEventListener('load', e => {
    let datos = JSON.parse(e.target.responseText);
    larespuesta(datos);
  });
  conexion.send();
});


var larespuesta = datos => {
  respuesta.innerHTML='';
  //uso de createDocumentFragment
  var fragmento = document.createDocumentFragment();
 for (var i = 0; i < datos.length; i++) {
   let titulo = document.createElement('h1');
   let contenido = document.createElement('p');
   let ititulo = document.createTextNode(`${datos[i].titulo}`);
   let icontenido = document.createTextNode(`${datos[i].contenido}`);
   // respuesta.appendChild(titulo);
   // respuesta.appendChild(contenido);
   contenido.appendChild(icontenido);
   titulo.appendChild(ititulo);
   fragmento.appendChild(titulo);
   fragmento.appendChild(contenido);
 }
respuesta.appendChild(fragmento);


    // respuesta.innerHTML = `${datos[1].titulo}`;
}


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
  if (con.readyState== 1) {
  document.getElementById('respuesta').innerHTML='Cargando ...';
  }
  con.onreadystatechange = accion;
  con.send();
}

function accion() {
  var r = document.getElementById('respuesta');

  if (con.readyState == 4) {
    let dato = JSON.parse(`${con.responseText}`)
    r.innerHTML = `${dato.title}`;
    r.style.display='inline';
  }

}
