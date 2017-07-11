idEditar = new ReactiveVar("0");

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
		e.target.nombre.value="";
		e.target.detalle.value="";
		e.target.inicio.value="";
		e.target.fin.value=""; 
		console.log("hola");
	}
});


Template.cursos.events({
	"click #editCurso":function(e){
		//id=this._id;
		idEditar.set(this);
		$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('.modal-trigger').leanModal();
	  });
		//console.log(idEditar.get());
		//alert(id);
		return false;
	}
});

Template.cursos.helpers({
	listCursos: function(){
		return Cursos.find();
	}
});
Meteor.subscribe('listCursos');