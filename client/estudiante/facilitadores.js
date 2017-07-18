Template.facilitadoress.helpers({
	imagen() {
    	return Images.findOne(this.profile.imagen);
  	},
	facilitadores: function(){
		
		return Meteor.users.find({'roles.facilitador':'facilitador'}).fetch();
	}
});
