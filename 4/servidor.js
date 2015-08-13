/**
 * Created by julian on 7/08/15.
 */

var servidor = require('http');
var url = require('url');
var fs = require('fs'); //modulo interno faile system

function iniciar(enrutar,manejador) {
    function arrancaServidor (requiere,respuesta) {

        var ruta = url.parse(requiere.url).pathname;

        console.log("Alguien se ha conectado");

		var contenido = enrutar(manejador,ruta,respuesta);

		//creamos un archivo de texto y lo abrimos para agregar archivos 
		var registro = fs.createWriteStream('registro.txt',{'flags':'a'});
		//ahora escribis en el archivo
		registro.write(ruta + '\n');

        /*
        respuesta.writeHead(200,{"Content-Type":"text/html"});
        respuesta.write(contenido);
        respuesta.end;
        */
    }
    servidor.createServer(arrancaServidor).listen(8080);
}

exports.iniciar = iniciar;


