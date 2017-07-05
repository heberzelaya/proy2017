Template.baneo.helpers({
	listPendientes: function(){
		console.log(Meteor.users.find().fetch());
		return Meteor.users.find();
	}
	
	
});
Template.baneo.events({
	"click #car":function(e){
		id=this._id;
		Meteor.call("addUsuario",id);
	},
	"click #Deshabilitar":function(e){
 		
		//e.preventDefault();
		alert(this._id);
		//id=this._id;
		//Meteor.call("delUsuario",id);
	},
	"click #mar":function(e){

		//e.preventDefault();
		//alert(this._id);
		id=this._id;
		//r=Meteor.users.find({_id:this._id}).fetch();
		//if(r.profile.)
		//console.log(r);
		Meteor.call("addEstu",id);
	},
	"click #rolfacili":function(e){
		//e.preventDefault();
		alert(this._id);
		id=this._id;
		Meteor.call("addFaci",id);
	}
});
Meteor.subscribe('listPendientes');