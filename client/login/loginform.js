Template.loginform.events({
	"click #regis" : function(e){
		e.preventDefault();
		myTemplates.set("registroformulario");
	},
	"click #cerrar" : function(e){
		e.preventDefault();
		$(".panelForm").css("opacity",0);
	},
	"submit form" : function(e){
		//SERVIDOR
		Meteor.loginWithPassword(e.target.email.value,e.target.password.value);
		$(".panelForm").css("opacity",0);
		return false;
	}
});
