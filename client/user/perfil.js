Template.perfil.onRendered(function(){
	$(".panelForm").css("opacity",0);
});
Template.perfil.events({
	//alert("result.value");
	
	"click #modalactivar":function(e){
	  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('.modal-trigger').leanModal();
	  });
	}
});
