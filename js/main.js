
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

 //-------- Active Sticky Js ----------//
     $(".default-header").sticky({topSpacing:0});

     
   // -------   Active Mobile Menu-----//

  $(".menu-bar").on('click', function(e){
      e.preventDefault();
      $("nav").toggleClass('hide');
      $("span", this).toggleClass("lnr-menu lnr-cross");
      $(".main-menu").addClass('mobile-menu');
  });


  $('.nav-item a:first').tab('show');



  // Select all links with hashes
  $('.main-menubar a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


      // -------   Mail Send ajax

         $(document).ready(function() {
            var form = $('#myForm'); // contact form
            var submit = $('.submit-btn'); // submit button
            var alert = $('.alert-msg'); // alert div for show alert message

            // form submit event
            form.on('submit', function(e) {
                e.preventDefault(); // prevent default form submit

                $.ajax({
                    url: 'mail.php', // form action url
                    type: 'POST', // form submit method get/post
                    dataType: 'html', // request type html/json/xml
                    data: form.serialize(), // serialize form data
                    beforeSend: function() {
                        alert.fadeOut();
                        submit.html('Sending....'); // change submit button text
                    },
                    success: function(data) {
                        alert.html(data).fadeIn(); // fade in response data
                        form.trigger('reset'); // reset form
                        submit.attr("style", "display: none !important");; // reset submit button text
                    },
                    error: function(e) {
                        console.log(e)
                    }
                });
            });
        });

    $( function() {
        $( "#datepicker" ).datepicker();
        $( "#datepicker2" ).datepicker();
     });


      // -------   Mail Send ajax

         $(document).ready(function() {
            var form = $('#booking'); // contact form
            var submit = $('.submit-btn'); // submit button
            var alert = $('.alert-msg'); // alert div for show alert message

            // form submit event
            form.on('submit', function(e) {
                e.preventDefault(); // prevent default form submit

                var email_subject, email_body, email_address;

                email_subject = "Hey Chuy ! I would love to book a " + document.getElementById('kind').innerHTML + " for the next " + document.getElementById('datepicker').value + "...";

                email_body = document.getElementById('message').value + " Sincerely, " + document.getElementById('fname').value + " " + document.getElementById('lname').value + " (" + document.getElementById('email').value +")";

                console.log("subject", email_subject);
                console.log("body", email_body);

                window.open("mailto:chuycepeda@gmail.com?subject="+email_subject+"&body="+email_body);
                
            });
        });




       //  Start Google map 

            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 2,
                    mapTypeControl: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(6.517248,-10.3554037), 

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var markerA = new google.maps.Marker({
                    position: new google.maps.LatLng(25.6515649,-100.2917287),
                    map: map,
                    title: 'Monterrey!'
                });

                var markerB = new google.maps.Marker({
                    position: new google.maps.LatLng(25.653411,-100.3617447),
                    map: map,
                    title: 'San Pedro!'
                });

                var markerC = new google.maps.Marker({
                    position: new google.maps.LatLng(21.885731,-102.326319),
                    map: map,
                    title: 'Aguascalientes!'
                });

                var markerD = new google.maps.Marker({
                    position: new google.maps.LatLng(20.6737883,-103.3704326),
                    map: map,
                    title: 'Guadalajara!'
                });

                var markerE = new google.maps.Marker({
                    position: new google.maps.LatLng(19.39068,-99.283697),
                    map: map,
                    title: 'Mexico City @ Post-Davos!'
                });

                var markerF = new google.maps.Marker({
                    position: new google.maps.LatLng(24.8049008,-107.493354),
                    map: map,
                    title: 'Culiacan!'
                });

                var markerG = new google.maps.Marker({
                    position: new google.maps.LatLng(20.9800512,-89.7029583),
                    map: map,
                    title: 'Merida!'
                });

                var markerH = new google.maps.Marker({
                    position: new google.maps.LatLng(15.719987,-91.3560197),
                    map: map,
                    title: 'Guatemala!'
                });

                var markerI = new google.maps.Marker({
                    position: new google.maps.LatLng(13.7483455,-89.4907009),
                    map: map,
                    title: 'El Salvador!'
                });

                var markerJ = new google.maps.Marker({
                    position: new google.maps.LatLng(4.2820415,-74.5027155),
                    map: map,
                    title: 'Bogota!'
                });

                var markerK = new google.maps.Marker({
                    position: new google.maps.LatLng(-23.8046745,-46.6718345),
                    map: map,
                    title: 'Sao Bernardo do Campo!'
                });

                var markerL = new google.maps.Marker({
                    position: new google.maps.LatLng(-19.9027026,-44.0340901),
                    map: map,
                    title: 'Belo Horizonte!'
                });

                var markerM = new google.maps.Marker({
                    position: new google.maps.LatLng(-34.6158037,-58.5033382),
                    map: map,
                    title: 'Buenos Aires!'
                });

                var markerN = new google.maps.Marker({
                    position: new google.maps.LatLng(41.3163244,-72.9245318),
                    map: map,
                    title: 'Yale University!'
                });

                var markerO = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6932066,-73.98783),
                    map: map,
                    title: 'Govlab @ NYU!'
                });

                var markerP = new google.maps.Marker({
                    position: new google.maps.LatLng(37.4088478,-122.0666116),
                    map: map,
                    title: 'Singularity @ Nasa!'
                });

                var markerQ = new google.maps.Marker({
                    position: new google.maps.LatLng(36.1249185,-115.315083),
                    map: map,
                    title: 'Las Vegas @ Collision!'
                });

                var markerR = new google.maps.Marker({
                    position: new google.maps.LatLng(37.7576948,-122.4726194),
                    map: map,
                    title: 'San Francisco @ SU Summit!'
                });

                var markerS = new google.maps.Marker({
                    position: new google.maps.LatLng(40.4378698,-3.8196192),
                    map: map,
                    title: 'Madrid @ Media Lab Prado!'
                });

                var markerT = new google.maps.Marker({
                    position: new google.maps.LatLng(37.3753656,-5.9900776),
                    map: map,
                    title: 'Seville!'
                });

                var markerU = new google.maps.Marker({
                    position: new google.maps.LatLng(41.3947688,2.0787283),
                    map: map,
                    title: 'Barcelona @ Telefonica Alpha!'
                });

                var markerV = new google.maps.Marker({
                    position: new google.maps.LatLng(25.0750853,54.9475621),
                    map: map,
                    title: 'Dubai!'
                });

                var markerW = new google.maps.Marker({
                    position: new google.maps.LatLng(38.9298348,121.5407164),
                    map: map,
                    title: 'Dalian!'
                });

                var markerX = new google.maps.Marker({
                    position: new google.maps.LatLng(46.2050242,6.1090692),
                    map: map,
                    title: 'Geneva!'
                });

                var markerY = new google.maps.Marker({
                    position: new google.maps.LatLng(47.3774337,8.4666756),
                    map: map,
                    title: 'Zurich!'
                });

                var markerZ = new google.maps.Marker({
                    position: new google.maps.LatLng(46.7918114,9.8187671),
                    map: map,
                    title: 'Davos!'
                });

                var markerAA = new google.maps.Marker({
                    position: new google.maps.LatLng(51.7504111,-1.2826071),
                    map: map,
                    title: 'Oxford!'
                });

                var markerAB = new google.maps.Marker({
                    position: new google.maps.LatLng(14.640939, -90.513475),
                    map: map,
                    title: 'Las 100 puertas!'
                });

                var markerAC = new google.maps.Marker({
                    position: new google.maps.LatLng(21.1218994, -101.7360514),
                    map: map,
                    title: 'Leon!'
                });

                var markerAD = new google.maps.Marker({
                    position: new google.maps.LatLng(19.54641, -99.1998606),
                    map: map,
                    title: 'Tlalnepantla!'
                });

                var markerAE = new google.maps.Marker({
                    position: new google.maps.LatLng(20.6829193, -103.4740211),
                    map: map,
                    title: 'Zapopan!'
                });

                var markerAF = new google.maps.Marker({
                    position: new google.maps.LatLng(20.6738377, -87.02536),
                    map: map,
                    title: 'Riviera Maya!'
                });

                var markerAF = new google.maps.Marker({
                    position: new google.maps.LatLng(38.7436266, -9.1602032),
                    map: map,
                    title: 'Lisbon!'
                });

                var markerAF = new google.maps.Marker({
                    position: new google.maps.LatLng(6.2686734, -75.6664321),
                    map: map,
                    title: 'Medellin!'
                });

                
            }


          $(document).ready(function() {
              $('#mc_embed_signup').find('form').ajaxChimp();
          });      
    // -------   Mail Send ajax


 });
