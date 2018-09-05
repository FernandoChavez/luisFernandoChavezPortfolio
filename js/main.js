        // loader
      $(window).load(function() { // makes sure the whole site is loaded
        $('.cssload-battery').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});

        //My textillate animations
        $('.welcome').textillate({ initialDelay: 320, in: { effect: 'fadeInRight', sync: true} });
        $('.this_is').textillate({ initialDelay: 320, in: { effect: 'fadeInRight', sync: true} });
        $('.website_contruction').textillate({ initialDelay: 320, in: { effect: 'fadeInRight', sync: true, delayScale: 0} });


      })

        // Sticky Header


        $(window).scroll(function() {

            if ($(window).scrollTop() > 400) {
                $('.main_header').addClass('sticky');
                $('.main_header').removeClass('sticky2');
            } else {
                $('.main_header').addClass('sticky2');
                $('.main_header').removeClass('sticky');
            }
        });


        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.main_header').removeClass('open-nav');
            } else {
                $('.main_header').addClass('open-nav');
            }
        });

        $('.main_header li a').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_header').removeClass('open-nav');
            }
        });

        // navigation scroll lijepo radi materem
        $('nav a').click(function(event) {
            var id = $(this).attr("href");
            var offset = 70;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);
            event.preventDefault();
        });



        // wow js

    new WOW().init();

        // nice scroll

      $(document).ready(

        function() {

          $("html").niceScroll({cursorwidth:"8",cursorborderradius:"none",cursorborder:"none",cursorcolor:"#3498db",mousescrollstep:"60"});

        }

      );

      var object = [

        {

          'headline':'HTML & CSS',
          'value':8,
          'length':9,
          'description':'Significant experience and knowlage of HTML(5) and CSS functionality and use.'

        },
        {

          'headline':'JavaScript & jQuery',
          'value':6,
          'length':5,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Ruby & Python',
          'value':3,
          'length':5,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        }

      ];

      $(document).ready(function(){


          $('.main_header').addClass('sticky2');

          //Code parallax for divs in tabs
          $(window).on('shown.bs.tab', function() {
            $(window).trigger('resize.px.parallax');
          });


          //Jquery Validator
          $.validate({
           modules : 'security',
           onSuccess : function($form) {
              var url = "../sendMail.php";
             $.ajax({
                 type: "POST",
                 url: url,
                 data: $(".emailContact").serialize(),
                 success: function(data)
                 {
                   //$('#resp').html(data);
                   alert('Tu mensaje fue enviado correctamente');
                   $($form)[0].reset();
                 }
             });

              return false; // Will stop the submission of the form
           },

           onError : function($form) {
              //return false; // Will stop the submission of the form
           },
          });


      });

      //Projects

      $(document).ready(function(){
        //var kindProject = ["logo", "Combo/Highlight Video", "WebPlatform", "Tutorial Video", "Web Support", "AMV"];
        //var logeKindProject=["img/logos/html.png","img/logos/youtube.png","img/logos/editor.png"];


      });


        // Owl carousel

      $(document).ready(function() {

      $("#testimonial_carosule").owlCarousel({

                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true,
                    autoPlay : true,
                    transitionStyle : "backSlide",
                    // "singleItem:true" is a shortcut for:
                    // items : 1,
                    // itemsDesktop : false,
                    // itemsDesktopSmall : false,
                    // itemsTablet: false,
                    // itemsMobile : false

                });

      });

      // Up to top js

      $(document).ready(function() {

        $().UItoTop({ easingType: 'easeOutQuart' });

      });



/* ==========================================================================
   CONTACT FORM JS
   ========================================================================== */

  $(document).ready(function() {
      $("#submit_btn").click(function() {
          //get input field values
          var user_name       = $('input[name=name]').val();
          var user_email      = $('input[name=email]').val();
          var user_phone      = $('input[name=phone]').val();
          var user_message    = $('textarea[name=message]').val();

          //simple validation at client's end
          //we simply change border color to red if empty field using .css()
          var proceed = true;
          if(user_name==""){
              $('input[name=name]').css('border-color','red');
              proceed = false;
          }
          if(user_email==""){
              $('input[name=email]').css('border-color','red');
              proceed = false;
          }
          if(user_phone=="") {
              $('input[name=phone]').css('border-color','red');
              proceed = false;
          }
          if(user_message=="") {
              $('textarea[name=message]').css('border-color','red');
              proceed = false;
          }

          //everything looks good! proceed...
          if(proceed)
          {
              //data to be sent to server
              post_data = {'userName':user_name, 'userEmail':user_email, 'userPhone':user_phone, 'userMessage':user_message};

              //Ajax post data to server
              $.post('contact_me.php', post_data, function(response){

                  //load json data from server and output message
                  if(response.type == 'error')
                  {
                      output = '<div class="error">'+response.text+'</div>';
                  }else{

                      output = '<div class="success">'+response.text+'</div>';

                      //reset values in all input fields
                      $('#contact_form input').val('');
                      $('#contact_form textarea').val('');
                  }

                  $("#result").hide().html(output).slideDown();
              }, 'json');

          }
      });

      //reset previously set border colors and hide all message on .keyup()
      $("#contact_form input, #contact_form textarea").keyup(function() {
          $("#contact_form input, #contact_form textarea").css('border-color','');
          $("#result").slideUp();
      });

      //Social media modal
      $('.social_media').on('shown.bs.modal', function () {
        $('#media_modal').focus()
      })

  });
