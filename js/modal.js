(function(){

  $(".modal-trigger").click(function(e){
    e.preventDefault();
    dataModal = $(this).attr("data-modal");
    $("#" + dataModal).css({"display":"block"});
    //paypal :
    dataPrice = $(this).attr("data-price");

    if (dataPrice === 'one'){
    	$('#paypalSelect').val('1 Lesson').trigger('change');
    }
    if (dataPrice === 'five'){
    	$('#paypalSelect').val('5 Lessons').trigger('change');
    }
    if (dataPrice === 'ten'){
    	$('#paypalSelect').val('10 Lessons').trigger('change');
    }
    if (dataPrice === 'twenty'){
    	$('#paypalSelect').val('20 Lessons').trigger('change');
    }

  });

  $(".close-modal, .modal-sandbox").click(function(){
    $(".modal").css({"display":"none"});
  });

})();