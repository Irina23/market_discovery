jQuery(document).ready(function() {

    jQuery(document).ready(function() {

        var time = 7; // time in seconds

        var $progressBar,
            $bar,
            $elem,
            isPause,
            tick,
            percentTime;

        //Init the carousel
        jQuery(".slider").owlCarousel({
            slideSpeed : 500,
            paginationSpeed : 500,
            singleItem : true,
            afterInit : progressBar,
            afterMove : moved,
            startDragging : pauseOnDragging
        });

        //Init progressBar where elem is $("#owl-demo")
        function progressBar(elem){
            $elem = elem;
            //build progress bar elements
            buildProgressBar();
            //start counting
            start();
        }

        //create div#progressBar and div#bar then prepend to $("#owl-demo")
        function buildProgressBar(){
            $progressBar = jQuery("<div>",{
                id:"progressBar"
            });
            $bar = jQuery("<div>",{
                id:"bar"
            });
            $progressBar.append($bar).prependTo($elem);
        }

        function start() {
            //reset timer
            percentTime = 0;
            isPause = false;
            //run interval every 0.01 second
            tick = setInterval(interval, 10);
        };

        function interval() {
            if(isPause === false){
                percentTime += 1 / time;
                $bar.css({
                    width: percentTime+"%"
                });
                //if percentTime is equal or greater than 100
                if(percentTime >= 100){
                    //slide to next item
                    $elem.trigger('owl.next')
                }
            }
        }

        //pause while dragging
        function pauseOnDragging(){
            isPause = true;
        }

        //moved callback
        function moved(){
            //clear interval
            clearTimeout(tick);
            //start again
            start();
        }

        //uncomment this to make pause on mouseover
        // $elem.on('mouseover',function(){
        //   isPause = true;
        // })
        // $elem.on('mouseout',function(){
        //   isPause = false;
        // })

    });



    jQuery(".contact_footer,#services_form").validate({

        rules:{

            name:{
                required: true,
                minlength: 2

            },


            phone:{
                required: true,
                digits: true

            },
            email:{
                required: true,
                email: true
            },
            message:{
                required: true
            }
        }



    });

    jQuery(" .service_link").on("click", function(){
        jQuery(this).next().slideToggle(600);
    });
    jQuery( "form .close" ).click(function(){
        jQuery(this).closest("form").slideToggle(600);
    });



    jQuery(window).scroll( function(){
        if ( jQuery(window).scrollTop() > 0 ) {
            jQuery(".home .services li:nth-child(1),.services li:nth-child(2)").addClass('animated fadeInLeft');
            jQuery(".home .services li:nth-child(3),.services li:nth-child(4)").addClass('animated fadeInRight');
            jQuery(".home .services li").css("display", "inline-block");


        }
        if ( jQuery(window).scrollTop() > 400 ) {
            jQuery(".mod_advantage").addClass('animated fadeInUp');
            jQuery(".mod_advantage").css("display", "block");
        }
        if ( jQuery(window).scrollTop() > 1000 ) {
            jQuery(".mod_popular_article").addClass('animated zoomIn');
            jQuery(".mod_popular_article").css("display", "block");
        }
    });





    jQuery(document).ready(function() {



    });



    jQuery(window).resize(function() {
        if (jQuery(window).width() <= 750) {
            jQuery(".mod_advantage2.mobile ul, .mod_advantage.mobile ul").owlCarousel({
                pagination : true,
                //autoPlay: 3000, //Set AutoPlay to 3 seconds
                singleItem:true



            });
        }
    });

    if (jQuery(window).width() <= 750) {
        jQuery(".mod_advantage2.mobile ul, .mod_advantage.mobile ul").owlCarousel({
            pagination : true,
            ///autoPlay: 3000, //Set AutoPlay to 3 seconds
            singleItem:true



        });
    }
});