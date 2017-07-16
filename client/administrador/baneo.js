Template.baneo.helpers({

	// cargar todos los estados = false
	// 
	verboton:function(){

	},
	ver_state: function(){
		var ver= Meteor.users.findOne({_id:this._id,'profile.estado':false}).profile.Idioma;
		if(ver === "Facilitador"){return true;}else{return false;}		
	},
	permisos: function(){
		//state = true
		if(Roles.userIsInRole(this._id,'facilitador', 'facilitador')){return true;}
		else{if(Roles.userIsInRole(this._id,'estudiante', 'estudiante')){return true;}
			else{return false;}}
	},
	listPendientes: function(){
		return Meteor.users.find({ "$and": [{'profile.estado':false}]});
	},
	listActivos: function(){
		//return Meteor.users.find({ "$or": [{'roles.facilitador':'facilitador'},{ 'roles.estudiante':'estudiante' }]});
		return Meteor.users.find({ "$and": [{'profile.estado':true}]});
	},
	lis: function(){
		//return Meteor.users.find({ "$or": [{'roles.facilitador':'facilitador'},{ 'roles.estudiante':'estudiante' }]});
		return Meteor.users.find({_id:this._id}).fetch()
	}
});
Template.baneo.events({
	"click #deleterol":function(e){
		alert(this._id);
		id=this._id;
		Meteor.call("delrol",id);

	},
	"click #Habilitar":function(e){
		//e.preventDefault();
		//alert(this._id);

		id=this._id;
		Meteor.call("addUsuario",id);
	},
	"click #Deshabilitar":function(e){
		id=this._id;
		//alert(id);
		Meteor.call("delUsuario",id);
	},
	"click #rolestu":function(e){
		
		id=this._id;
		Meteor.call("addEstu",id);
		Meteor.call("addUsuario",id);
	},
	"click #rolfacili":function(e){
		//e.preventDefault();
		alert(this._id);
		id=this._id;
		Meteor.call("addFaci",id);
		Meteor.call("addUsuario",id);
	}
});


Meteor.subscribe('listPendientes');