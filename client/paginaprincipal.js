BUTTONFACEBOOK =new ReactiveVar(false);
Template.paginaprincipal.onRendered(function(){
	
    $(".panelForm").css("opacity",0);
     $(document).ready(function(){
      $('.slider').slider();
    });
        
    
});
Template.paginaprincipal.helpers({
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