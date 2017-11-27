/*Check off Specific Todos By Clicking*/
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

/*Click on X to delete li*/
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

/*SetUp Enter key*/
$("input[type='text']").keypress(function(event){
	if (event.which===13) {
		/*grabin text from input*/
		var todoText = $(this).val();
		$(this).val("");
		/*create new li and add it*/
		$("ul").append(" <li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});


/*fa-plus setup*/
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
