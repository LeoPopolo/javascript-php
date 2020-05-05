window.onload = eventos;

function eventos(){
    $("#btnEnviar").click(function(){
        realizaProceso($("#valor1").val());
    });
        
    parsearJson();
}

function realizaProceso(valorCaja1){
        
    var parametros = {
            "valorCaja1" : valorCaja1
        };
        
    $.ajax({
            data:  parametros,
            url:   'funcion.php',
            type:  'POST',
            response: $("#formulario").serialize(),
            beforeSend: function () {
                    $("#spanNombre").html("Procesando, espere por favor...");
            },
            success: function (response) {
                    $("#spanNombre").html(response);
            }
    });
}

function parsearJson(){
        var requestURL = "./datos.json";
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'text';
        request.send();
        
        request.onload = function() {
                var datosText = request.response;
                var datos = JSON.parse(datosText);
                console.log(datos[0]);
                
                //agregar datos del json al div del html
                //$("#spanNombre").empty();
                
                
            var objeto = `
            <label>nombre actual: </label> <p>${datos[0]['name']}</p>
            `   
            $("#spanNombre").append(objeto);
        }
    }