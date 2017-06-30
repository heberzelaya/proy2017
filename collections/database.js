CHAT = new  Mongo.Collection("chat");
CONNECT = new Mongo.Collection("connect");
var chatSchema = new SimpleSchema({
	idSource: {
		type:String
	},
	idDestination: {
		type:String
	},
	date: {
		type:Date
	},
	message: {
		type:String
	}
});
CHAT.attachSchema(chatSchema);
var connectSchema = new SimpleSchema({
	idUs: {
		type:String
	},
	connectionDate: {
		type:Date
	},
	disconnectionDate: {
		type:Date
	},
	stade: {
		type:Boolean
	}
});
CONNECT.attachSchema(connectSchema);

Cursos = new Mongo.Collection('cursos');
var cursoss=new SimpleSchema({
	nombre:{
		type:String
	},
	detalle:{
		type:String
	},
	inicio:{
		type:Date
	},
	fin:{
		type:Date
	},
	imagen:{
		type:String
	},
	userId:{
		type:String
	}
});
Cursos.attachSchema(cursoss);  