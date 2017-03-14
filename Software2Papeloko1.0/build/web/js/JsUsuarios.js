/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
	$("#VistaActualizar").hide();
	$("#VistaEliminar").hide();
	
	$("#AgregarUsuario").click(function(){
		
		$("#VistaActualizar").hide();
		$("#VistaEliminar").hide();
		$("#VistaAgregar").show();
		
	});
	
	$("#ModificarUsuario").click(function(){
		
		$("#VistaEliminar").hide();
		$("#VistaAgregar").hide();
		$("#VistaActualizar").show();
	});
	
	$("#EliminarUser").click(function(){
		$("#VistaActualizar").hide();
		$("#VistaAgregar").hide();
		$("#VistaEliminar").show();
	});
	
	$("#Registrar").click(function(){
		Datos();
	});
	
	
});

function Datos(){
	var Ced = $("#Cc").val();
	var Nom = $("#Nombre").val();
	var Apell = $("#Apellido").val();
	var Rol = $("#Rol").val();
	var Cred = $("#Credenciales").val();
	
	if( Ced != "" && Nom != "" && Apell != "" && Rol != "" && Cred != ""){
		console.log(Ced+" "+Nom+" "+Apell+" "+Rol+" "+Cred);
            $.post("LogicaUsuarios", {Operacion: "Agregar", Id:Ced,Nombre:Nom,Apellido:Apell,Rol:Rol,Credencial:Cred}, function (data) {
                alert(data);
            });
	}
	else
		alert("Existen Campos Vacios")
}


