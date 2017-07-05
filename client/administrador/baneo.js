Template.baneo.helpers({
	listPendientes: function(){
		console.log(Meteor.users.find().fetch());
		return Meteor.users.find();
	}
	
	
});
Template.baneo.events({
	"click #habilitar":function(e){
		alert(this._id);
		id=this._id;
		Meteor.call("banearUsuario",id);
	},
	"click #estudiante":function(e){
 		
		//e.preventDefault();
		alert(this._id);
		id=this._id;
		Meteor.call("addEstu",id);
	},
	"click #facilitador":function(e){

		//e.preventDefault();
		alert(this._id);
		id=this._id;
		//r=Meteor.users.find({_id:this._id}).fetch();
		//if(r.profile.)
		//console.log(r);
		Meteor.call("addFaci",id);
	},
	"click #rolfacili":function(e){
		//e.preventDefault();
		alert(this._id);
		//id=this._id;
		//Meteor.call("addFaci",id);
	}
});
Meteor.subscribe('listPendientes');