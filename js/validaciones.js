var load = function(){
	$("#numero").keydown(validarNumero);
};

$(document).ready(load);
    var btnAgregar = $("#btn-ingresar")
  	btnAgregar.prop( "disabled", true );//Deshabilita el boton

var validarNumero = function(event){
    var ascii = event.keyCode; //Obtener el valor Unicode de la tecla pulsada

	if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
		btnAgregar.prop( "disabled", false );//habilita el boton
		return true;
	} else {
		return false;
	} //Permite solo el ingreso de números.
};



