/* ICONOS */
var iconoComun = L.Icon.extend({
	options: {
		iconSize:     [34, 60],
		shadowSize:   [50, 64],
		iconAnchor:   [18, 60],
		shadowAnchor: [4, 62],
		popupAnchor:  [-3, -76]
	}
});
var icono_a = [],
	icono_b = [],
	icono_c = [];
icono_a[1] = new iconoComun({iconUrl: 'images/iconos/icono-a-1.png'});
icono_a[2] = new iconoComun({iconUrl: 'images/iconos/icono-a-2.png'});
icono_a[3] = new iconoComun({iconUrl: 'images/iconos/icono-a-3.png'});
icono_b[1] = new iconoComun({iconUrl: 'images/iconos/icono-b-1.png'});
icono_b[2] = new iconoComun({iconUrl: 'images/iconos/icono-b-2.png'});
icono_b[3] = new iconoComun({iconUrl: 'images/iconos/icono-b-3.png'});
icono_c[1] = new iconoComun({iconUrl: 'images/iconos/icono-c-1.png'});
icono_c[2] = new iconoComun({iconUrl: 'images/iconos/icono-c-2.png'});
icono_c[3] = new iconoComun({iconUrl: 'images/iconos/icono-c-3.png'});

function crearIconoVerde (feature, latlng) {
	return L.marker(latlng, { icon: iconoVerde })
}

function crearIconoRojo (feature, latlng) {
	return L.marker(latlng, { icon: iconoRojo })
}

function crearIconoNaranja (feature, latlng) {
	return L.marker(latlng, { icon: iconoNaranja })
}

var asignarIconoVerde = {
  pointToLayer: crearIconoVerde
}

var asignarIconoRojo = {
  pointToLayer: crearIconoRojo
}

var asignarIconoNaranja = {
  pointToLayer: crearIconoNaranja
}

/* POPUPS */
function agregarPopupPunto(feature, layer) {
	if (feature.properties.imageninte == "1") { imageninte = "POSITIVA" } else { imageninte = "NEGATIVA" }
	if (feature.properties.imagengest == "1") { imagengest = "POSITIVA" } else { imagengest = "NEGATIVA" }
	if (feature.properties.consumomed == "1") { consumomed = "POSITIVA" } else { consumomed = "NEGATIVA" }
	if (feature.properties.satisfacci == "1") { satisfacci = "POSITIVA" } else { satisfacci = "NEGATIVA" }
	if (feature.properties.visioncuar == "1") { visioncuar = "POSITIVA" } else { visioncuar = "NEGATIVA" }
	layer.bindPopup("Imagen Intendente: <strong>" + imageninte + "</strong>" + "<br/>"
		+ "Imagen Gestión: <strong>" + imagengest + "</strong>" + "<br/>"
		+ "Consumo de Medios: <strong>" + consumomed + "</strong>" + "<br/>"
		+ "Satisfacción de servicio: <strong>" + satisfacci + "</strong>" + "<br/>"
		+ "Visión respecto a cuarentena: <strong>" + visioncuar + "</strong>");
}

function agregarPopupDistrito(feature, layer) {
	if (feature.properties && feature.properties.nombre) { 
			layer.bindPopup( "<strong>" + feature.properties.nombre + "</strong>"); 
	} 
}

