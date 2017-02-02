$('.nav-aside>.category').on('mouseenter',function(){
    // $(this).addClass('active');
    // $(this).find('.child-panel').show();
    $(this).find('.child-panel').css('display','block');
});
$('.nav-aside>.category').on('mouseout',function(){
    // $(this).removeClass('active');
    // $(this).find('.child-panel').hide();
    $(this).find('.child-panel').css('display','none');
});	
	
