(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        init();
    });

    function init(){

        (function(){
            var recipes = new Array(4);
            recipes[0] = ["Бензин (1 доля)", "Скипидар (1 доля)"];
            recipes[1] = ["Бензин (2 доли)", "Керосин (1 доля)", "Скипидар (1 доля)"];
            recipes[2] = "Масло (1 доля), Бензин (4 доли), Скипидар (1 доля)".split(", ");
            recipes[3] = "Бензин (5 долей), Скипидар (3 доли), Гудрон (1 доля)".split(", ");
            recipes[3].push("Четвёртый элемент списка");
            recipes[3].push("Пятый элемен");
            recipes[3].push("Шестой элемент");

            for(var i = 0, l = recipes.length; i < l; i++){
                var ul = document.querySelector(".recipe" + (i + 1) + " > ul");
                
                for(var j = 0, ll = recipes[i].length; j < ll; j++){
                    var li = document.createElement("li");
                    li.innerHTML = recipes[i][j];
                    ul.appendChild(li);
                }
            }
        })();

        function bottomOnMouseOver(event){
            if(event.target.matches("img")) {
                var banners = document.querySelectorAll(".banner");

                for(var i = 0, l = banners.length; i < l; i++) {
                    if(banners[i].matches(".position-2") 
                    || banners[i].matches(".move-to-2")
                    || banners[i].matches(".move-to-1")){
                        console.info("return");
                        return;
                    }
                }

                console.info("bottomOnMouseOver");
                for(var i = 0, l = banners.length; i < l; i++) {
                    banners[i].classList.add("bottom-attack");
                }
            }
        }

        function bottomOnMouseOut(event){
            if(event.target.matches("img")) {
                var banners = document.querySelectorAll(".banner");

                for(var i = 0, l = banners.length; i < l; i++) {
                    if(banners[i].matches(".position-2") 
                    || banners[i].matches(".move-to-2")
                    || banners[i].matches(".move-to-1")){
                        console.info("return");
                        return;
                    }
                }

                console.info("bottomOnMouseOut");
                for(var i = 0, l = banners.length; i < l; i++) {
                    banners[i].classList.remove('bottom-attack');
                    banners[i].classList.remove('shake');
                    banners[i].classList.add("free");
                }
            }
        }

        function onMouseDown(event) {
            if(event.target.matches("img")) {
                var banners = document.querySelectorAll(".banner");

                for(var i = 0, l = banners.length; i < l; i++) {
                    if(banners[i].matches(".position-2") 
                    || banners[i].matches(".move-to-2")
                    || banners[i].matches(".move-to-1")){
                        console.info("return");
                        return;
                    }
                }

                console.info("onMouseDown");
                for(var i = 0, l = banners.length; i < l; i++) {
                    banners[i].classList.remove('bottom-attack');
                    banners[i].classList.remove('shake');
                    banners[i].classList.add("free");
                }

                event.target.parentElement.parentElement.parentElement.classList.add('shake');
            }
        }

        function onMouseUp(event){
            if(event.target.matches("img")) {

                var banners = document.querySelectorAll(".banner");

                if(event.target.matches(".position-2 img")) {
                    for(var i = 0, l = banners.length; i < l; i++) {
                        banners[i].classList.remove('position-2');
                        banners[i].classList.add('free');
                    }
                } else {

                    for(var i = 0, l = banners.length; i < l; i++) {
                        banners[i].classList.remove('free');
                        banners[i].classList.remove('shake');
                        banners[i].classList.remove('bottom-attack');
                        console.info(banners[i]);
                        console.info(banners[i].classList);
                    }

                    var start = Date.now();
                    var state = 0;
                    
                        function animation() {
                            var timePassed = Date.now() - start;

                            if (state === 0 && timePassed < 1500){
                                event.target.parentElement.parentElement.parentElement.classList.remove('free');
                                event.target.parentElement.parentElement.parentElement.classList.add('move-to-1'); 
                                state = 1;   
                                console.info("state1="+state);
                                console.info(event.target+"  :");
                                console.info(event.target.parentElement.parentElement.parentElement);                      
                            } else if (state === 1 && timePassed > 1500 && timePassed < 1700){
                                event.target.parentElement.parentElement.parentElement.classList.remove('move-to-1');
                                event.target.parentElement.parentElement.parentElement.classList.remove('free');
                                event.target.parentElement.parentElement.parentElement.classList.add('move-to-2');
                                state = 2;
                                console.info("state2="+state);
                                console.info(event.target+"  :");
                                console.info(event.target.parentElement.parentElement.parentElement);
                            } else if (state === 2 && timePassed > 1700 && timePassed < 1800){
                                event.target.parentElement.parentElement.parentElement.classList.remove('move-to-2');
                                event.target.parentElement.parentElement.parentElement.classList.remove('free');
                                event.target.parentElement.parentElement.parentElement.classList.add('position-2');
                                console.info("state3="+state);
                                console.info(event.target+"  :");
                                console.info(event.target.parentElement.parentElement.parentElement);
                            } else if (timePassed > 1800) {
                                event.target.parentElement.parentElement.parentElement.classList.remove('free');
                                state = 0;
                                console.info("state4="+state);
                                console.info(event.target+"  :");
                                console.info(event.target.parentElement.parentElement.parentElement);
                                clearInterval(timer);
                                return;
                            }
                        }

                    var timer = setInterval(animation, 20);
                }
            }
        }

        var bannerHtmlAcademy = document.querySelector(".banner.banner-html-academy");
        bannerHtmlAcademy.addEventListener("mouseover", bottomOnMouseOver);
        bannerHtmlAcademy.addEventListener("mouseout", bottomOnMouseOut);

        var bannerAcademItSchool = document.querySelector(".banner.banner-academ-it-school");
        bannerAcademItSchool.addEventListener("mouseout", bottomOnMouseOut);

        var banners = document.querySelectorAll(".banner");
        for(var i = 0, l = banners.length; i < l; i++) {
            banners[i].addEventListener("mousedown", onMouseDown);
            banners[i].addEventListener("mouseup", onMouseUp);
            banners[i].addEventListener("click", onMouseUp);
        }

    }

}());