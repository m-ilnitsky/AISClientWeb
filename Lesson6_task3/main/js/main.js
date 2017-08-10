require(
    ['banners', 'jquery', 'jqueryui'],
    function(banners, $, jQueryUI) {
        console.info('main-start');

        $(function() {
            console.info('main-start-1');

            $("#tabs").tabs();

            $(".accordion").accordion({
                active: false,
                collapsible: true,
                heightStyle: "content"
            });

            $("#datepicker").datepicker();

            $("#datepickerMY").datepicker({
                changeMonth: true,
                changeYear: true
            });

            $("#datepickerRu").datepicker({
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
            });
        });

        $(function() {
            'use strict';
            console.info('main-start-2');

            var recipes = new Array(4);
            recipes[0] = ["Бензин (1 доля)", "Скипидар (1 доля)"];
            recipes[1] = ["Бензин (2 доли)", "Керосин (1 доля)", "Скипидар (1 доля)"];
            recipes[2] = "Масло (1 доля), Бензин (4 доли), Скипидар (1 доля)".split(", ");
            recipes[3] = "Бензин (5 долей), Скипидар (3 доли), Гудрон (1 доля)".split(", ");

            for (var i = 0, l = recipes.length; i < l; i++) {
                var ul = document.querySelector(".recipe" + (i + 1) + " > ul");

                for (var j = 0, ll = recipes[i].length; j < ll; j++) {
                    var li = document.createElement("li");
                    li.innerHTML = recipes[i][j];
                    ul.appendChild(li);
                }
            }
        });
    }
);