Template.baneo.helpers({
	listPendientes: function(){
		console.log(Meteor.users.find().fetch());
		return Meteor.users.find();
	}
	
	
});
Meteor.subscribe('listPendientes');