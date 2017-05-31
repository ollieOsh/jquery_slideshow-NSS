// $.getJSON('https://api.unsplash.com/photos/random/?client_id=dab8203d90cbc5bc3ea60ca01387d31c854d434d446dfa36607648ca7486b2b9', function(json) {
// 	console.log(json);
// });

$("active").fadeIn("slow");

function forward(event) {
	console.log(event);
	let active = $('.active');
	console.log(active);
	let i = parseInt($('.active')[0].id.slice(-1));
	let id = i + 1;
	if(i == 4) {
		id = 1;
	}
	console.log(id);
	$('#img--' + id).fadeIn(2000);
	$('#img--' + id).removeClass("hidden");
	active.fadeOut(2000, function(){
		active.addClass("hidden");
		active.removeClass("active");
		$('#img--' + id).addClass("active");
	})
}

function timeout(){
	setTimeout(function() {
		forward();
		timeout()
	}, 10000);
}

$(".img").mouseover(function() {
	console.log("Ay");
	$(".img").mousemove(function() {
		$(".arrow").removeClass("hidden");
	})
		// setTimeout("$('.arrow').addClass('hidden');", 1000)
})

$("#right").click(forward);

$("#left").click(function (event) {
	console.log(event);
	let active = $('.active');
	console.log(active);
	let i = parseInt($('.active')[0].id.slice(-1));
	let id = i - 1;
	if(i == 1) {
		id = 4;
	}
	console.log(id);
	$('#img--' + id).fadeIn(2000);
	$('#img--' + id).removeClass("hidden");
	active.fadeOut(2000, function(){
		active.addClass("hidden");
		active.removeClass("active");
		$('#img--' + id).addClass("active");
	})
})

setTimeout(timeout(), 10000);
