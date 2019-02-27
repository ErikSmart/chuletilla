// window.addEventListener("load",boton,false);
//
// function boton() {
//   let crear = document.getElementById('crear');
//   let input = document.createElement("input");
//   let boton = document.createElement("button");
//   let textoBoton = document.createTextNode("Enviar");
//   boton.appendChild(textoBoton);
//   boton.setAttribute("type","submit");
//   input.setAttribute("id","foco");
//   input.setAttribute("autocomplete","off");
//   input.setAttribute("value","Buscar....")
//   crear.appendChild(input);
//   crear.appendChild(boton);
// }

var x = $(document).ready(iniciar);


function iniciar() {
  x = $('button').click(ejecutar);
  x = $('td').click(tabla);
  x = $('#Argumento li').click(ocultar);
  x = $('button').click(clase);
  x = $('h1').click(saberContenido);
  x = $('table').click(agregarBorde);
  x = $('#descripcion').click(asociarClase);
  x = $('#descripcion').dblclick(quitarClase);
  x = $('button').click(crearFormulario);
  x = $('#crear').hover(cambioImagen,cambio);
  x = $("html").mousemove(ratonMovimiento);
  x = $('#foco').focus(miFoco);
  x = $('#foco').blur(perderFoco);
  x = $('#crear').html("<h1>Segundo elemento</h1>");
  x = $('#crear').append('<button type="button" name="button" id="tu">Ejecutar</button>');
  x = $('#tu').click(ocultarElemento);
  x = $('#face').click(face);
  x = $('#face').click(each);
  x = $('#ajaxenlaces a').click(miAjax);
  x = $('#ajaxenlaces a').click(llamadaAjax);
  x = $('#calculoForm').submit(calcularCuadrado);

}

function ejecutar() {
  x = $('#titulo1,#titulo2').css('color', 'red').css('background', 'blue').css('font-family', 'sans-serif');
  x = $('#h1').text('some text').css('font-family', 'sans-serif');
}

function tabla() {
  x = $(this).css('background', 'red');
}

function ocultar() {
  x = $(this).hide();
}

function clase() {
  x = $('.resaltar').css('background-color', 'blue');
}
function saberContenido() {
  document.getElementById('insertarTexto').innerHTML=x.text();
}
function agregarBorde() {
  x=$(this).attr('border', '0');
}
function asociarClase() {
  x=$('#descripcion').addClass('miparrafo');
}

function quitarClase() {
  x=$('#descripcion').removeClass("miparrafo");
}

function crearFormulario() {
  x=$('#formulario').html('<form> <input type="text" name="" value="" autocomplete="off"> <button type="submit" name="button">Enviar </button> </form>');
}

function cambioImagen() {
  // x=$(this).html('<img src="1.jpg" alt="">');
}
function cambio() {

   // x=$(this).html('<img src="2.jpg" alt="">');
}

function ratonMovimiento(e) {
  x=$('#coredenadax').text(`Las Cordenadas son ${e.clientX}`);
}

function miFoco() {
  x=$('#foco').css('border-color', 'red').css('border-bottom-style', 'dashed');
}

function perderFoco() {
  x=$(this).attr('value', '');
}

function ocultarElemento() {

  if (x=$('#descripcion').hasClass('descripcion')) {
    x=$('#descripcion').show();
    x=$('#descripcion').removeClass('descripcion');
  }else {
    x=$('#descripcion').hide();
    x=$('#descripcion').addClass('descripcion');
  }
}

function face() {
    x =  $('#descripcion').toggle("hide");
}

function each() {
    x = $('#descripcion p').each(resaltar);
}
function resaltar() {
  x = $(this);
  if (x.text().length < 77 ) {
    x.css('color', 'blue');
    console.log(`${x.text()}`);
  }
}

function miAjax(e) {
    var en = $(e.target).attr('href');
       // console.log(e.target);
  var texto = $("#textoajax");
  texto.load(en);
  return false;
}

function llamadaAjax(x) {
    var enlace1 = $(x.target).attr('href');
    var remoto = $("#remoto");
    $("#cargando").ajaxStart(mensajeCargando);
    remoto.load(enlace1);
}

function mensajeCargando() {
  $("#cargando").html("Cargando ....");
}

function calcularCuadrado(x) {
  x.preventDefault();
  $("#calculoBtn").click(accionDatos);

}

function accionDatos() {
  var valor =  $("#cuadrado").val();
  var datos = $.getJSON("cuadrado.php",{numero:valor},llegadaDatos);
}
function llegadaDatos(datos) {
 $("#resultadoCuadrado").html(datos);

}
//Fin
