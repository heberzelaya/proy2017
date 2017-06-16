var reactiveCheck = new ReactiveVar();
reactiveCheck.set(false);

Template.plantillacliente.onRendered(function(){
	//alert("result.value");
	Meteor.call("checkConnection",Accounts.user()._id,function(err,result){
		
		reactiveCheck.set(result);
		
	});
});

Template.plantillacliente.helpers({
	
});
