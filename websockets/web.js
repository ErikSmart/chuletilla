var respuesta = document.getElementById('respuesta');
var boton = document.getElementById('btn');

boton.addEventListener('click', e =>
{
  var conexion = new XMLHttpRequest();
  conexion.open('GET','datos.html',true);
  conexion.addEventListener('load', e =>
  {
        respuesta.innerHTML=e.target.responseText;
  });
  conexion.send();

});
