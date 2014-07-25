"use strict";
var scMoonCatcher = {
    init: function () {
        var $this = this;
        
        var counterGlobal = 0;

        $this.swapPlanets(0);

        
    },


    swapPlanets: function (counterGlobal) { 
    	
    	console.log("swapping planets");

    	//hide the moon

    	//find each of the planets and swap the position between 3 values

    	//store the values in an array

    	// pull value out of array and check to see if there is a value out of the array already

    	counterGlobal = 1;
        console.log(counterGlobal);

    	scMoonCatcher.moonPlacement(counterGlobal);


    },

    moonPlacement: function (counterGlobal) { 
    	
    	console.log("moon placement function");

    	//math . random 3 positions after the planets have finished moving

    	counterGlobal = 3;
        console.log(counterGlobal);
        
        scMoonCatcher.catchMoon(counterGlobal);

    },

    catchMoon: function (counterGlobal) { 
    	
    	console.log("catch moon function");

    	//math . random 3 positions after the planets have finished moving

        console.log(counterGlobal);

    }


     
};
scMoonCatcher.init();