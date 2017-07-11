import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	 Meteor.methods({
	 	"editperfil": function(id,msnObj){
			Meteor.users.update({_id:id},{$set:{'profile.Nombre':msnObj.nombre,
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
	  "banearUsuario": function(id){
		Meteor.users.update(id,{$set:{'profile.estado':true}});
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
