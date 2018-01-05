$(document).ready(function() {
	$(".catalog-slider").slick({
		slidesToShow: 1,
		dots: true
	})
	
	$(".btn-mobile-menu").click(function(event) {
		$("nav").slideToggle(500);
		$(this).toggleClass("active");
	})
	
	$(".btn-open-modal-js").click(function(event) {
		event.preventDefault();
		$(".overlay").fadeIn(500);
	})
	
	$(".overlay form").click(function(event) {
		event.stopPropagation();
	})
	
	$(".overlay").click(function(event) {
		if(event.target != "form") {
			event.stopPropagation();
			$(".overlay").fadeOut(500);
		}
	})
	
	$(".btn-mobile-dropdown").click(function(event) {
		$(this).toggleClass("active");
		$(this).next("ul").slideToggle(500);
	})
	
	$(".main-slider").slick({
		slidesToShow: 1,
		dots: true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
		 		adaptiveHeight: true
			  }
			}
		]
	})
	
	if(document.querySelector(".screen-reviews")) {
		var block_review_text_node = document.querySelectorAll(".block-review-text"),
			block_review_text = [block_review_text_node.length],
			review_info_node = document.querySelectorAll(".review-info"),
			review_info = [review_info_node.length],
			btn_open_review_node = document.querySelectorAll(".btn-open-review"),
			btn_open_review = [btn_open_review_node.length];
		
		$(".btn-open-review").slideUp(0);
		
		for(var i = 0; i < block_review_text.length; i++) {
			block_review_text[i] = block_review_text_node.item(i);
			review_info[i] = review_info_node.item(i);
			btn_open_review[i] = btn_open_review_node.item(i);
			
			if($(block_review_text[i]).height() < $(review_info[i]).height()) {
				$(btn_open_review[i]).slideDown(500);
			}
		}
		
		btn_open_review.forEach(function(btn_open, i, btn_open_review) {
			btn_open_review[i].addEventListener("click", function(event) {
				event.preventDefault();
				if($(this).text() == "Свернуть") {
					$(this).text("Читать полностью")
					$(block_review_text[i]).css("max-height", "450px");	
				} else {
					$(this).text("Свернуть")
					$(block_review_text[i]).css("max-height", "none");
				}
			})
		})

	}
	
	$('.slider-big-photos').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-nav-photos',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			}
		]
	});

	$('.slider-nav-photos').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-big-photos',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			}
		]
	})
	
})