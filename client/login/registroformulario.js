Template.registroformulario.onRendered(function(){
	$("select").material_select();
});
Template.registroformulario.events({
	"click #return" : function(){
		myTemplates.set("loginform");
	
	},
	"click #cerrar" : function(e){
		e.preventDefault();
		$(".panelForm").css("opacity",0);
	},
	"submit form" : function(e){
		var user = {
			"username" : e.target.username.value,
			"email" : e.target.email.value,
			"password" : e.target.password.value,
			"profile" : {
				"Nombre" : e.target.Nombre.value,
				"Apellido" : e.target.Apellido.value,
				"Idioma" : e.target.Idioma.value,
				"estado" :false
			   }
	       };
	      Accounts.createUser(user, function(e){
					if(e == undefined) {
								
			        $(".panelForm").css("opacity",0);
					Meteor.loginWithPassword(user.username,user.password);	
					}
				});
				return false;
			}
			
})