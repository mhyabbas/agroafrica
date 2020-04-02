$(function() {
	$(".toggle a").on("click", function(e) {
		e.preventDefault();
		if ($(".item").hasClass("active")) {
			$(".item").removeClass("active");
			$(".toggle-open").show();
			$(".toggle-close").hide();
		} else {
			$(".item").addClass("active");
			$(".toggle-close").show();
			$(".toggle-open").hide();
		}
	});

	/* Mobile home page background */
	var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	if (ismobile){
		$('body.home-page').css('background-attachment','scroll');
	}

});