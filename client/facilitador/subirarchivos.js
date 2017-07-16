Template.subirmaterial.events({
	"submit form" : function(e){
		e.preventDefault();
		var idcu=FlowRouter.getParam('id');
		var upload = Videos.insert({
			file: event.target.imagen.files[0],
			streams: 'dynamic',
			chunkSize: 'dynamic',
		});
		var obj = {
			"titulo" : e.target.titulo.value,
			"descripcion" : e.target.descripcion.value,
			"file":upload.config.fileId,
			"cursoid":idcu
	       };
	    Meteor.call("addMaterial",obj);
		e.target.titulo.value="";
		e.target.descripcion.value="";

		/*var email= document.getElementById("email");
		var username= document.getElementById("password");
		if(email!=undefined && username!=undefined )
		{
			email=email.value;
			username=password.value;
		}
		Meteor.loginWithPassword(email,username);
		console.log(email);*/
		//console.log(user);
		return false;
	}		
})