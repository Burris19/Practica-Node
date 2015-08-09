/**
 * Created by julian on 7/08/15.
 */

function inicio(){
    console.log("Has entrado en la pagina de inicio");
    return "Inicio";
}
function pagina1(){
    console.log("Has entrado en la pagina numero 1");
    return "Pagina 1";
}
function pagina2(){
    console.log("Has entrado en la pagina numero 2");
    return "Pagina 2";
}

function favicon(){
	console.log("Se ha pedido el favicon");
	return "";
}
exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;