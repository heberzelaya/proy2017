Template.cursos.onRendered(function(){
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".panelForm").css("opacity",0);
});
Template.insertarcursos.events({
	"submit form":function(e){
		e.preventDefault();
		var obj = {
			"nombre" : e.target.nombre.value,
			"detalle" : e.target.detalle.value,
			"inicio" : e.target.inicio.value,
			"fin" : e.target.fin.value,
			"imagen" : "null",
			"userId" : Accounts.user()._id
	    };
	  Meteor.call("addCourse",obj);
		console.log("hola");
	}
});
Template.cursos.helpers({
	listCurso: function(){
		return Cursos.find().fetch();
	}
});
Meteor.subscribe('listCurso');