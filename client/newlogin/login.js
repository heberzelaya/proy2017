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
		return false;
	}
			
})