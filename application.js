$(document).ready(function(){
    $('#left-one').hide();
    $('#left-two').hide();
    $('#right').hide();
    $('#tile-1').hover(function() {
    	$('#left-one').show();
    	$('#static-Heading').hide();
        $('#alt-Basecamp').show();
	}, function(){
		$('#left-one').hide();
		$('#static-Heading').show();
        $('#alt-Basecamp').hide();
    });

     $('#tile-2').hover(function() {
        $('#left-two').show();
        $('#static-Heading').hide();
        $('#alt-Highrise').show();
    }, function(){
        $('#left-two').hide();
        $('#static-Heading').show();
        $('#alt-Highrise').hide();
    });

     $('#tile-3').hover(function() {
        $('#right').show();
        $('#static-Heading').hide();
        $('#alt-Campfire').show();
    }, function(){
        $('#right').hide();
        $('#static-Heading').show();
        $('#alt-Campfire').hide();
    });    
});

/* This is the old code I started with. It's too messy. Need to write in more css for h1 and span. 
$(document).ready(function(){
    $('#left-one').hide();
    $('#left-two').hide();
    $('#right').hide();
    $('#tile-1').hover(function() {
    	$('#left-one').show();
    	$('#main-container h1').replaceWith('<h1><span>Basecamp</span> is the project management tool you wish you had on your last project.</h1>');
    	$('#main-container h1').css('font-size','40px');
    	$('#main-container h1 span').css('text-decoration','underline');
    	$('#main-container h1 span').css('color','#369');
    	$('#main-container h3').replaceWith('<h2>Are you still managing projects with email? Are you still using Excel for your to-do lists? Its time to upgrade to Basecamp.  Manage projects and collaborate with your team and clients the modern way.</h2>');
	}, function(){
		$('#left-one').hide();
		$('#main-container h1').replaceWith('<h1>Making collaboration productive and enjoyable for people every day.</h1>');
    	$('#main-container h2').replaceWith('<h3>Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h3>');
});

});






#alt-Highrise h1 {
    font-size: 40px;
}

#alt-Highrise h1 span {
    text-decoration: underline;
    color: #369;
}

#alt-Campfire {
    display: none;
}

#alt-Campfire h1 {
    font-size: 40px;
}

#alt-Campfire h1 span {
    text-decoration: underline;
    color: #369;
} */