function agregarPopupRadio(feature, layer) {
	if (feature.properties && feature.properties.DFR) { 
			layer.bindPopup( "<strong>" + feature.properties.DFR + "</strong>"); 
	} 
}
function estiloDistritos() {
	
/*	var variables = {};
	variables['imageninte'] = feature.properties.imageninte;
	variables['imagengest'] = feature.properties.imagengest;
	variables['consumomed'] = feature.properties.consumomed;
	variables['satisfacci'] = feature.properties.satisfacci;
	variables['visioncuar'] = feature.properties.visioncuar;
	variables['visioncuar'] = feature.properties.visioncuar;
	var nombres_variables = Object.keys(variables);
	
	var variables = ['positiva', 'negativa']
	for (variable in variables) {
		color = [];
		if (variable == "positiva") {
			color[1] = "#0000b3";
			color[2] = "#1a1aff"
			color[3] = "#9999ff"
			color[4] = "#ffffff"
		} else {
			color[1] = "#cc0000";
			color[2] = "#ff3333"
			color[3] = "#ffcccc"
			color[4] = "#ffffff"
		}
		layergroup_distritos[variable].eachLayer(function(featureInstanceLayer) {
			var id_feature = featureInstanceLayer.feature.properties['qc_id'];
			if (id_feature == 0) {
				color_actual = 'green';
			} else if (id_feature == 1) {
				color_actual = 'red';
			} else if (id_feature == 2) {
				color_actual = 'orange';
			} else if (id_feature == 3) {
				color_actual = 'black';
			} else if (id_feature == 4) {
				color_actual = 'yellow';
			} else if (id_feature == 5) {
				color_actual = 'blue';
			}
			featureInstanceLayer.setStyle({
				color: color_actual
			});
		});*/
}


/* FUNCIONES ONEACHFEATURE */

function onEachFeatureDistrito(feature, layer) {
	/*var layer_duplicado_a = $.extend(true, {}, layer);*/
	
	layer_duplicado_a = cloneLayer(layer);

	var variables = {};
	variables['imagintpos'] = feature.properties.imagintpos;
	variables['imagintneg'] = feature.properties.imagintneg;
	variables['gestposit'] = feature.properties.gestposit;
	variables['gestnegat'] = feature.properties.gestnegat;
	variables['gestregul'] = feature.properties.gestregul;
	variables['servposit'] = feature.properties.servposit;
	variables['servnegat'] = feature.properties.servnegat;
	variables['servregul'] = feature.properties.servregul;
	variables['covisalud'] = feature.properties.covisalud;
	variables['coviecon'] = feature.properties.coviecon;
	variables['humorbuen'] = feature.properties.humorbuen;
	variables['humormalo'] = feature.properties.humormalo;
	variables['humoregu'] = feature.properties.humoregu;
	variables['interbuena'] = feature.properties.interbuena;
	variables['intermala'] = feature.properties.intermala;
	variables['interegu'] = feature.properties.interegu;
	var nombres_variables = Object.keys(variables);

	layer_duplicado_a.setStyle({fillColor: "orange", color: "orange", fillOpacity: 0.6, weight: 4});
		
	layergroup_distritos['todos'].addLayer(layer_duplicado_a);
	layer_duplicado_a.bindPopup("<strong>" + feature.properties.distrito + "</strong>");
	layer_duplicado_a.bindTooltip(feature.properties.distrito, {permanent: true, direction:"center"}).openTooltip();

	var layer_duplicado_b = [];
	i = 0;
	for (var variableactual in variables) {
		layer_duplicado_b[i] = cloneLayer(layer);
		valor_variable = variables[variableactual];
		
		/*if (valor_variable <= 2) {
			var valor_polar = "baja";
		} else {
			var valor_polar = "negativa";
		}*/
		
		var color = [];
		if (nombres_variables[i] == 'imagintpos' || nombres_variables[i] == 'gestposit' || nombres_variables[i] == 'servposit' || nombres_variables[i] == 'covisalud' || nombres_variables[i] == 'humorbuen' || nombres_variables[i] == 'interbuena') {
			color[1] = "#c0f5a9";
			color[2] = "#7bc87c";
			color[3] = "#357f51";
		} else if (nombres_variables[i] == 'imagintneg' || nombres_variables[i] == 'gestnegat' || nombres_variables[i] == 'servnegat' || nombres_variables[i] == 'coviecon' || nombres_variables[i] == 'humormalo' || nombres_variables[i] == 'intermala') {
			color[1] = "#f9d5c9";
			color[2] = "#f55959";
			color[3] = "#ff0000";
		} else if (nombres_variables[i] == 'gestregul' || nombres_variables[i] == 'servregul' || nombres_variables[i] == 'humoregu' || nombres_variables[i] == 'interegu') {
			color[1] = "#fffb97";
			color[2] = "#ffe569";
			color[3] = "#fdf800";
		}
		color[0] = "#888888";
			
		layer_duplicado_b[i].setStyle({fillColor: color[valor_variable], color: color[0], fillOpacity: 0.8, weight: 1});

		layergroup_distritos[nombres_variables[i]]['todos'].addLayer(layer_duplicado_b[i]);
	
		layer_duplicado_b[i].bindPopup("<strong>" + feature.properties.distrito + "</strong>");
		layer_duplicado_b[i].bindTooltip(feature.properties.distrito, {permanent: true, direction:"center"}).openTooltip();
		
		i++;
	};
}


