Chateo = new Mongo.Collection("chats");
var mensajesSchema =new SimpleSchema({
    claseId : {
        type:String,
    },
    userId : {
        type:String,
    },
    mensaje : {
        type : String
    },
    cursId : {
        type : String
    },
    estado : {
    	type : Boolean
    }
});

Chateo.attachSchema(mensajesSchema);

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


Material = new Mongo.Collection('material');
var materiales=new SimpleSchema({
	titulo:{
		type:String
	},
	descripcion:{
		type:String
	},
	file:{
		type:String
	},
	cursoid:{
		type:String
	}
});
Material.attachSchema(materiales);  
Pregunta = new  Mongo.Collection("pregunta");
var preguntaSchema = new SimpleSchema({
	mensaje: {
		type:String
	},
	idcurso: {
		type:String
	},
	idusuario: {
		type:String
	},
	fecha:{
		type: Date
	},
	votos:{
		type:Number
	}
});

Pregunta.attachSchema(preguntaSchema);

///////////////////////////
Respuesta = new Mongo.Collection('respuestass');

var respuesta=new SimpleSchema({
    
    texto : {
        type:String,
    },
    userId : {
        type : String
    },
    pregId: {
        type : String
    },
    cursId : {
        type : String
    },
    fecha:{
        type:Date,
        autoValue: function(){
            return new Date();
        }
    } 
});
Respuesta.attachSchema(respuesta);