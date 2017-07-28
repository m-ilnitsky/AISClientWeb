(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        init();
    });

    function init(){

        (function(){
            var table = document.body.children[1];
            
            for(var i = 0, trLength = table.rows.length; i < trLength; i++){
                var tr = table.rows[i];
                
                for(var j = 0, tdLength = tr.cells.length; j < tdLength; j++){
                    if((i+1)%2===0 && (j+1)%2===0){
                        if(!tr.cells[j].matches('.p, .s')){
                            tr.cells[j].style.backgroundColor='#272c71';
                            tr.cells[j].style.color='white';
                        }
                    }
                }
            }
        })();

        var firstClick = null;

        function onTdClick(event){
            if(event.target.matches('.p, .s')){
                if(firstClick === null){
                    firstClick = event.target;
                    $(firstClick).addClass('red');
                } else {
                    var secondClick = event.target;

                    var innerHTML = $(firstClick).html();
                    $(firstClick).html($(secondClick).html());
                    $(secondClick).html(innerHTML);

                    $(firstClick).removeClass('red');
                    firstClick = null;

                    console.info('firstClick=' + firstClick);
                }
            }
        }

        function onImgClick(event){
            if(event.target.matches('.p img, .s img')){
                if(firstClick === null){
                    firstClick = event.target.parentElement;
                    $(firstClick).addClass('red');
                } else {
                    var secondClick = event.target.parentElement;

                    var innerHTML = $(firstClick).html();
                    $(firstClick).html($(secondClick).html());
                    $(secondClick).html(innerHTML);

                    $(firstClick).removeClass('red');
                    firstClick = null;

                    console.info('firstClick=' + firstClick);
                }
            }
        }

        $('table.mendeleev td.p').add('table.mendeleev td.s').on('click', onTdClick);
        $('table.mendeleev td.p img').add('table.mendeleev td.s img').on('click', onImgClick);
    }

}());