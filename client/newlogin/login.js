Template.newlogin.events({
	"click #REGISTRARSE" : function(e){

		var email= document.getElementById("email");
		var username= document.getElementById("password");
		if(email!=undefined && username!=undefined )
		{
			email=email.value;
			username=password.value;
		}
		Meteor.loginWithPassword(email,username);
		console.log(email);
		FlowRouter.go('/');
		return false;
	}		
})
Template.newlogin.events({
	"click #REGISTER" : function(e){
		var username= document.getElementById("username");
		var nombre= document.getElementById("nombre");
		var apellido= document.getElementById("apellido");
		var carrera= document.getElementById("carrera");
		var email= document.getElementById("email");
		var password= document.getElementById("password");
		if( carrera!=undefined && password!=undefined && 
			nombre!=undefined && apellido!=undefined && 
			email!=undefined && username!=undefined )
		{
			email=email.value;
			nombre=nombre.value;
			password=password.value;
			apellido=apellido.value;
			carrera=carrera.value;
			username=username.value;
		}
		var user = {
			"username" : username,
			"email" : email,
			"password" : password,
			"profile" : {
				"Nombre" : nombre,
				"Apellido" : apellido,
				"Idioma" : carrera,
				"estado" :false
			   }
	    };
	    Accounts.createUser(user, function(e){
				if(e == undefined) {								
					Meteor.loginWithPassword(user.username,user.password);	
				}
		});
		FlowRouter.go('/');
		return false;
	}		
})

