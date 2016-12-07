$(document).ready(function () {

	var stercl = 0;

	var images = new Array();
	function preload() {
		for (i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
		}
	};
	preload(
		"assets/img/ava/imggif.gif",
		"assets/img/kady/imggif.gif",
		"assets/img/riley/imggif.gif"
	);

	 $('.link-about').on('click', function () {
	     $('.about-clicked').show()
	 });

	 $(document).mouseup(function (e) {
	     var popup1 = $(".about-clicked");
	     if (!$('.link-about').is(e.target) && !popup1.is(e.target) && popup1.has(e.target).length == 0) {
	         popup1.hide();
	     }
	 });

	 $('.link-contact').on('click', function () {
	     $('.contact-clicked').show()
	 });

	 $(document).mouseup(function (e) {
	     var popup2 = $(".contact-clicked");
	     if (!$('.link-contact').is(e.target) && !popup2.is(e.target) && popup2.has(e.target).length == 0) {
	         popup2.hide();
	     }
	 });

	$(".stereograph").click(function() {
		if (stercl == 0) {
			$(".img1").css("background-image","url('assets/img/ava/image1.jpg')");
			$(".img2").css("background-image","url('assets/img/ava/image2.jpg')");
			$(".img3").css("background-image","url('assets/img/ava/image3.jpg')");
			$(".img4").css("background-image","url('assets/img/ava/image4.jpg')");
			$(".gif-img").css("background-image","url('assets/img/ava/imggif.gif')");
			stercl = 1;
		}
		else if (stercl == 1) {
			$(".img1").css("background-image","url('assets/img/kady/image1.jpg')");
			$(".img2").css("background-image","url('assets/img/kady/image2.jpg')");
			$(".img3").css("background-image","url('assets/img/kady/image3.jpg')");
			$(".img4").css("background-image","url('assets/img/kady/image4.jpg')");
			$(".gif-img").css("background-image","url('assets/img/kady/imggif.gif')");
			stercl = 2;
		}
		else if (stercl == 2) {
			$(".img1").css("background-image","url('assets/img/riley/image1.jpg')");
			$(".img2").css("background-image","url('assets/img/riley/image2.jpg')");
			$(".img3").css("background-image","url('assets/img/riley/image3.jpg')");
			$(".img4").css("background-image","url('assets/img/riley/image4.jpg')");
			$(".gif-img").css("background-image","url('assets/img/riley/imggif.gif')");
			stercl = 0;
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$(".img1").css("visibility","visible");
		}
		if ($(this).scrollTop() < 1) {
			$(".img1").css("visibility","hidden");
		}

		if ($(this).scrollTop() > 50) {
		    $(".img2.stripe.str1").css("visibility", "visible");
		    $(".img2.stripe.str6").css("visibility", "visible");
		    $(".img2.stripe.str11").css("visibility", "visible");
		    $(".img2.stripe.str16").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 100) {
		    $(".img2.stripe.str2").css("visibility", "visible");
		    $(".img2.stripe.str7").css("visibility", "visible");
		    $(".img2.stripe.str12").css("visibility", "visible");
		    $(".img2.stripe.str17").css("visibility", "visible");

		    $(".img2.stripe.str21").css("visibility", "visible");
		    $(".img2.stripe.str26").css("visibility", "visible");
		    $(".img2.stripe.str31").css("visibility", "visible");
		    $(".img2.stripe.str36").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 150) {
		    $(".img2.stripe.str3").css("visibility", "visible");
		    $(".img2.stripe.str8").css("visibility", "visible");
		    $(".img2.stripe.str13").css("visibility", "visible");
		    $(".img2.stripe.str18").css("visibility", "visible");

		    $(".img2.stripe.str22").css("visibility", "visible");
		    $(".img2.stripe.str27").css("visibility", "visible");
		    $(".img2.stripe.str32").css("visibility", "visible");
		    $(".img2.stripe.str37").css("visibility", "visible");

		    $(".img2.stripe.str41").css("visibility", "visible");
		    $(".img2.stripe.str46").css("visibility", "visible");
		    $(".img2.stripe.str51").css("visibility", "visible");
		    $(".img2.stripe.str56").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 200) {
		   	$(".img2.stripe.str4").css("visibility", "visible");
		    $(".img2.stripe.str9").css("visibility", "visible");
		    $(".img2.stripe.str14").css("visibility", "visible");
		    $(".img2.stripe.str19").css("visibility", "visible");

		    $(".img2.stripe.str23").css("visibility", "visible");
		    $(".img2.stripe.str28").css("visibility", "visible");
		    $(".img2.stripe.str33").css("visibility", "visible");
		    $(".img2.stripe.str38").css("visibility", "visible");
		    $(".img2.stripe.str39").css("visibility", "visible");

		    $(".img2.stripe.str42").css("visibility", "visible");
		    $(".img2.stripe.str47").css("visibility", "visible");
		    $(".img2.stripe.str52").css("visibility", "visible");
		    $(".img2.stripe.str57").css("visibility", "visible");

		    $(".img2.stripe.str61").css("visibility", "visible");
		    $(".img2.stripe.str66").css("visibility", "visible");
		    $(".img2.stripe.str71").css("visibility", "visible");
		    $(".img2.stripe.str76").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 250) {
			$(".img2.stripe.str5").css("visibility", "visible");
		    $(".img2.stripe.str10").css("visibility", "visible");
		    $(".img2.stripe.str15").css("visibility", "visible");
		    $(".img2.stripe.str20").css("visibility", "visible");

		    $(".img2.stripe.str24").css("visibility", "visible");
		    $(".img2.stripe.str29").css("visibility", "visible");
		    $(".img2.stripe.str34").css("visibility", "visible");
		    $(".img2.stripe.str39").css("visibility", "visible");

		    $(".img2.stripe.str43").css("visibility", "visible");
		    $(".img2.stripe.str48").css("visibility", "visible");
		    $(".img2.stripe.str53").css("visibility", "visible");
		    $(".img2.stripe.str58").css("visibility", "visible");

		    $(".img2.stripe.str62").css("visibility", "visible");
		    $(".img2.stripe.str67").css("visibility", "visible");
		    $(".img2.stripe.str72").css("visibility", "visible");
		    $(".img2.stripe.str77").css("visibility", "visible");

		    $(".img2.stripe.str81").css("visibility", "visible");
		    $(".img2.stripe.str86").css("visibility", "visible");
		    $(".img2.stripe.str91").css("visibility", "visible");
		    $(".img2.stripe.str96").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 300) {
			$(".img2.stripe.str25").css("visibility", "visible");
		    $(".img2.stripe.str30").css("visibility", "visible");
		    $(".img2.stripe.str35").css("visibility", "visible");
		    $(".img2.stripe.str40").css("visibility", "visible");

		    $(".img2.stripe.str44").css("visibility", "visible");
		    $(".img2.stripe.str49").css("visibility", "visible");
		    $(".img2.stripe.str54").css("visibility", "visible");
		    $(".img2.stripe.str59").css("visibility", "visible");

		    $(".img2.stripe.str63").css("visibility", "visible");
		    $(".img2.stripe.str68").css("visibility", "visible");
		    $(".img2.stripe.str73").css("visibility", "visible");
		    $(".img2.stripe.str78").css("visibility", "visible");

		    $(".img2.stripe.str82").css("visibility", "visible");
		    $(".img2.stripe.str87").css("visibility", "visible");
		    $(".img2.stripe.str92").css("visibility", "visible");
		    $(".img2.stripe.str97").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 350) {
			$(".img2.stripe.str45").css("visibility", "visible");
		    $(".img2.stripe.str50").css("visibility", "visible");
		    $(".img2.stripe.str55").css("visibility", "visible");
		    $(".img2.stripe.str60").css("visibility", "visible");

		    $(".img2.stripe.str64").css("visibility", "visible");
		    $(".img2.stripe.str69").css("visibility", "visible");
		    $(".img2.stripe.str74").css("visibility", "visible");
		    $(".img2.stripe.str79").css("visibility", "visible");

		    $(".img2.stripe.str83").css("visibility", "visible");
		    $(".img2.stripe.str88").css("visibility", "visible");
		    $(".img2.stripe.str93").css("visibility", "visible");
		    $(".img2.stripe.str98").css("visibility", "visible");

			$(".img3.stripe.str1").css("visibility", "visible");
		    $(".img3.stripe.str6").css("visibility", "visible");
		    $(".img3.stripe.str11").css("visibility", "visible");
		    $(".img3.stripe.str16").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 400) {
			$(".img2.stripe.str65").css("visibility", "visible");
		    $(".img2.stripe.str70").css("visibility", "visible");
		    $(".img2.stripe.str75").css("visibility", "visible");
		    $(".img2.stripe.str80").css("visibility", "visible");

			$(".img2.stripe.str84").css("visibility", "visible");
		    $(".img2.stripe.str89").css("visibility", "visible");
		    $(".img2.stripe.str94").css("visibility", "visible");
		    $(".img2.stripe.str99").css("visibility", "visible");

			$(".img3.stripe.str2").css("visibility", "visible");
		    $(".img3.stripe.str7").css("visibility", "visible");
		    $(".img3.stripe.str12").css("visibility", "visible");
		    $(".img3.stripe.str17").css("visibility", "visible");

		    $(".img3.stripe.str21").css("visibility", "visible");
		    $(".img3.stripe.str26").css("visibility", "visible");
		    $(".img3.stripe.str31").css("visibility", "visible");
		    $(".img3.stripe.str36").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 450) {
			$(".img2.stripe.str85").css("visibility", "visible");
		    $(".img2.stripe.str90").css("visibility", "visible");
		    $(".img2.stripe.str95").css("visibility", "visible");
		    $(".img2.stripe.str100").css("visibility", "visible");

			$(".img3.stripe.str3").css("visibility", "visible");
		    $(".img3.stripe.str8").css("visibility", "visible");
		    $(".img3.stripe.str13").css("visibility", "visible");
		    $(".img3.stripe.str18").css("visibility", "visible");

		    $(".img3.stripe.str22").css("visibility", "visible");
		    $(".img3.stripe.str27").css("visibility", "visible");
		    $(".img3.stripe.str32").css("visibility", "visible");
		    $(".img3.stripe.str37").css("visibility", "visible");

		    $(".img3.stripe.str41").css("visibility", "visible");
		    $(".img3.stripe.str46").css("visibility", "visible");
		    $(".img3.stripe.str51").css("visibility", "visible");
		    $(".img3.stripe.str56").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 500) {
		   	$(".img3.stripe.str4").css("visibility", "visible");
		    $(".img3.stripe.str9").css("visibility", "visible");
		    $(".img3.stripe.str14").css("visibility", "visible");
		    $(".img3.stripe.str19").css("visibility", "visible");

		    $(".img3.stripe.str23").css("visibility", "visible");
		    $(".img3.stripe.str28").css("visibility", "visible");
		    $(".img3.stripe.str33").css("visibility", "visible");
		    $(".img3.stripe.str38").css("visibility", "visible");

		    $(".img3.stripe.str42").css("visibility", "visible");
		    $(".img3.stripe.str47").css("visibility", "visible");
		    $(".img3.stripe.str52").css("visibility", "visible");
		    $(".img3.stripe.str57").css("visibility", "visible");

		    $(".img3.stripe.str61").css("visibility", "visible");
		    $(".img3.stripe.str66").css("visibility", "visible");
		    $(".img3.stripe.str71").css("visibility", "visible");
		    $(".img3.stripe.str76").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 550) {
			$(".img3.stripe.str5").css("visibility", "visible");
		    $(".img3.stripe.str10").css("visibility", "visible");
		    $(".img3.stripe.str15").css("visibility", "visible");
		    $(".img3.stripe.str20").css("visibility", "visible");

		    $(".img3.stripe.str24").css("visibility", "visible");
		    $(".img3.stripe.str29").css("visibility", "visible");
		    $(".img3.stripe.str34").css("visibility", "visible");
		    $(".img3.stripe.str39").css("visibility", "visible");

		    $(".img3.stripe.str43").css("visibility", "visible");
		    $(".img3.stripe.str48").css("visibility", "visible");
		    $(".img3.stripe.str53").css("visibility", "visible");
		    $(".img3.stripe.str58").css("visibility", "visible");

		    $(".img3.stripe.str62").css("visibility", "visible");
		    $(".img3.stripe.str67").css("visibility", "visible");
		    $(".img3.stripe.str72").css("visibility", "visible");
		    $(".img3.stripe.str77").css("visibility", "visible");

		    $(".img3.stripe.str81").css("visibility", "visible");
		    $(".img3.stripe.str86").css("visibility", "visible");
		    $(".img3.stripe.str91").css("visibility", "visible");
		    $(".img3.stripe.str96").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 600) {
			$(".img3.stripe.str25").css("visibility", "visible");
		    $(".img3.stripe.str30").css("visibility", "visible");
		    $(".img3.stripe.str35").css("visibility", "visible");
		    $(".img3.stripe.str40").css("visibility", "visible");

		    $(".img3.stripe.str44").css("visibility", "visible");
		    $(".img3.stripe.str49").css("visibility", "visible");
		    $(".img3.stripe.str54").css("visibility", "visible");
		    $(".img3.stripe.str59").css("visibility", "visible");

		    $(".img3.stripe.str63").css("visibility", "visible");
		    $(".img3.stripe.str68").css("visibility", "visible");
		    $(".img3.stripe.str73").css("visibility", "visible");
		    $(".img3.stripe.str78").css("visibility", "visible");

		    $(".img3.stripe.str82").css("visibility", "visible");
		    $(".img3.stripe.str87").css("visibility", "visible");
		    $(".img3.stripe.str92").css("visibility", "visible");
		    $(".img3.stripe.str97").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 650) {
			$(".img3.stripe.str45").css("visibility", "visible");
		    $(".img3.stripe.str50").css("visibility", "visible");
		    $(".img3.stripe.str55").css("visibility", "visible");
		    $(".img3.stripe.str60").css("visibility", "visible");

		    $(".img3.stripe.str64").css("visibility", "visible");
		    $(".img3.stripe.str69").css("visibility", "visible");
		    $(".img3.stripe.str74").css("visibility", "visible");
		    $(".img3.stripe.str79").css("visibility", "visible");

		    $(".img3.stripe.str83").css("visibility", "visible");
		    $(".img3.stripe.str88").css("visibility", "visible");
		    $(".img3.stripe.str93").css("visibility", "visible");
		    $(".img3.stripe.str98").css("visibility", "visible");

			$(".img4.stripe.str1").css("visibility", "visible");
		    $(".img4.stripe.str6").css("visibility", "visible");
		    $(".img4.stripe.str11").css("visibility", "visible");
		    $(".img4.stripe.str16").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 700) {
			$(".img3.stripe.str65").css("visibility", "visible");
		    $(".img3.stripe.str70").css("visibility", "visible");
		    $(".img3.stripe.str75").css("visibility", "visible");
		    $(".img3.stripe.str80").css("visibility", "visible");

			$(".img3.stripe.str84").css("visibility", "visible");
		    $(".img3.stripe.str89").css("visibility", "visible");
		    $(".img3.stripe.str94").css("visibility", "visible");
		    $(".img3.stripe.str99").css("visibility", "visible");

			$(".img4.stripe.str2").css("visibility", "visible");
		    $(".img4.stripe.str7").css("visibility", "visible");
		    $(".img4.stripe.str12").css("visibility", "visible");
		    $(".img4.stripe.str17").css("visibility", "visible");

		    $(".img4.stripe.str21").css("visibility", "visible");
		    $(".img4.stripe.str26").css("visibility", "visible");
		    $(".img4.stripe.str31").css("visibility", "visible");
		    $(".img4.stripe.str36").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 750) {
			$(".img3.stripe.str85").css("visibility", "visible");
		    $(".img3.stripe.str90").css("visibility", "visible");
		    $(".img3.stripe.str95").css("visibility", "visible");
		    $(".img3.stripe.str100").css("visibility", "visible");

			$(".img4.stripe.str3").css("visibility", "visible");
		    $(".img4.stripe.str8").css("visibility", "visible");
		    $(".img4.stripe.str13").css("visibility", "visible");
		    $(".img4.stripe.str18").css("visibility", "visible");

		    $(".img4.stripe.str22").css("visibility", "visible");
		    $(".img4.stripe.str27").css("visibility", "visible");
		    $(".img4.stripe.str32").css("visibility", "visible");
		    $(".img4.stripe.str37").css("visibility", "visible");

		    $(".img4.stripe.str41").css("visibility", "visible");
		    $(".img4.stripe.str46").css("visibility", "visible");
		    $(".img4.stripe.str51").css("visibility", "visible");
		    $(".img4.stripe.str56").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 800) {
		   	$(".img4.stripe.str4").css("visibility", "visible");
		    $(".img4.stripe.str9").css("visibility", "visible");
		    $(".img4.stripe.str14").css("visibility", "visible");
		    $(".img4.stripe.str19").css("visibility", "visible");

		    $(".img4.stripe.str23").css("visibility", "visible");
		    $(".img4.stripe.str28").css("visibility", "visible");
		    $(".img4.stripe.str33").css("visibility", "visible");
		    $(".img4.stripe.str38").css("visibility", "visible");

		    $(".img4.stripe.str42").css("visibility", "visible");
		    $(".img4.stripe.str47").css("visibility", "visible");
		    $(".img4.stripe.str52").css("visibility", "visible");
		    $(".img4.stripe.str57").css("visibility", "visible");

		    $(".img4.stripe.str61").css("visibility", "visible");
		    $(".img4.stripe.str66").css("visibility", "visible");
		    $(".img4.stripe.str71").css("visibility", "visible");
		    $(".img4.stripe.str76").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 850) {
			$(".img4.stripe.str5").css("visibility", "visible");
		    $(".img4.stripe.str10").css("visibility", "visible");
		    $(".img4.stripe.str15").css("visibility", "visible");
		    $(".img4.stripe.str20").css("visibility", "visible");

		    $(".img4.stripe.str24").css("visibility", "visible");
		    $(".img4.stripe.str29").css("visibility", "visible");
		    $(".img4.stripe.str34").css("visibility", "visible");
		    $(".img4.stripe.str39").css("visibility", "visible");

		    $(".img4.stripe.str43").css("visibility", "visible");
		    $(".img4.stripe.str48").css("visibility", "visible");
		    $(".img4.stripe.str53").css("visibility", "visible");
		    $(".img4.stripe.str58").css("visibility", "visible");

		    $(".img4.stripe.str62").css("visibility", "visible");
		    $(".img4.stripe.str67").css("visibility", "visible");
		    $(".img4.stripe.str72").css("visibility", "visible");
		    $(".img4.stripe.str77").css("visibility", "visible");

		    $(".img4.stripe.str81").css("visibility", "visible");
		    $(".img4.stripe.str86").css("visibility", "visible");
		    $(".img4.stripe.str91").css("visibility", "visible");
		    $(".img4.stripe.str96").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 900) {
			$(".img4.stripe.str25").css("visibility", "visible");
		    $(".img4.stripe.str30").css("visibility", "visible");
		    $(".img4.stripe.str35").css("visibility", "visible");
		    $(".img4.stripe.str40").css("visibility", "visible");

		    $(".img4.stripe.str44").css("visibility", "visible");
		    $(".img4.stripe.str49").css("visibility", "visible");
		    $(".img4.stripe.str54").css("visibility", "visible");
		    $(".img4.stripe.str59").css("visibility", "visible");

		    $(".img4.stripe.str63").css("visibility", "visible");
		    $(".img4.stripe.str68").css("visibility", "visible");
		    $(".img4.stripe.str73").css("visibility", "visible");
		    $(".img4.stripe.str78").css("visibility", "visible");

		    $(".img4.stripe.str82").css("visibility", "visible");
		    $(".img4.stripe.str87").css("visibility", "visible");
		    $(".img4.stripe.str92").css("visibility", "visible");
		    $(".img4.stripe.str97").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 950) {
			$(".img4.stripe.str45").css("visibility", "visible");
		    $(".img4.stripe.str50").css("visibility", "visible");
		    $(".img4.stripe.str55").css("visibility", "visible");
		    $(".img4.stripe.str60").css("visibility", "visible");

		    $(".img4.stripe.str64").css("visibility", "visible");
		    $(".img4.stripe.str69").css("visibility", "visible");
		    $(".img4.stripe.str74").css("visibility", "visible");
		    $(".img4.stripe.str79").css("visibility", "visible");

		    $(".img4.stripe.str83").css("visibility", "visible");
		    $(".img4.stripe.str88").css("visibility", "visible");
		    $(".img4.stripe.str93").css("visibility", "visible");
		    $(".img4.stripe.str98").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 1000) {
			$(".img4.stripe.str65").css("visibility", "visible");
		    $(".img4.stripe.str70").css("visibility", "visible");
		    $(".img4.stripe.str75").css("visibility", "visible");
		    $(".img4.stripe.str80").css("visibility", "visible");

			$(".img4.stripe.str84").css("visibility", "visible");
		    $(".img4.stripe.str89").css("visibility", "visible");
		    $(".img4.stripe.str94").css("visibility", "visible");
		    $(".img4.stripe.str99").css("visibility", "visible");
		}
		if ($(this).scrollTop() > 1050) {
			$(".img4.stripe.str85").css("visibility", "visible");
		    $(".img4.stripe.str90").css("visibility", "visible");
		    $(".img4.stripe.str95").css("visibility", "visible");
		    $(".img4.stripe.str100").css("visibility", "visible");
		}


		if ($(this).scrollTop() < 50) {
		    $(".img2.stripe.str1").css("visibility", "hidden");
		    $(".img2.stripe.str6").css("visibility", "hidden");
		    $(".img2.stripe.str11").css("visibility", "hidden");
		    $(".img2.stripe.str16").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 100) {
		    $(".img2.stripe.str2").css("visibility", "hidden");
		    $(".img2.stripe.str7").css("visibility", "hidden");
		    $(".img2.stripe.str12").css("visibility", "hidden");
		    $(".img2.stripe.str17").css("visibility", "hidden");

		    $(".img2.stripe.str21").css("visibility", "hidden");
		    $(".img2.stripe.str26").css("visibility", "hidden");
		    $(".img2.stripe.str31").css("visibility", "hidden");
		    $(".img2.stripe.str36").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 150) {
		    $(".img2.stripe.str3").css("visibility", "hidden");
		    $(".img2.stripe.str8").css("visibility", "hidden");
		    $(".img2.stripe.str13").css("visibility", "hidden");
		    $(".img2.stripe.str18").css("visibility", "hidden");

		    $(".img2.stripe.str22").css("visibility", "hidden");
		    $(".img2.stripe.str27").css("visibility", "hidden");
		    $(".img2.stripe.str32").css("visibility", "hidden");
		    $(".img2.stripe.str37").css("visibility", "hidden");

		    $(".img2.stripe.str41").css("visibility", "hidden");
		    $(".img2.stripe.str46").css("visibility", "hidden");
		    $(".img2.stripe.str51").css("visibility", "hidden");
		    $(".img2.stripe.str56").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 200) {
		   	$(".img2.stripe.str4").css("visibility", "hidden");
		    $(".img2.stripe.str9").css("visibility", "hidden");
		    $(".img2.stripe.str14").css("visibility", "hidden");
		    $(".img2.stripe.str19").css("visibility", "hidden");

		    $(".img2.stripe.str23").css("visibility", "hidden");
		    $(".img2.stripe.str28").css("visibility", "hidden");
		    $(".img2.stripe.str33").css("visibility", "hidden");
		    $(".img2.stripe.str38").css("visibility", "hidden");
		    $(".img2.stripe.str39").css("visibility", "hidden");

		    $(".img2.stripe.str42").css("visibility", "hidden");
		    $(".img2.stripe.str47").css("visibility", "hidden");
		    $(".img2.stripe.str52").css("visibility", "hidden");
		    $(".img2.stripe.str57").css("visibility", "hidden");

		    $(".img2.stripe.str61").css("visibility", "hidden");
		    $(".img2.stripe.str66").css("visibility", "hidden");
		    $(".img2.stripe.str71").css("visibility", "hidden");
		    $(".img2.stripe.str76").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 250) {
			$(".img2.stripe.str5").css("visibility", "hidden");
		    $(".img2.stripe.str10").css("visibility", "hidden");
		    $(".img2.stripe.str15").css("visibility", "hidden");
		    $(".img2.stripe.str20").css("visibility", "hidden");

		    $(".img2.stripe.str24").css("visibility", "hidden");
		    $(".img2.stripe.str29").css("visibility", "hidden");
		    $(".img2.stripe.str34").css("visibility", "hidden");
		    $(".img2.stripe.str39").css("visibility", "hidden");

		    $(".img2.stripe.str43").css("visibility", "hidden");
		    $(".img2.stripe.str48").css("visibility", "hidden");
		    $(".img2.stripe.str53").css("visibility", "hidden");
		    $(".img2.stripe.str58").css("visibility", "hidden");

		    $(".img2.stripe.str62").css("visibility", "hidden");
		    $(".img2.stripe.str67").css("visibility", "hidden");
		    $(".img2.stripe.str72").css("visibility", "hidden");
		    $(".img2.stripe.str77").css("visibility", "hidden");

		    $(".img2.stripe.str81").css("visibility", "hidden");
		    $(".img2.stripe.str86").css("visibility", "hidden");
		    $(".img2.stripe.str91").css("visibility", "hidden");
		    $(".img2.stripe.str96").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 300) {
			$(".img2.stripe.str25").css("visibility", "hidden");
		    $(".img2.stripe.str30").css("visibility", "hidden");
		    $(".img2.stripe.str35").css("visibility", "hidden");
		    $(".img2.stripe.str40").css("visibility", "hidden");

		    $(".img2.stripe.str44").css("visibility", "hidden");
		    $(".img2.stripe.str49").css("visibility", "hidden");
		    $(".img2.stripe.str54").css("visibility", "hidden");
		    $(".img2.stripe.str59").css("visibility", "hidden");

		    $(".img2.stripe.str63").css("visibility", "hidden");
		    $(".img2.stripe.str68").css("visibility", "hidden");
		    $(".img2.stripe.str73").css("visibility", "hidden");
		    $(".img2.stripe.str78").css("visibility", "hidden");

		    $(".img2.stripe.str82").css("visibility", "hidden");
		    $(".img2.stripe.str87").css("visibility", "hidden");
		    $(".img2.stripe.str92").css("visibility", "hidden");
		    $(".img2.stripe.str97").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 350) {
			$(".img2.stripe.str45").css("visibility", "hidden");
		    $(".img2.stripe.str50").css("visibility", "hidden");
		    $(".img2.stripe.str55").css("visibility", "hidden");
		    $(".img2.stripe.str60").css("visibility", "hidden");

		    $(".img2.stripe.str64").css("visibility", "hidden");
		    $(".img2.stripe.str69").css("visibility", "hidden");
		    $(".img2.stripe.str74").css("visibility", "hidden");
		    $(".img2.stripe.str79").css("visibility", "hidden");

		    $(".img2.stripe.str83").css("visibility", "hidden");
		    $(".img2.stripe.str88").css("visibility", "hidden");
		    $(".img2.stripe.str93").css("visibility", "hidden");
		    $(".img2.stripe.str98").css("visibility", "hidden");

			$(".img3.stripe.str1").css("visibility", "hidden");
		    $(".img3.stripe.str6").css("visibility", "hidden");
		    $(".img3.stripe.str11").css("visibility", "hidden");
		    $(".img3.stripe.str16").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 400) {
			$(".img2.stripe.str65").css("visibility", "hidden");
		    $(".img2.stripe.str70").css("visibility", "hidden");
		    $(".img2.stripe.str75").css("visibility", "hidden");
		    $(".img2.stripe.str80").css("visibility", "hidden");

			$(".img2.stripe.str84").css("visibility", "hidden");
		    $(".img2.stripe.str89").css("visibility", "hidden");
		    $(".img2.stripe.str94").css("visibility", "hidden");
		    $(".img2.stripe.str99").css("visibility", "hidden");

			$(".img3.stripe.str2").css("visibility", "hidden");
		    $(".img3.stripe.str7").css("visibility", "hidden");
		    $(".img3.stripe.str12").css("visibility", "hidden");
		    $(".img3.stripe.str17").css("visibility", "hidden");

		    $(".img3.stripe.str21").css("visibility", "hidden");
		    $(".img3.stripe.str26").css("visibility", "hidden");
		    $(".img3.stripe.str31").css("visibility", "hidden");
		    $(".img3.stripe.str36").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 450) {
			$(".img2.stripe.str85").css("visibility", "hidden");
		    $(".img2.stripe.str90").css("visibility", "hidden");
		    $(".img2.stripe.str95").css("visibility", "hidden");
		    $(".img2.stripe.str100").css("visibility", "hidden");

			$(".img3.stripe.str3").css("visibility", "hidden");
		    $(".img3.stripe.str8").css("visibility", "hidden");
		    $(".img3.stripe.str13").css("visibility", "hidden");
		    $(".img3.stripe.str18").css("visibility", "hidden");

		    $(".img3.stripe.str22").css("visibility", "hidden");
		    $(".img3.stripe.str27").css("visibility", "hidden");
		    $(".img3.stripe.str32").css("visibility", "hidden");
		    $(".img3.stripe.str37").css("visibility", "hidden");

		    $(".img3.stripe.str41").css("visibility", "hidden");
		    $(".img3.stripe.str46").css("visibility", "hidden");
		    $(".img3.stripe.str51").css("visibility", "hidden");
		    $(".img3.stripe.str56").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 500) {
		   	$(".img3.stripe.str4").css("visibility", "hidden");
		    $(".img3.stripe.str9").css("visibility", "hidden");
		    $(".img3.stripe.str14").css("visibility", "hidden");
		    $(".img3.stripe.str19").css("visibility", "hidden");

		    $(".img3.stripe.str23").css("visibility", "hidden");
		    $(".img3.stripe.str28").css("visibility", "hidden");
		    $(".img3.stripe.str33").css("visibility", "hidden");
		    $(".img3.stripe.str38").css("visibility", "hidden");

		    $(".img3.stripe.str42").css("visibility", "hidden");
		    $(".img3.stripe.str47").css("visibility", "hidden");
		    $(".img3.stripe.str52").css("visibility", "hidden");
		    $(".img3.stripe.str57").css("visibility", "hidden");

		    $(".img3.stripe.str61").css("visibility", "hidden");
		    $(".img3.stripe.str66").css("visibility", "hidden");
		    $(".img3.stripe.str71").css("visibility", "hidden");
		    $(".img3.stripe.str76").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 550) {
			$(".img3.stripe.str5").css("visibility", "hidden");
		    $(".img3.stripe.str10").css("visibility", "hidden");
		    $(".img3.stripe.str15").css("visibility", "hidden");
		    $(".img3.stripe.str20").css("visibility", "hidden");

		    $(".img3.stripe.str24").css("visibility", "hidden");
		    $(".img3.stripe.str29").css("visibility", "hidden");
		    $(".img3.stripe.str34").css("visibility", "hidden");
		    $(".img3.stripe.str39").css("visibility", "hidden");

		    $(".img3.stripe.str43").css("visibility", "hidden");
		    $(".img3.stripe.str48").css("visibility", "hidden");
		    $(".img3.stripe.str53").css("visibility", "hidden");
		    $(".img3.stripe.str58").css("visibility", "hidden");

		    $(".img3.stripe.str62").css("visibility", "hidden");
		    $(".img3.stripe.str67").css("visibility", "hidden");
		    $(".img3.stripe.str72").css("visibility", "hidden");
		    $(".img3.stripe.str77").css("visibility", "hidden");

		    $(".img3.stripe.str81").css("visibility", "hidden");
		    $(".img3.stripe.str86").css("visibility", "hidden");
		    $(".img3.stripe.str91").css("visibility", "hidden");
		    $(".img3.stripe.str96").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 600) {
			$(".img3.stripe.str25").css("visibility", "hidden");
		    $(".img3.stripe.str30").css("visibility", "hidden");
		    $(".img3.stripe.str35").css("visibility", "hidden");
		    $(".img3.stripe.str40").css("visibility", "hidden");

		    $(".img3.stripe.str44").css("visibility", "hidden");
		    $(".img3.stripe.str49").css("visibility", "hidden");
		    $(".img3.stripe.str54").css("visibility", "hidden");
		    $(".img3.stripe.str59").css("visibility", "hidden");

		    $(".img3.stripe.str63").css("visibility", "hidden");
		    $(".img3.stripe.str68").css("visibility", "hidden");
		    $(".img3.stripe.str73").css("visibility", "hidden");
		    $(".img3.stripe.str78").css("visibility", "hidden");

		    $(".img3.stripe.str82").css("visibility", "hidden");
		    $(".img3.stripe.str87").css("visibility", "hidden");
		    $(".img3.stripe.str92").css("visibility", "hidden");
		    $(".img3.stripe.str97").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 650) {
			$(".img3.stripe.str45").css("visibility", "hidden");
		    $(".img3.stripe.str50").css("visibility", "hidden");
		    $(".img3.stripe.str55").css("visibility", "hidden");
		    $(".img3.stripe.str60").css("visibility", "hidden");

		    $(".img3.stripe.str64").css("visibility", "hidden");
		    $(".img3.stripe.str69").css("visibility", "hidden");
		    $(".img3.stripe.str74").css("visibility", "hidden");
		    $(".img3.stripe.str79").css("visibility", "hidden");

		    $(".img3.stripe.str83").css("visibility", "hidden");
		    $(".img3.stripe.str88").css("visibility", "hidden");
		    $(".img3.stripe.str93").css("visibility", "hidden");
		    $(".img3.stripe.str98").css("visibility", "hidden");

			$(".img4.stripe.str1").css("visibility", "hidden");
		    $(".img4.stripe.str6").css("visibility", "hidden");
		    $(".img4.stripe.str11").css("visibility", "hidden");
		    $(".img4.stripe.str16").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 700) {
			$(".img3.stripe.str65").css("visibility", "hidden");
		    $(".img3.stripe.str70").css("visibility", "hidden");
		    $(".img3.stripe.str75").css("visibility", "hidden");
		    $(".img3.stripe.str80").css("visibility", "hidden");

			$(".img3.stripe.str84").css("visibility", "hidden");
		    $(".img3.stripe.str89").css("visibility", "hidden");
		    $(".img3.stripe.str94").css("visibility", "hidden");
		    $(".img3.stripe.str99").css("visibility", "hidden");

			$(".img4.stripe.str2").css("visibility", "hidden");
		    $(".img4.stripe.str7").css("visibility", "hidden");
		    $(".img4.stripe.str12").css("visibility", "hidden");
		    $(".img4.stripe.str17").css("visibility", "hidden");

		    $(".img4.stripe.str21").css("visibility", "hidden");
		    $(".img4.stripe.str26").css("visibility", "hidden");
		    $(".img4.stripe.str31").css("visibility", "hidden");
		    $(".img4.stripe.str36").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 750) {
			$(".img3.stripe.str85").css("visibility", "hidden");
		    $(".img3.stripe.str90").css("visibility", "hidden");
		    $(".img3.stripe.str95").css("visibility", "hidden");
		    $(".img3.stripe.str100").css("visibility", "hidden");

			$(".img4.stripe.str3").css("visibility", "hidden");
		    $(".img4.stripe.str8").css("visibility", "hidden");
		    $(".img4.stripe.str13").css("visibility", "hidden");
		    $(".img4.stripe.str18").css("visibility", "hidden");

		    $(".img4.stripe.str22").css("visibility", "hidden");
		    $(".img4.stripe.str27").css("visibility", "hidden");
		    $(".img4.stripe.str32").css("visibility", "hidden");
		    $(".img4.stripe.str37").css("visibility", "hidden");

		    $(".img4.stripe.str41").css("visibility", "hidden");
		    $(".img4.stripe.str46").css("visibility", "hidden");
		    $(".img4.stripe.str51").css("visibility", "hidden");
		    $(".img4.stripe.str56").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 800) {
		   	$(".img4.stripe.str4").css("visibility", "hidden");
		    $(".img4.stripe.str9").css("visibility", "hidden");
		    $(".img4.stripe.str14").css("visibility", "hidden");
		    $(".img4.stripe.str19").css("visibility", "hidden");

		    $(".img4.stripe.str23").css("visibility", "hidden");
		    $(".img4.stripe.str28").css("visibility", "hidden");
		    $(".img4.stripe.str33").css("visibility", "hidden");
		    $(".img4.stripe.str38").css("visibility", "hidden");

		    $(".img4.stripe.str42").css("visibility", "hidden");
		    $(".img4.stripe.str47").css("visibility", "hidden");
		    $(".img4.stripe.str52").css("visibility", "hidden");
		    $(".img4.stripe.str57").css("visibility", "hidden");

		    $(".img4.stripe.str61").css("visibility", "hidden");
		    $(".img4.stripe.str66").css("visibility", "hidden");
		    $(".img4.stripe.str71").css("visibility", "hidden");
		    $(".img4.stripe.str76").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 850) {
			$(".img4.stripe.str5").css("visibility", "hidden");
		    $(".img4.stripe.str10").css("visibility", "hidden");
		    $(".img4.stripe.str15").css("visibility", "hidden");
		    $(".img4.stripe.str20").css("visibility", "hidden");

		    $(".img4.stripe.str24").css("visibility", "hidden");
		    $(".img4.stripe.str29").css("visibility", "hidden");
		    $(".img4.stripe.str34").css("visibility", "hidden");
		    $(".img4.stripe.str39").css("visibility", "hidden");

		    $(".img4.stripe.str43").css("visibility", "hidden");
		    $(".img4.stripe.str48").css("visibility", "hidden");
		    $(".img4.stripe.str53").css("visibility", "hidden");
		    $(".img4.stripe.str58").css("visibility", "hidden");

		    $(".img4.stripe.str62").css("visibility", "hidden");
		    $(".img4.stripe.str67").css("visibility", "hidden");
		    $(".img4.stripe.str72").css("visibility", "hidden");
		    $(".img4.stripe.str77").css("visibility", "hidden");

		    $(".img4.stripe.str81").css("visibility", "hidden");
		    $(".img4.stripe.str86").css("visibility", "hidden");
		    $(".img4.stripe.str91").css("visibility", "hidden");
		    $(".img4.stripe.str96").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 900) {
			$(".img4.stripe.str25").css("visibility", "hidden");
		    $(".img4.stripe.str30").css("visibility", "hidden");
		    $(".img4.stripe.str35").css("visibility", "hidden");
		    $(".img4.stripe.str40").css("visibility", "hidden");

		    $(".img4.stripe.str44").css("visibility", "hidden");
		    $(".img4.stripe.str49").css("visibility", "hidden");
		    $(".img4.stripe.str54").css("visibility", "hidden");
		    $(".img4.stripe.str59").css("visibility", "hidden");

		    $(".img4.stripe.str63").css("visibility", "hidden");
		    $(".img4.stripe.str68").css("visibility", "hidden");
		    $(".img4.stripe.str73").css("visibility", "hidden");
		    $(".img4.stripe.str78").css("visibility", "hidden");

		    $(".img4.stripe.str82").css("visibility", "hidden");
		    $(".img4.stripe.str87").css("visibility", "hidden");
		    $(".img4.stripe.str92").css("visibility", "hidden");
		    $(".img4.stripe.str97").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 950) {
			$(".img4.stripe.str45").css("visibility", "hidden");
		    $(".img4.stripe.str50").css("visibility", "hidden");
		    $(".img4.stripe.str55").css("visibility", "hidden");
		    $(".img4.stripe.str60").css("visibility", "hidden");

		    $(".img4.stripe.str64").css("visibility", "hidden");
		    $(".img4.stripe.str69").css("visibility", "hidden");
		    $(".img4.stripe.str74").css("visibility", "hidden");
		    $(".img4.stripe.str79").css("visibility", "hidden");

		    $(".img4.stripe.str83").css("visibility", "hidden");
		    $(".img4.stripe.str88").css("visibility", "hidden");
		    $(".img4.stripe.str93").css("visibility", "hidden");
		    $(".img4.stripe.str98").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 1000) {
			$(".img4.stripe.str65").css("visibility", "hidden");
		    $(".img4.stripe.str70").css("visibility", "hidden");
		    $(".img4.stripe.str75").css("visibility", "hidden");
		    $(".img4.stripe.str80").css("visibility", "hidden");

			$(".img4.stripe.str84").css("visibility", "hidden");
		    $(".img4.stripe.str89").css("visibility", "hidden");
		    $(".img4.stripe.str94").css("visibility", "hidden");
		    $(".img4.stripe.str99").css("visibility", "hidden");
		}
		if ($(this).scrollTop() < 1050) {
			$(".img4.stripe.str85").css("visibility", "hidden");
		    $(".img4.stripe.str90").css("visibility", "hidden");
		    $(".img4.stripe.str95").css("visibility", "hidden");
		    $(".img4.stripe.str100").css("visibility", "hidden");
		}

	});
});