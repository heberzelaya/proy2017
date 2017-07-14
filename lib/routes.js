
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


FlowRouter.route("/tomarcurso/:id",{
	subscriptions:function(params,queryParams){
			this.register("listaMateriales",Meteor.subscribe("listaMaterial",params.id));
			this.register("preguntas",Meteor.subscribe("pregunta",params.id));
			this.register("chats",Meteor.subscribe("chatas",params.id));
	},	
	action : function(params,queryParams) {
		BlazeLayout.render("paginaprincipal",{content:"tomarcurso"});

	}
});







