var base_url = "http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat, lon){
	var query = "SELECT * FROM geo.placefinder WHERE text='" + lat +"', '"+ lon +"';";
	query += " AND gflgs='R'";
	query = encodeURIComponent(query);

	console.log(query);
}