function onEachFeatureRadio(feature, layer) {
	layer_radio_con_pane = L.geoJSON(feature, {pane: "radios", style: { fillOpacity: 0.8, color: "grey", fillColor: "white", weight: 1 } })
	layergroup_radios.addLayer(layer_radio_con_pane);
	if (feature.properties && feature.properties.DFR) { 
			layer_radio_con_pane.bindPopup( "<strong>" + feature.properties.DFR + "</strong>");
	}
}

function onEachFeaturePunto(feature, layer) {

	var variables = {};
	variables['fraccion'] = feature.properties.fraccion;
	variables['radio'] = feature.properties.radio;
	variables['distrito'] = feature.properties.distrito;
	variables['estrato'] = feature.properties.estrato;
	variables['edad'] = feature.properties.edad;
	variables['imgninten'] = feature.properties.imgninten;
	variables['imgngest'] = feature.properties.imgngest;
	variables['Valorserv'] = feature.properties.Valorserv;
	variables['covidsaec'] = feature.properties.covidsaec;
	variables['humorsoc'] = feature.properties.humorsoc;
	variables['servintern'] = feature.properties.servintern;

	if (variables['estrato'] == "1") { texto_estrato = "BAJO" } else if (variables['estrato'] == "2") { texto_estrato = "MEDIO" } else { texto_estrato = "ALTO" }
	if (variables['edad'] == "1") { texto_edad = "18-34" } else if (variables['edad'] == "2") { texto_edad = "35-54" } else { texto_edad = "55-74" }
	

	var layer_duplicado_a = cloneLayer(layer);

	layer_duplicado_a.bindPopup("Fracción: <strong>" + variables['fraccion'] + "</strong>" + "<br/>"
		+ "Radio: <strong>" + variables['radio'] + "</strong>" + "<br/>"
		+ "Distrito: <strong>" + variables['distrito'] + "</strong>" + "<br/>"
		+ "Estrato: <strong>" + texto_estrato + "</strong>" + "<br/>"
		+ "Edad: <strong>" + texto_edad + "</strong>" + "<br/>"
		+ "Imagen de Intendente: <strong>" + variables['imgninten'] + "</strong>" + "<br/>"
		+ "Imagen de Gestión: <strong>" + variables['imgngest'] + "</strong>" + "<br/>"
		+ "Valoración de servicios: <strong>" + variables['Valorserv'] + "</strong>" + "<br/>"
		+ "Prioridad COVID: <strong>" + variables['covidsaec'] + "</strong>" + "<br/>"
		+ "Humor social: <strong>" + variables['humorsoc'] + "</strong>" + "<br/>"
		+ "Servicio de internet: <strong>" + variables['servintern'] + "</strong>");

	layer_duplicado_a.setIcon(icono_c[1]);
	layergroup_puntos['todos'].addLayer(layer_duplicado_a);
	
	var clasificaciones = ['estrato', 'edad'];

	var layer_duplicado_b = [];
	var layer_duplicado_c = [];
	i = 0;
	for (var clasificacionactual in clasificaciones) {
		layer_duplicado_b[i] = cloneLayer(layer);
		var valor_variable = variables[clasificaciones[i]];
		
		if (i == 0) {
			var usar_icono = icono_a[valor_variable];
		} else if (i == 1) {
			var usar_icono = icono_b[valor_variable];
		} else {
			var usar_icono = icono_c[valor_variable];
		}
		
		layer_duplicado_b[i].setIcon(usar_icono);

		layergroup_puntos[clasificaciones[i]][valor_variable].addLayer(layer_duplicado_b[i]);

		layer_duplicado_b[i].bindPopup("Fracción: <strong>" + variables['fraccion'] + "</strong>" + "<br/>"
			+ "Radio: <strong>" + variables['radio'] + "</strong>" + "<br/>"
			+ "Distrito: <strong>" + variables['distrito'] + "</strong>" + "<br/>"
			+ "Estrato: <strong>" + texto_estrato + "</strong>" + "<br/>"
			+ "Edad: <strong>" + texto_edad + "</strong>" + "<br/>"
			+ "Imagen de Intendente: <strong>" + variables['imgninten'] + "</strong>" + "<br/>"
			+ "Imagen de Gestión: <strong>" + variables['imgngest'] + "</strong>" + "<br/>"
			+ "Valoración de servicios: <strong>" + variables['Valorserv'] + "</strong>" + "<br/>"
			+ "Prioridad COVID: <strong>" + variables['covidsaec'] + "</strong>" + "<br/>"
			+ "Humor social: <strong>" + variables['humorsoc'] + "</strong>" + "<br/>"
			+ "Servicio de internet: <strong>" + variables['servintern'] + "</strong>");
		
		i++;
	};
}

