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
            var banners = document.querySelectorAll(".banner");
            for(var i = 0, l = banners.length; i < l; i++) {
                banners[i].classList.add("bottom-attack");
            }
        }

        function bottomOnMouseOut(event){
            var banners = document.querySelectorAll(".banner");
            for(var i = 0, l = banners.length; i < l; i++) {
                banners[i].classList.remove('bottom-attack');
                banners[i].classList.remove('shake-color');
                banners[i].classList.add("free");
            }
        }

        var bannerHtmlAcademy = document.querySelector(".banner.banner-html-academy");

        bannerHtmlAcademy.addEventListener("mouseover", bottomOnMouseOver);
        bannerHtmlAcademy.addEventListener("mousedown", bottomOnMouseOver);
        bannerHtmlAcademy.addEventListener("mouseup", bottomOnMouseOut);
        bannerHtmlAcademy.addEventListener("mouseout", bottomOnMouseOut);

        function onMouseDown(event){
            if(event.target.matches("img")){
                event.target.parentElement.parentElement.parentElement.classList.add('shake');
                
                var banners = document.querySelectorAll(".banner");
                for(var i = 0, l = banners.length; i < l; i++) {
                    banners[i].classList.remove('free');
                }
            }
        }

        function onMouseUp(event){
            if(event.target.matches("img")){
                event.target.parentElement.parentElement.parentElement.classList.remove('shake');
                event.target.parentElement.parentElement.parentElement.classList.remove('bottom-attack');

                var banners = document.querySelectorAll(".banner");
                for(var i = 0, l = banners.length; i < l; i++) {
                    banners[i].classList.add('free');
                }
            }
        }

        var banners = document.querySelectorAll(".banner");

        for(var i = 0, l = banners.length; i < l; i++){
            banners[i].addEventListener("mousedown", onMouseDown);
            banners[i].addEventListener("mouseup", onMouseUp);
            banners[i].addEventListener("clic", onMouseUp);
        }

    }

}());