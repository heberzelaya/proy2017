chat = new ReactiveVar();
resp = new ReactiveVar();
Template.tomarcurso.helpers({
	imagess() {
		var res=Cursos.findOne({_id:this.cursoid}).imagen;
		if (res==undefined) {
			console.log("esta vacio");
		}
   		 return Images.findOne(res);
	},
	videos(){
		return Videos.findOne(this.file);
	},
	readyMA: function(){
		return FlowRouter.subsReady("listaMateriales");
	},
	materi: function(){
		return Material.find();
	},
	clasescur: function(){
		return Cursos.findOne(this.id);
	}
});

Template.tomarcurso.events({
	"click #RESPONDER":function(){
		var idd = this._id;
		resp.set(idd);
		$('#'+this._id).slideToggle('slow', function() {});
		return false;
	},
	"click .Archivos":function(e){
		if($('.MATERIAL').css('display')=='block')
		{
			$('#'+this._id+'material').slideToggle('slow', function() {});
			$(".chat").css({"display": "none"});
		}
		else{
			$('#'+this._id+'material').slideToggle('slow', function() {});
			$(".chat").css({"display": "none"});
		}
		return false;

	},

	"click .CHATS":function(e){

		var idd = this._id;
		chat.set(idd);
		if($('.chat').css('display')=='none')
		{
			$('#'+this._id).slideToggle('slow', function() {});
			$(".MATERIAL").css({"display": "none"});
			console.log("entra");
		}
		else{
			$('#'+this._id).slideToggle('slow', function() {});
			$(".MATERIAL").css({"display": "none"});
		}
		return false;

	},

});
Template.tomarcurso.helpers({	

	readyRes:function(){
		return FlowRouter.subsReady("listaRespuestas");
	},
    listaRespuesta: function () {
		return	Respuesta.find({pregId:this._id}).fetch().reverse();
	},
	users :  function () {
		//console.log(Meteor.users.findOne({_id:this._id}));
		return	Meteor.users.findOne({_id:this.userId});
	},
})


Template.respuestasas.events({
	"submit form":function(e){
		var pre=resp.get();
		e.preventDefault();
		var obj = {
			texto  : e.target.email.value, 
			userId : Accounts.user()._id,
			pregId : pre,
			cursId : FlowRouter.getParam('id')
	
		};
		
		Meteor.call('respuesta', obj);
		 
		 $('#formularioderespuesta').trigger("reset");
		return false;
	
	}
});

Template.preguntas.events({
	
	"click #ANADIR": function(e){
		e.preventDefault();
		var nomb;var element=document.getElementById('pregunta');if(element !=null){nomb=element.value;}else{nomb=null;}

		var pre = {
			"mensaje" : nomb,
			"idcurso" : FlowRouter.getParam('id'),
			"idusuario" : Accounts.user()._id,
			"fecha": new Date(),
			"votos" : 0
		};
		
		Meteor.call("preguntass",pre);
	}
});

Template.tomarcurso.helpers({
	readyPre: function(){
		return FlowRouter.subsReady("preguntas");
	},
	pregu: function(){
		return Pregunta.find().fetch().reverse();;
	},
	preguser: function(){
		return Meteor.users.findOne({_id:this.idusuario});
	}
});

Template.chatss.helpers({
	im() {
		//Respuesta.findOne({userId:idUsuario}).texto
		var im=Meteor.users.findOne({_id:this.userId}).profile.imagen;
		return Images.findOne(im);
	},
	ver:function(){
		if (Meteor.userId()==this.userId) {
			return true;
		}
		return false;
	},
	readychat:function(){
		return FlowRouter.subsReady("chats");
	},
    listchat: function () {
 
		return Chateo.find({claseId:this._id}).fetch();
	},
	users :  function () {

		return	Meteor.users.findOne({_id:this.userId});
	}
});



Template.chatss.events({
	
	'submit form': function (e) {
		var pre=chat.get();

		
	    var obj = {
	    	claseId: pre,
		  	userId : Accounts.user()._id,
			mensaje : e.target.chattts.value,
			//mensaje : nomb, 
			cursId : FlowRouter.getParam('id'),
			estado : false
		};
		//console.log(obj);
		Meteor.call('chatss',obj);
		e.target.chattts.value="";
		return false;
	}
});

 Meteor.subscribe('videos');