/* BASE LAYERS */
var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	mapabase_osm = L.tileLayer(osmUrl, {maxZoom: 20, attribution: osmAttrib, opacity: 0.4});
var mapabase_argenmap = new L.TileLayer.WMTS('https://wms.ign.gob.ar/geoserver/capabaseargenmap/gwc/service/wmts?',
	   {
		   layer: 'capabaseargenmap',
		   style: "normal",
		   tilematrixSet: "EPSG:3857",
		   format: "image/png",
		   opacity: 0.3,
		   attribution: "<a href='https://github.com/'>GitHub</a>&copy; | <a href='https://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2'>ArgenMap</a> | Sociolítica"
		}
	);


/* OVERLAYS */

/*
var layergroup_puntos = {'todos': L.layerGroup(), 'imageninte1_todos': L.layerGroup(), 'imageninte2_todos': L.layerGroup(), 'imagengest1_todos': L.layerGroup(), 'imagengest2_todos': L.layerGroup(), 'consumomed1_todos': L.layerGroup(), 'consumomed2_todos': L.layerGroup(), 'satisfacci1_todos': L.layerGroup(), 'satisfacci2_todos': L.layerGroup(), 'visioncuar1_todos': L.layerGroup(), 'visioncuar2_todos': L.layerGroup()};

layergroup_puntos['imageninte1'] = {'sexo1': L.layerGroup(), 'sexo2': L.layerGroup(), 'estrato1': L.layerGroup(), 'estrato2': L.layerGroup(), 'estrato3': L.layerGroup(), 'edad1': L.layerGroup(), 'edad2': L.layerGroup(), 'edad3': L.layerGroup()};
layergroup_puntos['imageninte2'] = {'sexo1': L.layerGroup(), 'sexo2': L.layerGroup(), 'estrato1': L.layerGroup(), 'estrato2': L.layerGroup(), 'estrato3': L.layerGroup(), 'edad1': L.layerGroup(), 'edad2': L.layerGroup(), 'edad3': L.layerGroup()};
layergroup_puntos['imagengest1'] = {'sexo1': L.layerGroup(), 'sexo2': L.layerGroup(), 'estrato1': L.layerGroup(), 'estrato2': L.layerGroup(), 'estrato3': L.layerGroup(), 'edad1': L.layerGroup(), 'edad2': L.layerGroup(), 'edad3': L.layerGroup()};
layergroup_puntos['imagengest2'] = {'sexo1': L.layerGroup(), 'sexo2': L.layerGroup(), 'estrato1': L.layerGroup(), 'estrato2': L.layerGroup(), 'estrato3': L.layerGroup(), 'edad1': L.layerGroup(), 'edad2': L.layerGroup(), 'edad3': L.layerGroup()};
layergroup_puntos['consumomed1'] = {'sexo1': L.layerGroup(), 'sexo2': L.layerGroup(), 'estrato1': L.layerGroup(), 'estrato2': L.layerGroup(), 'estrato3': L.layerGroup(), 'edad1': L.layerGroup(), 'edad2': L.layerGroup(), 'edad3': L.layerGroup()};
layergroup_puntos['consumomed2'] = {'sexo1': L.layerGroup(), 'sexo2': L.layerGroup(), 'estrato1': L.layerGroup(), 'estrato2': L.layerGroup(), 'estrato3': L.layerGroup(), 'edad1': L.layerGroup(), 'edad2': L.layerGroup(), 'edad3': L.layerGroup()};
layergroup_puntos['satisfacci1'] = {'sexo1': L.layerGroup(), 'sexo2': L.layerGroup(), 'estrato1': L.layerGroup(), 'estrato2': L.layerGroup(), 'estrato3': L.layerGroup(), 'edad1': L.layerGroup(), 'edad2': L.layerGroup(), 'edad3': L.layerGroup()};
layergroup_puntos['satisfacci2'] = {'sexo1': L.layerGroup(), 'sexo2': L.layerGroup(), 'estrato1': L.layerGroup(), 'estrato2': L.layerGroup(), 'estrato3': L.layerGroup(), 'edad1': L.layerGroup(), 'edad2': L.layerGroup(), 'edad3': L.layerGroup()};
layergroup_puntos['visioncuar1'] = {'sexo1': L.layerGroup(), 'sexo2': L.layerGroup(), 'estrato1': L.layerGroup(), 'estrato2': L.layerGroup(), 'estrato3': L.layerGroup(), 'edad1': L.layerGroup(), 'edad2': L.layerGroup(), 'edad3': L.layerGroup()};
layergroup_puntos['visioncuar2'] = {'sexo1': L.layerGroup(), 'sexo2': L.layerGroup(), 'estrato1': L.layerGroup(), 'estrato2': L.layerGroup(), 'estrato3': L.layerGroup(), 'edad1': L.layerGroup(), 'edad2': L.layerGroup(), 'edad3': L.layerGroup()};
*/

