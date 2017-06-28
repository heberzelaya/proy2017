
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

