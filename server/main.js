import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
 Meteor.methods({
  "checkAccount": function(username){
  	 var t = Meteor.users.find({username:username}).fetch();
     if(t.length ==1){
     	return true;
     }
     return false;
  }
});
Meteor.publish('listPendientes', function() {
	  
	  return Meteor.users.find();
});
});
