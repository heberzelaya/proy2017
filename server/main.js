import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

	Meteor.publishComposite("chatas",function(id){
    return {
      find(){
   
        return Chateo.find({cursId:id});
      },
      children:[{
          find(preg){
          	
            return Meteor.users.find({_id:preg.userId});
          }          
        }]
    }});
	Meteor.publishComposite("listaMaterial",function(id){
		return {
			find(){
				return Material.find({cursoid:id});
			},
			children:[
				{
					find(mate){
						return Cursos.find({_id:mate.id});
					}
				}
			]
		}
	});
	Meteor.publishComposite("pregunta",function(id){
		return {
			find(){
					return Pregunta.find({idcurso:id});
				},
				children:[
					{
						find(mate){
							return Meteor.users.find({_id:mate.idusuario});
						}
					}
				]
			}
	});
	Meteor.publishComposite("listaRespuesta",function(id){
    return {
      find(){
      	
        return Respuesta.find({cursId:id});
      },
      children:[{
          find(preg){
          	
            return Meteor.users.find({_id:preg.userId});
          }          
        }]
    }});
	 Meteor.methods({
	 	"delrol":function(id){
			var ver=Meteor.users.findOne({_id:id}).profile.Idioma;
			if(ver === "Facilitador")
			{
				Roles.removeUsersFromRoles(id, ['facilitador'], 'facilitador');
			}
			else
			{
				Roles.removeUsersFromRoles(id, ['estudiante'], 'estudiante')

			}
			console.log(ver);

			// Roles.removeUsersFromRoles('cE4ZsaoYv95QFv3gK', ['estudiante'], 'estudiante');
			return true;
		},
	 	"respuesta":function(msnObj){
			Respuesta.insert(msnObj);
			return true;
		},
	 	"chatss": function(msnObj){
		
			Chateo.insert(msnObj);
			return true;
		},
		"preguntass": function(msnObj){
			Pregunta.insert(msnObj);
			return true;
		},
	 	"editcursos": function(id,msnObj){
	 		console.log(msnObj);
			Cursos.update({_id:id},{$set:{'nombre':msnObj.nombre,'detalle':msnObj.detalle}});
			return true;
	    },
	 	"editperfil": function(id,msnObj){
			Meteor.users.update({_id:id},
				{$set:{ 'profile.Nombre':msnObj.nombre,
						'profile.Apellido':msnObj.apellido,
						'profile.Idioma':msnObj.carrera,
						'emails.0.address':msnObj.email
					}});
			return true;
	    },
	 	"addMaterial": function(msnObj){
			Material.insert(msnObj);
			return true;
	    },
	  "checkAccount": function(username){
	  	 var t = Meteor.users.find({username:username}).fetch();
	     if(t.length ==1){
	     	return true;
	     }
	     return false;
	  },
	  "addUsuario": function(id){
		Meteor.users.update(id,{$set:{'profile.estado':true}});
		return true;
	  },

	  "delUsuario": function(id){
		Meteor.users.update(id,{$set:{'profile.estado':false}});
		return true;
	  },

	  "addEstu": function(id){
		Roles.addUsersToRoles(id,['estudiante'], 'estudiante');
		return true;
	  },
	  "addFaci": function(id){
	  	// Meteor.users.update({_id:id},{$set:{}})
	  	Roles.addUsersToRoles(id,['facilitador'], 'facilitador');
		return true;	
	  },
	  "addCourse": function(msnObj){
		Cursos.insert(msnObj);
		return true;
	  }
	});
	 Meteor.publish('videos', function () {
	    return Videos.find().cursor;
	  });
		 
	 Meteor.publish('imagen', function () {
	    return Images.find().cursor;
	  });
	 Meteor.publish('perfill', function() {
		  
		  return Meteor.users.find();
	});
	Meteor.publish('listPendientes', function() {
		  return Meteor.users.find();
	});
	Meteor.publish('listCursos', function() {  
		  return Cursos.find();
	});

});
