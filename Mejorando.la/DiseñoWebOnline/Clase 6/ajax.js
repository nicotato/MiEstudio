
var base_url = "http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat, lon){

	var query = "SELECT * FROM geo.placefinder WHERE text ='" + lat + ", " + lon + "'";
	query += " AND gflags= 'R'";
	query = encodeURIComponent(query);

	var opciones = {
		url: base_url + "q=" + query,
		dataType: 'jsonp',
		jsonpCallback: 'geocallback',
		data:{
			format: 'json'
		},
		error:'errores'
	}
	$.ajax(opciones);
}

function geocallback(datos){
	var info = datos.query.results.Result;
	var pais = info.country;
	var cuidad = info.city;
	var barrio = info.neighborhood;
	var woeid = info.woeid;
	var tmp = '<p><strong>'+barrio+'</strong><br/>'+cuidad+', '+pais +'<br/>'+woeid+'</p>';
 	$('#geo').prepend(tmp);

 	obtenerClima(woeid);
	console.log(info);
}
function obtenerClima(woeid){
	var query = "SELECT * FROM weather.forecast WHERE woeid ='"+woeid+"'"
	query += " AND u='c'"
	query = encodeURIComponent(query);

	var opciones = {
		url: base_url + "q=" + query,
		dataType: 'jsonp',
		jsonpCallback: 'climacallback',
		data:{
			format: 'json'
		},
		error:'errores'
	}
	$.ajax(opciones);
}
function climacallback(datos){
	$('#geo').prepend(datos.query.results.channel.item.description);
	console.log(datos);
}
function errores(x,t,s){
	console.log(t);
}