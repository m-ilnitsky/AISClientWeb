(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        init();
    });

    function init(){
        var table = document.body.children[1];

        var onMouseOver = function(event){
            if(event.target.matches('.p, .s')) {
                if(event.target.cellIndex%2 === 1 && event.target.parentNode.rowIndex%2 === 1){
                    var outline = "outline: 3px solid red;";
                }else{
                    var outline = "outline: 3px solid black;";
                }

                var zIndex = getComputedStyle(event.target.children[0]).zIndex;
                console.info("z-index = " + zIndex);

                event.target.children[0].style.zIndex = 1e4;
            
                var start = Date.now();
            
                function animation() {
                    var timePassed = Date.now() - start;

                    event.target.children[0].style = outline;

                    if (timePassed < 1000){
                        event.target.children[0].style = outline + "z-index: 10000; transform: scale(" + (timePassed / 1000 + 1) + ");";
                    } else if (timePassed < 2000){
                        event.target.children[0].style = outline + "z-index: 1000; transform: scale(2)";
                    } else if (timePassed < 3000){
                        event.target.children[0].style = outline + "z-index: 100; transform: scale(" + ((3000 - timePassed) / 1000 + 1) + ");";
                    } else {
                        event.target.children[0].style="z-index: 10; outline: none; transform: scale(1);";
                        clearInterval(timer);
                        return;
                    }
                    console.info("new z-index = " + getComputedStyle(event.target.children[0]).zIndex);
                }

                var timer = setInterval(animation, 20);
            }
        }

        table.onmouseover = onMouseOver;
        //document.addEventListener("mouseover", onMouseOver);
    }

}());