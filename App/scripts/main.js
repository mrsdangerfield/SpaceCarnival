"use strict";
var spaceCarnival = {
    init: function () {
        var self = this;
        this.planetNavigationCarousel();
        this.planetGameInit();
    },

    planetNavigationCarousel: function () {

    /**
    * super simple carousel
    * animation between panes happens with css transitions
    */
        function Carousel(element)
        {
            var self = this;
            element = $(element);

            var container = $(">ul", element);
            var panes = $(">ul>li", element);

            var pane_height = 0;
            var pane_count = panes.length;

            var current_pane = panes.length - 1;


            /**
             * initial
             */
            this.init = function() {
                setPaneDimensions();

                $(window).on("load resize orientationchange", function() {
                    setPaneDimensions();
                });
            };


            /**
             * set the pane dimensions and scale the container
             */
            function setPaneDimensions() {
                pane_height = panes.height();
                panes.each(function() {
                    $(this).height(pane_height);
                });
                container.height(pane_height*pane_count);

                $('#carousel ul').css({"marginTop": "-" + pane_height * (pane_count-1) + "px" });

            }


            /**
             * show pane by index
             */
            this.showPane = function(index, animate) {
                // between the bounds
                index = Math.max(0, Math.min(index, pane_count-1));
                current_pane = index;

                var offset = -((100/pane_count)*current_pane);
                setContainerOffset(offset, animate);
            };


            function setContainerOffset(percent, animate) {
                container.removeClass("animate");

                if(animate) {
                    container.addClass("animate");
                }

                var px = ((pane_height*pane_count) / 100) * percent;
                
                container.css("marginTop", px+"px");

                //if(Modernizr.csstransforms3d) {

                    //container.css("transform", "translate3d( 0, "+ percent +"% ,0) scale3d(1,1,1)");
                //}
                /*else if(Modernizr.csstransforms) {
                    container.css("transform", "translate("+ percent +"%,0)");
                }*/
                //else {
                    //var px = ((pane_height*pane_count) / 100) * percent;
                    //container.css("left", px+"px");
                //}
            }

            this.up = function() { return this.showPane(current_pane+1, true); };
            this.down = function() { return this.showPane(current_pane-1, true); };


            function handleHammer(ev) {
                // disable browser scrolling
                ev.gesture.preventDefault();

                switch(ev.type) {
                    case 'dragup':
                    case 'dragdown':
                        // stick to the finger
                        var pane_offset = -(100/pane_count)*current_pane;
                        var drag_offset = ((100/pane_height)*ev.gesture.deltaX) / pane_count;

                        // slow down at the first and last pane
                        if((current_pane === 0 && ev.gesture.direction === "down") ||
                            (current_pane === pane_count-1 && ev.gesture.direction === "up")) {
                            drag_offset *= .4;
                        }

                        setContainerOffset(drag_offset + pane_offset);
                        break;

                    case 'swipeup':
                        self.up();
                        ev.gesture.stopDetect();
                        break;

                    case 'swipedown':
                        self.down();
                        ev.gesture.stopDetect();
                        break;

                    case 'release':
                        // more then 50% moved, navigate
                        if(Math.abs(ev.gesture.deltaY) > pane_height/2) {
                            if(ev.gesture.direction === 'down') {
                                self.down();
                            } else {
                                self.up();
                            }
                        }
                        else {
                            self.showPane(current_pane, true);
                        }
                        break;
                }
            }

            new Hammer(element[0], { dragLockToAxis: true }).on("release dragup dragdown swipeup swipedown", handleHammer);
        }

        var carousel = new Carousel("#carousel");
        carousel.init();
    }

    planetNavigationCarousel: function () { 
    /**
    * this is the function that allows the user to click on the planet and load in the game
    **/

    };
     
};
spaceCarnival.init();