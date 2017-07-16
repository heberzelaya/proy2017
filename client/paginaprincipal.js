BUTTONFACEBOOK =new ReactiveVar(false);
Template.paginaprincipal.onRendered(function(){
	
    $(".panelForm").css("opacity",0);
     $(document).ready(function(){
      $('.slider').slider();
    });
        
    
});



Template.paginaprincipal.helpers({
	ver(){
		var verr=Meteor.users.findOne({_id:Accounts.user()._id}).profile.estado;
		if(verr===false){
			return false;
		}
	},
	facebook: function(){
		 return BUTTONFACEBOOK.get();
	},
	username : function(){
		return Accounts.user().username;
	}
});

Template.paginaprincipal.events({
	"click #login" : function(){
		$(".panelForm").css("opacity",1);
	},
	"click #logout" : function(){
		Meteor.logout();
	}
})