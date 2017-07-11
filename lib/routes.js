
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
FlowRouter.route("/newlogin",{
	action : function(params,queryParams) {
		BlazeLayout.render("paginaprincipal",{principalimguno:"info",content:"newlogin"});
	}
});

FlowRouter.route("/register",{
	action : function(params,queryParams) {
		BlazeLayout.render("paginaprincipal",{content:"register"});
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

FlowRouter.route("/subirmaterial/:id",{	
	action : function(params,queryParams) {
		BlazeLayout.render("paginaprincipal",{content:"subirmaterial"});
	}
});




