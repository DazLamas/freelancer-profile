function sendForm(){
	var urlenvio = 'contact.php'
	var formData = $("#formcont").serializeArray()
	$.ajax({
	    url : urlenvio,
	    type: "POST",
	    data : formData,
	    success: function(data, textStatus, jqXHR)
	    {
	        //data - response from server
	        if (data == 'enviado') {
	        	$("#formcont").html('<p class="envio_ok">Thank you for your message!</p>')
	        }
	        if (data != 'enviado' ) {
	        	var result = jQuery.parseJSON(data);
	        	if (result.nombre == 'nombre') {
	        		$('.form_item_1').addClass('input_error')
	        	} else{
	        		$('.form_item_1').removeClass('input_error')
	        	}
	        	if (result.email == 'email') {
	        		$('.form_item_2').addClass('input_error')
	        	} else{
	        		$('.form_item_2').removeClass('input_error')
	        	}
	        	if (result.mensaje == 'mensaje') {
	        		$('.form_item_3').addClass('input_error')
	        	} else{
	        		$('.form_item_3').removeClass('input_error')
	        	}	
	        	if (result.mensaje == 'mensaje') {
	        		$('.form_item_4').addClass('input_error')
	        	} else{
	        		$('.form_item_4').removeClass('input_error')
	        	}	
	        	if (result.mensaje == 'mensaje') {
	        		$('.form_item_5').addClass('input_error')
	        	} else{
	        		$('.form_item_5').removeClass('input_error')
	        	}	
	        	if (result.mensaje == 'mensaje') {
	        		$('.form_item_6').addClass('input_error')
	        	} else{
	        		$('.form_item_6').removeClass('input_error')
	        	}	

	        };
	    },
	    error: function (jqXHR, textStatus, errorThrown)
	    {
	 
	    }
	});
	}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

//listeners:

$('.js_validation').focusout(function(event) {
	if($(this).val() == ''){
		$(this).addClass('input_error');
	} else {
		$(this).removeClass('input_error');
	}
});

$('.js_validation_mail').focusout(function(event) {
	if( isEmail($(this).val()) !== true || $(this).val() == '') {
		$(this).addClass('input_error');
		$('.error_mail').html('<p>Write a valid email</p>');
	} else {
		$(this).removeClass('input_error');
		$('.error_mail').html('');
	}
});

$('.js_send_btn').click(function(event) {
	if($('.input_error').length == 0) {
		sendForm();
	}
});



