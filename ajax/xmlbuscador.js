window.addEventListener("load",inicio,false);
var con;
function inicio() {
 var buscar = document.getElementById('busca');
 buscar.addEventListener("keyup",sugerir,false);
 con = new XMLHttpRequest();
 con.open("GET","mixml.xml",true);
 con.onreadystatechange=arreglo;
 con.send(null);

}

function arreglo() {

//   if (con.readyState==4) {
//     if (con.responseXML) {
//       var total = con.responseXML.getElementsByTagName('datos');
//
//       for (var i = 0; i < total.length; i++) {
//       contenido = total[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
//
//       }
//       // console.log("Entro");
//     } else {
//       console.log("fallo");
//     }
// }
}

function sugerir() {
 var str = document.getElementById('busca').value;
var total = con.responseXML.getElementsByTagName('datos');
var estado;
 if (str !=""){
    // document.getElementById('respuesta').innerHTML="";

   var contenido;
   for (var i = 0; i < total.length; i++) {
      contenido = total[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
     if (contenido.toLowerCase().indexOf(str.toLowerCase())==0 ) {

// console.log(`${contenido}`);

      // var temp=  document.getElementById('busca').value =document.getElementById('respuesta').firstChild.innerHTML=`${contenido}`;
        document.getElementById('respuesta').innerHTML=`${contenido}`;
     }
   }
 }
}
