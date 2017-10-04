jQuery(document).ready(function($) {
	$('#divContainer img').on({
		mouseover:function(){
			$(this).css({
				'cursor':'pointer',
				'border-color':'red'
			})
		},
		mouseout:function(){
			$(this).css({
				'cursor':'default',
				'border-color':'gray'
			})
		},
        click:function(){
        	var imageUrl = $(this).attr('src');

        	$('#mainImage').fadeOut(300, function(){
        		$(this).attr('src', imageUrl);
        	}).fadeIn(300);
        }
	})
});