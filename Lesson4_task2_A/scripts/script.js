(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        init();
    });

    function init(){
        var table = document.body.children[1];
        
        for(var i = 0, trLength = table.rows.length; i < trLength; i++){
            var tr = table.rows[i];
            
            for(var j = 0, tdLength = tr.cells.length; j < tdLength; j++){
                if((i+1)%2===0 && (j+1)%2===0){
                    if(tr.cells[j].matches('.p, .s')){
                        tr.cells[j].classList.add('red');
                    }else{
                        tr.cells[j].style.backgroundColor='#272c71';
                        tr.cells[j].style.color='white';
                    }
                   
                }
            }
        }
    }

}());