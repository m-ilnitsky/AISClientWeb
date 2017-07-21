(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        init();
    });

    function init(){

        function resetAll(){
            var inputBlocks = document.querySelectorAll(".row.error-input");

            for(var i = 0, l = inputBlocks.length; i < l; i++) {
                inputBlocks[i].classList.remove("error-input");
            }

            var inputElements = document.querySelectorAll(".input");

            for(var i = 0, l = inputElements.length; i < l; i++) {
                if(inputElements[i].matches("input[type='text']")){
                    inputElements[i].value = "";

                } else if(inputElements[i].matches("input[type='checkbox']")){
                    inputElements[i].checked = false;

                } else if(inputElements[i].matches("select")){
                    for(var j = 0; j < inputElements[i].children.length; j++){
                        if(inputElements[i].children[j].value === "none"){
                            inputElements[i].selectedIndex = j;
                        }
                    }
                }
            }
        }

        var buttonReset = document.getElementById("button-reset");
        buttonReset.addEventListener("click", resetAll);

    }

}());