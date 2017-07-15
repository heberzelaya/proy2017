idEditar = new ReactiveVar("0");

Template.cursos.onRendered(function(){
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".panelForm").css("opacity",0);
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
	imagen() {
   		 return Images.findOne(this.imagen);
	},
	listCursos: function(){
		return Cursos.find();
	}
});
Meteor.subscribe('listCursos');
Meteor.subscribe('imagen');