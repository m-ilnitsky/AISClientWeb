(function() {
    'use userJSONict';

    document.addEventListener('DOMContentLoaded', function(event) {
        init();
    });

    function init(){

        function resetAll(){
            var inputBlocks = document.querySelectorAll('.error-input');

            for(var i = 0, l = inputBlocks.length; i < l; i++) {
                inputBlocks[i].classList.remove('error-input');
            }

            var inputElements = document.querySelectorAll('.input');

            for(var i = 0, l = inputElements.length; i < l; i++){
                if(inputElements[i].matches('input[type="text"]')){
                    inputElements[i].value = '';

                } else if(inputElements[i].matches('input[type="checkbox"]')){
                    inputElements[i].checked = false;

                } else if(inputElements[i].matches('select')){
                    for(var j = 0; j < inputElements[i].children.length; j++){
                        if(inputElements[i].children[j].value === 'none'){
                            inputElements[i].selectedIndex = j;
                        }
                    }

                } else if(inputElements[i].matches('div')
                    && inputElements[i].children[0].firstElementChild.matches('div > label > input[type="radio"]')) {
                    
                    var radioElements = inputElements[i].querySelectorAll('div > label > input[type="radio"]');

                    for(var j = 0; j <radioElements.length; j++){
                        if(radioElements[j].value === 'none'){
                            radioElements[j].checked = true;
                        }
                    }

                } else if(inputElements[i].matches('textarea')){
                    inputElements[i].value = '';
                }
            }
        }

        function isInputError(){
            var isError = false;

            var name = document.getElementById('name');
            if(name.value.replace(/\s+/g, '') === ''){
                name.classList.add('error-input');
                name.parentElement.classList.add('error-input');
                isError = true;
            } else {
                name.classList.remove('error-input');
                name.parentElement.classList.remove('error-input');
            }

            var surname = document.getElementById('surname');
            if(surname.value.replace(/\s+/g, '') === ''){
                surname.classList.add('error-input');
                surname.parentElement.classList.add('error-input');
                isError = true;
            } else {
                surname.classList.remove('error-input');
                surname.parentElement.classList.remove('error-input');
            }

            var country = document.getElementById('country');
            if(country.children[country.selectedIndex].value === 'none'){
                country.classList.add('error-input');
                country.parentElement.classList.add('error-input');
                isError = true;
            } else {
                country.classList.remove('error-input');
                country.parentElement.classList.remove('error-input');
            }

            var education = document.getElementById('education');
            var educationRadioElements = education.querySelectorAll('div.input > label > input[type="radio"]');
            var educationChecked = true;
            for(var i = 0; i < educationRadioElements.length; i++){
                if(educationRadioElements[i].checked === true && educationRadioElements[i].value === 'none'){
                    education.classList.add('error-input');
                    education.parentElement.classList.add('error-input');
                    isError = true;
                    educationChecked = false;
                }
            }
            if(educationChecked){
                education.classList.remove('error-input');
                education.parentElement.classList.remove('error-input');
            }

            var about = document.getElementById('about');
            if(about.value.replace(/\s+/g, '') === ''){
                about.classList.add('error-input');
                about.parentElement.classList.add('error-input');
                isError = true;
            } else {
                about.classList.remove('error-input');
                about.parentElement.classList.remove('error-input');
            }

            return isError;
        }

        function createJSON(){
            var name = document.getElementById('name');
            var surname = document.getElementById('surname');
            var country = document.getElementById('country');
            var education = document.querySelectorAll('#education.input > label > input[type="radio"]');
            var about = document.getElementById('about');
            var subscription = document.getElementById('subscription');

            for(var i = 0; i < education.length; i++){
                if(education[i].checked === true){
                    var educationValue = education[i].value;
                }
            }

            var user = {};
            user.name = name.value;
            user.surname = surname.value;
            user.subscriptionOnNews = subscription.checked;
            user.education = educationValue;
            user.about = about.value;

            var userJSON = JSON.stringify(user);

            return userJSON;
        }

        function showLoading(){

            $('body').loadingModal({text: 'Идёт отправка...'}).loadingModal('animation', 'fadingCircle').loadingModal('backgroundColor', 'gray');

            //setTimeout(function() {$('body').loadingModal('destroy')}, 3000);
            
            var delay = function(ms){ return new Promise(function(r) { setTimeout(r, ms) }) };

            delay(3000)
                .then(function() { $('body').loadingModal('text', 'Отправка выполнена!').loadingModal('color', 'white').loadingModal('backgroundColor', 'blue').loadingModal('animation', 'foldingCube'); return delay(1000); } )
                .then(function() { $('body').loadingModal('color', 'white').loadingModal('backgroundColor', 'red'); return delay(1000); } )
                .then(function() { $('body').loadingModal('color', 'white').loadingModal('backgroundColor', 'blue'); return delay(1000); } )
                .then(function() { $('body').loadingModal('color', 'white').loadingModal('backgroundColor', 'red'); return delay(1000); } )
                .then(function() { $('body').loadingModal('destroy') ;} )
            
            /*
            var time = 3000;

            delay(time)
                .then(function() { $('body').loadingModal('animation', 'rotatingPlane').loadingModal('backgroundColor', 'red'); return delay(time);})
                .then(function() { $('body').loadingModal('animation', 'wave'); return delay(time);})
                .then(function() { $('body').loadingModal('animation', 'wanderingCubes').loadingModal('backgroundColor', 'green'); return delay(time);})
                .then(function() { $('body').loadingModal('animation', 'spinner'); return delay(time);})
                .then(function() { $('body').loadingModal('animation', 'chasingDots').loadingModal('backgroundColor', 'blue'); return delay(time);})
                .then(function() { $('body').loadingModal('animation', 'threeBounce'); return delay(time);})
                .then(function() { $('body').loadingModal('animation', 'circle').loadingModal('backgroundColor', 'black'); return delay(time);})
                .then(function() { $('body').loadingModal('animation', 'cubeGrid'); return delay(time);})
                .then(function() { $('body').loadingModal('animation', 'fadingCircle').loadingModal('backgroundColor', 'gray'); return delay(time);})
                .then(function() { $('body').loadingModal('animation', 'foldingCube'); return delay(time); } )
                .then(function() { $('body').loadingModal('color', 'black').loadingModal('text', 'Сделано! :-)').loadingModal('backgroundColor', 'yellow');  return delay(time); } )
                .then(function() { $('body').loadingModal('hide'); return delay(time); } )
                .then(function() { $('body').loadingModal('destroy') ;} )
                ;
            */
        }

        function submit(){

            if(isInputError()){
                return;
            }

            var userJSON = createJSON();

            console.info('user='+userJSON);

            showLoading();

            //var xmlhttp = new XMLHttpRequest();
            //xmlhttp.open('POST', 'https:yandex.ru', true);
            //xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            //xmlhttp.send(userJSON);
        }

        var buttonReset = document.getElementById("button-reset");
        buttonReset.addEventListener("click", resetAll);

        var buttonSubmit = document.getElementById("button-submit");
        buttonSubmit.addEventListener("click", submit);

    }

}());