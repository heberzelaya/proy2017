Template.crearcurso.events({
	"submit form":function(e){
		e.preventDefault();

		var upload = Images.insert({
			file: e.target.imagen.files[0],
			streams: 'dynamic',
			chunkSize: 'dynamic',
		});
		var obj = {
			"nombre" : e.target.nombre.value,
			"detalle" : e.target.detalle.value,
			"inicio" : e.target.inicio.value,
			"fin" : e.target.fin.value,
			"imagen" : upload.config.fileId,
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