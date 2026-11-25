

const sidebar = document.getElementById("sidebar");
const panelTitle = document.getElementById("panel-tittle");
const panelDescription = document.getElementById("panel-description");
const zones = document.querySelectorAll('[id^="circulo"]');

const mapData = {
		"circulo1": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula."
		},

		"circulo2": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo3": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo4": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo5": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo6": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo7": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo8": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo9": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo10": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo11": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo12": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo13": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo14": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo15": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo16": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo17": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo18": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo19": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo20": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo21": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo22": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo23": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo24": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo25": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo26": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo27": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo28": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo29": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo30": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo31": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo32": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo33": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo34": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo35": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo36": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo37": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo38": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo39": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo40": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo41": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo42": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo43": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo44": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo45": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo46": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo47": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo48": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo49": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo50": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo51": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo52": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo53": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo54": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo55": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo56": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo57": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo58": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo59": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo60": {
		title: "Taller",
		description: "Información sobre el taller."
		},

		"circulo61": {
		title: "Biblioteca",
		description: "Información sobre la biblioteca."
		},

		"circulo62": {
		title: "Aula 1",
		description: "Aquí se encuentra un aula"
		},

		"circulo63": {
		title: "Taller",
		description: "Información sobre el taller."
		},

};

zones.forEach(function(zone) {
	zone.addEventListener("click", function() {
		const zoneId = zone.id;
		const data = mapData[zoneId];

		if (!data) {
			return;
		}

		panelTitle.textContent = data.title;
		panelDescription.textContent = data.description;
		sidebar.classList.add("open");
	});

const closeButton = document.getElementById("close-panel");
if (closeButton) {
	closeButton.addEventListener("click", function() {
        sidebar.classList.remove("open");
       });
    }
});

const boton1 = document.getElementById("ir-planta0");

boton1.addEventListener("click", function(){
	document.getElementById("Mapa_1").classList.add("activo");
	document.getElementById("Mapa_0").classList.remove("activo");
});


const botonAbajo = document.getElementById("ir-planta-abajo");

botonAbajo.addEventListener("click", function(){
	document.getElementById("Mapa_0").classList.add("activo");
	document.getElementById("Mapa_1").classList.remove("activo");
});

const botonPrimera = document.getElementById("ir-planta1");

botonPrimera.addEventListener("click", function(){
	document.getElementById("Mapa_2").classList.add("activo");
	document.getElementById("Mapa_1").classList.remove("activo");
});


const botonSegunda = document.getElementById("ir-planta2");

botonSegunda.addEventListener("click", function(){
	document.getElementById("Mapa_3").classList.add("activo");
	document.getElementById("Mapa_2").classList.remove("activo");
});


const botonAbajo1 = document.getElementById("ir-planta-abajo1");

botonAbajo1.addEventListener("click", function(){
	document.getElementById("Mapa_1").classList.add("activo");
	document.getElementById("Mapa_2").classList.remove("activo");
});


const botonAbajo2 = document.getElementById("ir-planta-abajo2");

botonAbajo2.addEventListener("click", function(){
	document.getElementById("Mapa_2").classList.add("activo");
	document.getElementById("Mapa_3").classList.remove("activo");
});

