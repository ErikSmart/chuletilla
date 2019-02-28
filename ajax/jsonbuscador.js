window.addEventListener("load", inicio, false);
var con;

function inicio() {
  var buscar = document.getElementById('busca');
  buscar.addEventListener("keyup", sugerir, false);
  con = new XMLHttpRequest();
  con.open("GET", "xmlbuscador.json", true);
  con.send(null);

}

function sugerir() {
  var str = document.getElementById('busca').value;
  var total = JSON.parse(con.responseText);
  var estado;
  if (str != "") {
    document.getElementById('respuesta').innerHTML = "";
    var contenido;
    for (var i = 0; i < total.length; i++) {
      contenido = total[i].nombre;

      if (contenido.toLowerCase().indexOf(str.toLowerCase()) == 0) {
        var temp = document.createElement("div");
        temp.innerHTML = `${contenido}`;
        temp.onclick = accion;
        document.getElementById('respuesta').appendChild(temp);
      }
    }
  }
}

  function accion(e) {
    let x = e.target;
    let y = document.getElementById('busca').value = x.innerHTML;
    console.log(`Este es el valor de ${y}`);
    document.getElementById('respuesta').innerHTML = "";
console.log(`Este es el valor de`);
  }
