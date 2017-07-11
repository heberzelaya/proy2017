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
Template.register.events({
	"click #REGISTER" : function(e){
		var user,nom,ape,carre,ema,pas;
		var username= document.getElementById("username");var email= document.getElementById("email");
		var password= document.getElementById("password");var nombre= document.getElementById("nombre");
		var apellido= document.getElementById("apellido");var carrera= document.getElementById("carrera");
		if( carrera!=undefined && password!=undefined &&nombre!=undefined && apellido!=undefined && email!=undefined && username!=undefined )
		{ema=email.value;nom=nombre.value;pas=password.value;ape=apellido.value;carre=carrera.value;user=username.value;
		}else{ema=null;nom=null;pas=null;ape=null;carre=null;user=null;}
		var user = {
			"username" : user,
			"email" : ema,
			"password" : pas,
			"profile" : {
				"Nombre" : nom,
				"Apellido" : ape,
				"Idioma" : carre,
				"estado" :false
			   }
	    };
	    //console.log(user);
	    Accounts.createUser(user, function(e){
				if(e == undefined) {								
					Meteor.loginWithPassword(user.username,user.password);	
				}
		});
		FlowRouter.go('/');

		return false;
	}		
})

