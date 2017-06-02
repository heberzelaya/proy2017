//VARIABLE REACTIVA
myTemplates = new ReactiveVar();
myTemplates.set("loginform");
Template.paginaprincipalLogin.helpers({
	template : function(){
		return myTemplates.get();
	}
});