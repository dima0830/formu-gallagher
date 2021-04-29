$(document).ready(function() {

	$('.table').stacktable();

    $('.fecha input').datepicker({

       language: "es"

    });

    $(":file").filestyle();

   clone_row.init(); 

   clone_div_row.init(); 

   input_file.init(); 

});


clone_row = {
        init: function() {
            $(".inv_clone_btn").on("click", function() {
		        	var table = $(this).closest("table");
		            var clonedRow = table.find(".inv_row").clone();
		            clonedRow.removeAttr("class"); 
		            clonedRow.find(".inv_clone_row").html('<a href="#" class="inv_remove_btn btn"><i class="fa fa-user-times"></i></a>');
		            table.find(".last_row").before(clonedRow);
		            return false; 
		    });
		    $(".table").on("click",".inv_remove_btn", function() {
		            $(this).closest("tr").remove();
		            return false; 
		    });
	  }
}

clone_div_row = {
        init: function() {
            $(".add_clone_row").on("click", function() {
		        	var table = $(this).closest("div.div_row");
		            var clonedRow = table.find(".clone_row").clone();
		            clonedRow.removeAttr("class"); 
		            clonedRow.addClass("remove_row");
		            clonedRow.find(".clone_row_remove").html('<a href="#" class="addPasajeros pull-right remove_btn_div"><i class="fa fa-user-times"></i> Eliminar</a>');
		            $(this).before(clonedRow);
		            return false; 
		    });
		    $(".div_row").on("click",".remove_btn_div", function() {
		            $(this).closest("div.remove_row").remove();
		            return false; 
		    });
	  }
}
input_file = {
	 init: function(){
            $(document).on('change', '.btn-file :file', function() {

                 var this_data = $(this);

                 this_data.closest('div.file_box').find('.file_text').val(this_data.val());
			});
	 }
}

$(document).ready(function(){
    $('#myselection').on('change', function(){
    	var demovalue = $(this).val(); 
        $("div.myDiv").hide();
        $("#show"+demovalue).show();
    });


    //Clone the hidden element and shows it
$('.add-one').click(function(){
  $('.dynamic-element').first().clone().appendTo('.dynamic-stuff').show();
  attach_delete();
});


 //Clone the hidden element and shows it
$('.add-one2').click(function(){
  $('.dynamic-element').first().clone().appendTo('.dynamic-stuff').show();
  attach_delete();
});


//Attach functionality to delete buttons
function attach_delete(){
  $('.delete2').off();
  $('.delete2').click(function(){
    console.log("click");
    $(this).closest('.form-group').remove();
  });

 
}

 $('.checkD').click(function() {
    let campo = $(this).val(); 
    $('.'+campo).attr('disabled',! this.checked)
});

});