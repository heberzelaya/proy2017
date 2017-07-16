Template.perfil.helpers({
	imagen() {
	    return Images.findOne(this.profile.imagen);
	 },

	perfill : function(){
		return Meteor.users.find({_id:Accounts.user()._id}).fetch();
	},
	ema:function(e){
		return Accounts.user().emails[0].address;
	}
})
Template.perfil.events({
	//alert("result.value");
	"submit form":function(e){
		var nombre= document.getElementById("nombre");var email= document.getElementById("email");
		var carrera= document.getElementById("carrera");var apellido= document.getElementById("apellido");
		if(nombre!=undefined && email!=undefined && carrera!=undefined && apellido!=undefined )
		{nombre=nombre.value;email=email.value;carrera=carrera.value;apellido=apellido.value;}
		var id=Accounts.user()._id;
		var obj = {
			"nombre" : nombre,
			"apellido" : apellido,
			"email" : email,
			"carrera" : carrera
	    };
		Meteor.call("editperfil",id,obj);
		$('#modal1').closeModal();
       
		return false;
	},
	"click #editar":function(){
		$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('.modal-trigger').leanModal();
	  });
	},
	"click #modalactivar":function(e){
	  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('.modal-trigger').leanModal();
	  });
	}
});

Meteor.subscribe('perfill');