
FlowRouter.route("/",{
	action : function(params,queryParams) {
		BlazeLayout.render("paginaprincipal",{principalimguno:"principalimguno"});
	}
});
FlowRouter.route("/soporte",{
	action : function(params,queryParams) {
		BlazeLayout.render("paginaprincipal",{principalimguno:"info",content:"soporte"});
	}
});

FlowRouter.route("/cursos",{
	action : function(params,queryParams) {
		BlazeLayout.render("paginaprincipal",{content:"cursos"});
	}
});
FlowRouter.route("/baneo",{	
	action : function(params,queryParams) {
		BlazeLayout.render("paginaprincipal",{content:"baneo"});
	}
});
FlowRouter.route("/perfil",{	
	action : function(params,queryParams) {
		BlazeLayout.render("paginaprincipal",{content:"perfil"});
	}
});


