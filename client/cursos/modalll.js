
Template.modalll.helpers({
	title(){
		return idEditar.get().nombre
	},
	text(){
		return idEditar.get().detalle
	},
	id(){
		return idEditar.get()._id
	}
});
Template.modalll.events({
	"click #modaleditar":function (e) {
		var nomb;var deta;
		var element = document.getElementById('titulo');
		var element1 = document.getElementById('descripcion');
		if (element != null && element1 != null) {
		    nomb = element.value;deta = element1.value;
		}
		else {
		    nomb = null;deta = null;
		}	
		var curs={
			"nombre":nomb,
			"detalle":deta
		}
		//console.log(curs);
		//console.log(idEditar.get()._id);
		Meteor.call("editcursos",idEditar.get()._id,curs,function(){});
		$('#modal1').closeModal();
		//$("#myModal .close").click()
	}
});