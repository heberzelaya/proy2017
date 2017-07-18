Template.estu.onRendered(function(){
	 $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
});
Template.estu.helpers({
	foto : function(){
   // var res=Meteor.users.findOne({_id:Accounts.user()._id}).profile.imagen;
    //alert(res);
    
    return Images.findOne({_id:Meteor.users.findOne({_id:Accounts.user()._id}).profile.imagen});
  },
	username : function(){
		return Accounts.user().username;
	}
})

