$(document).ready(function () {
	console.log("Documento listo!");


    //alerta en boton de envio y añadido a favorito
	$("#boton1").click(function () {
		alert("El correo fue enviado correctamente...");
	});

    $("#boton2").click(function () {
		alert("Añadido a Favorito con Exito");
	});


	// seccion platos toggle

	$("#cartaplatosechos1, #cartaplatosechos2, #cartaplatosechos3").click(function () {
		$("#disable-texto1").toggle();
		$("#disable-texto2").toggle();
		$("#disable-texto3").toggle();
	});

	//Cambio de color orange h3 ingredientes

	$("#h3ID1").dblclick(function () {
		$("#h3ID1").css("color", "rgb(255, 103, 1)");	
	});
	$("#h3ID1").click(function () {
		$("#h3ID1").css("color", "black");
	});
	$("#h3ID2").dblclick(function () {
		$("#h3ID2").css("color", "rgb(255, 103, 1)");
	});
	$("#h3ID2").click(function () {
		$("#h3ID2").css("color", "black");
	});

	//tooltip Trigger
	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});


    //boton subscriptor

	$("#botonEmpezar").click(function () {
		prompt("Dejanos tu correo para Novedades y noticias.");
	});

});

