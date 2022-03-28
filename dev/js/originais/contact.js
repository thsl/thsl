// Jquery Validation using jqBootstrapValidation example is taken from jqBootstrapValidation docs 
$(function() {

 $("input,textarea").jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       // get values from FORM
       var name = $("input#name").val();  
       var email = $("input#email").val(); 
       var message = $("textarea#message").val();
        var firstName = name; // For Success/Failure Message
           // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
	   firstName = name.split(' ').slice(0, -1).join(' ');
         }        
	 $.ajax({
                url: "./contact.php",
            	type: "POST",
            	data: {name: name, email: email, message: message},
            	cache: false,
            	success: function() {  
            	// Success message
            	   $('#success').html("<div>");
            	   $('#success > div').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            		.append( "</button>");
            	  $('#success > div')
            		.append("<i class='fa fa-check'></i> Mensagem enviada!");
 		  $('#success div')
 			.append('</div>');
 						    
 		  //clear all fields
 		  $('#contactForm').trigger("reset");
 	      },
 	   error: function() {		
 		// Fail message
 		 $('#success').html("<div class='alert alert-danger'>");
            	$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	 .append( "</button>");
            	$('#success > .alert-danger').append("<strong>Desculpe "+firstName+", ocorreu um erro.</strong> Você poderia me enviar um e-mail direto? <a href='mailto:contato@thsl.com.br?Subject=Site thsl.com'>contato@thsl.com.br</a> ? Desculpe!");
 	        $('#success > .alert-danger').append('</div>');
 		//clear all fields
 		$('#contactForm').trigger("reset");
 	    },
           })
         },
         filter: function() {
                   return $(this).is(":visible");
         },
       });

      $("a[data-toggle=\"tab\"]").click(function(e) {
                    e.preventDefault();
                    $(this).tab("show");
        });
  });
 

/*When clicking on Full hide fail/success boxes */ 
$('#name').focus(function() {
     $('#success').html('');
  });