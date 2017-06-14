Template.loginform.onRendered(function(){
  self = this;
  this.datos =new ReactiveVar();
	$.getScript("//connect.facebook.net/en_US/sdk.js", function(){
       BUTTONFACEBOOK.set(true);

    	 window.fbAsyncInit = function() {
           FB.init({
               appId      : '113351262603077',
              cookie     : true,
               xfbml      : true,
              version    : 'v2.8'
          });

                 FB.AppEvents.logPageView(); 
                 // estamos verificando el etatus de facebook
                 //checkLoggin();
                /* FB.login(function(r){
                 	console.log("->")
                 	console.log(r);
                 	testAPI();
                 },{scope: 'email'});*/

                 };
                  function testAPI() {
                      console.log('Welcome!  Fetching your information.... ');
                      var datosfacebook = [];
                      FB.api('/me?fields=email', function(response) {
                         datosfacebook.push(response);
                        FB.api("/me",function(r){
                           datosfacebook.push(r);
                          FB.api("/me/picture",function(r){
                            datosfacebook.push(r);
                            self.datos.set(datosfacebook);
                            console.log(datosfacebook);

                          });
                        });
                      	
                       //console.log('Successful login for: ' + response.name);
                     //console.log(response);
               });
  
             };
             checkLoggin =()=>{
             	FB.getLoginStatus(function(response) {
             			if(response.status == "connected"){
                      		testAPI();
                      	}
                 	console.log(response);
                 //statusChangeCallback(response);

             
         });
        }
     });
});
Template.loginform.events({
	"click #regis" : function(e){
		e.preventDefault();
		myTemplates.set("registroformulario");
	},
	"click #cerrar" : function(e){
		e.preventDefault();
		$(".panelForm").css("opacity",0);
	},
	"submit form" : function(e){
		//SERVIDOR
		Meteor.loginWithPassword(e.target.email.value,e.target.password.value);
		$(".panelForm").css("opacity",0);
		return false;
	}
});