var layergroup_puntos = {'todos': L.layerGroup(), 'ninguno': L.layerGroup()};

layergroup_puntos['estrato'] = {'1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_puntos['edad'] = {'1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};


var layergroup_distritos = {'todos': L.layerGroup()};

layergroup_distritos['imagintpos'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['imagintneg'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['gestposit'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['gestnegat'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['gestregul'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['servposit'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['servnegat'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['servregul'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['covisalud'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['coviecon'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['humorbuen'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['humormalo'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['humoregu'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['interbuena'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['intermala'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};
layergroup_distritos['interegu'] = {'todos': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup()};


/*layergroup_distritos['imageninte'] = {'positiva': L.layerGroup(), 'negativa': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup(), '4': L.layerGroup()};
layergroup_distritos['imagengest'] = {'positiva': L.layerGroup(), 'negativa': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup(), '4': L.layerGroup()};
layergroup_distritos['consumomed'] = {'positiva': L.layerGroup(), 'negativa': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup(), '4': L.layerGroup()};
layergroup_distritos['satisfacci'] = {'positiva': L.layerGroup(), 'negativa': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup(), '4': L.layerGroup()};
layergroup_distritos['visioncuar'] = {'positiva': L.layerGroup(), 'negativa': L.layerGroup(), '1': L.layerGroup(), '2': L.layerGroup(), '3': L.layerGroup(), '4': L.layerGroup()};*/



/* CREACIÓN DEL MAPA CON BASE LAYERS Y OVERLAYS */

var layergroup_radios = L.layerGroup();
var overlay_limitegc = L.geoJson(geojson_limitegc, { style: { color: false, fillColor: "white", fillOpacity: 0.5 } }),
	overlay_distritos = L.geoJson(geojson_distritos, { onEachFeature: function(feature, layer) { onEachFeatureDistrito(feature, layer) } }),
	overlay_radios = L.geoJson(geojson_radios, { onEachFeature: function(feature, layer) { onEachFeatureRadio(feature, layer) } }),
	overlay_puntos = L.geoJson(geojson_puntos, { onEachFeature: function(feature, layer) { onEachFeaturePunto(feature, layer) } });
	
	estiloDistritos();
	
/* DATA PARA EL LAYERS CONTROL */
var baseMaps = {
};

var groupedOverlays = {
	"Radios": {
		"Todos los radios": layergroup_radios
	},
	"<br/>DISTRITOS": {
		"Sin clasificación": layergroup_distritos['todos'],
		"Positiva": layergroup_distritos['imagintpos']['todos'],
		"Negativa": layergroup_distritos['imagintneg']['todos'],
		"Positiva ": layergroup_distritos['gestposit']['todos'],
		"Regular ": layergroup_distritos['gestregul']['todos'],
		"Negativa ": layergroup_distritos['gestnegat']['todos'],
		"Positiva  ": layergroup_distritos['servposit']['todos'],
		"Regular  ": layergroup_distritos['servregul']['todos'],
		"Negativa  ": layergroup_distritos['servnegat']['todos'],
		"Salud ": layergroup_distritos['covisalud']['todos'],
		"Economía ": layergroup_distritos['coviecon']['todos'],
		"Bueno ": layergroup_distritos['humorbuen']['todos'],
		"Regular    ": layergroup_distritos['humoregu']['todos'],
		"Malo ": layergroup_distritos['humormalo']['todos'],
		"Buena ": layergroup_distritos['interbuena']['todos'],
		"Regular      ": layergroup_distritos['interegu']['todos'],
		"Mala ": layergroup_distritos['intermala']['todos']
	},
	"<br/>PUNTOS MUESTRALES": {
		"Ninguno": layergroup_puntos['ninguno'],
		"Todos": layergroup_puntos['todos'],
		"Bajo": layergroup_puntos['estrato']['1'],
		"Medio": layergroup_puntos['estrato']['2'],
		"Alto": layergroup_puntos['estrato']['3'],
		"18-34": layergroup_puntos['edad']['1'],
		"35-54": layergroup_puntos['edad']['2'],
		"55-74": layergroup_puntos['edad']['3']
	}
};

var opciones_groupedlayers = {
	exclusiveGroups: [
		"<br/>DISTRITOS",
		"<br/>PUNTOS MUESTRALES"
	],
	groupCheckboxes: false
};

var map = L.map('map').setView([-32.9294, -68.8567], 14);	
var layerControl = L.control.groupedLayers(baseMaps, groupedOverlays, opciones_groupedlayers);	
map.createPane("radios").style.zIndex = 500;

function crearMapa() {
	map.addControl(layerControl);
	L.control.scale().addTo(map);
	
	/* MEDIDOR DISTANCIAS */
	L.control.polylineMeasure().addTo(map);
	
	/* LIMPIAR MAPA */
	map.eachLayer(function (layer) {
		map.removeLayer(layer);
	});
	map.addLayer(mapabase_argenmap);
	map.addLayer(layergroup_distritos['todos']);
	map.addLayer(layergroup_puntos['todos']);
	
	$('<span class="leaflet-control-layers-group-name">- Imagen de Intendente</span>').insertBefore($('div.leaflet-control-layers-group label').get(4));
	$('<span class="leaflet-control-layers-group-name">- Imagen de Gestión</span>').insertBefore($('div.leaflet-control-layers-group label').get(6));
	$('<span class="leaflet-control-layers-group-name">- Valoración de Servicios</span>').insertBefore($('div.leaflet-control-layers-group label').get(9));
	$('<span class="leaflet-control-layers-group-name">- Prioridad COVID</span>').insertBefore($('div.leaflet-control-layers-group label').get(12));
	$('<span class="leaflet-control-layers-group-name">- Humor social</span>').insertBefore($('div.leaflet-control-layers-group label').get(14));
	$('<span class="leaflet-control-layers-group-name">- Servicio de internet</span>').insertBefore($('div.leaflet-control-layers-group label').get(17));
	$('<span class="leaflet-control-layers-group-name">- Estrato</span>').insertBefore($('div.leaflet-control-layers-group label').get(23));
	$('<span class="leaflet-control-layers-group-name">- Edad</span>').insertBefore($('div.leaflet-control-layers-group label').get(26));
	
	$("body a").attr("target","_blank");
}
