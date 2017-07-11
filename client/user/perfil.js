Template.perfil.helpers({
	
	perfill : function(){
		return Meteor.users.find({_id:Accounts.user()._id}).fetch();
	},
	ema:function(e){
		return Accounts.user().emails[0].address;
	}
})
Template.perfil.events({
	//alert("result.value");
	"click #editar":function(){
		$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('.modal-trigger').leanModal();
	  });
	},
	"click #modalactivar":function(e){
	  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('.modal-trigger').leanModal();
	  });
	}
});

Meteor.subscribe('perfill');