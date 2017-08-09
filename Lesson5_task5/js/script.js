        $(function(){
            $(".accordion").accordion({
                active: false,
                collapsible: true,
                heightStyle: "content"
            });
        });

        $(function(){
            $.when($.get('http://api.fixer.io/latest'))
            .then(function(latest){
                $('<li>').html('1 евро = ' + latest.rates['GBP'] + ' фунтов стерлингов').appendTo('.eur');
                $('<li>').html('1 евро = ' + latest.rates['USD'] + ' долларов').appendTo('.eur');
                $('<li>').html('1 евро = ' + latest.rates['RUB'] + ' рублей').appendTo('.eur');
                $('<li>').html('1 евро = ' + latest.rates['JPY'] + ' йен').appendTo('.eur');
            })
            .fail(function(xhr, textStatus, errorThrown){
            })
            .always(function(xhr, textStatus){
            })
        })

        $(function(){
            $.when($.get('https://restcountries.eu/rest/v2/currency/usd'))
            .then(function(countries){
                //var usdCountries = Lazy(countries).sortBy(countries.name).value();

                function compareNames(first, second){
                    var x = Lazy(first.name).toLowerCase().split('').value();
                    var y = Lazy(second.name).toLowerCase().split('').value();

                    var length = Math.max(x.length, y.length);
                    
                    for(var i = 0; i < length; i++){
                        if(x[i] !== y[i]) {
                            if(x[i] === undefined) return 1;
                            else if(y[i] === undefined) return -1;
                            else if(x[i] > y[i]) return 1;
                            else return -1;
                        } 
                    }

                    return 0;
                }

                var usdCountries = Lazy(countries).sort( compareNames ).value();
                var countUSD = Lazy(usdCountries).length();
                
                var noAfricaCountries = Lazy(usdCountries).filter(function(item){return !item.region.startsWith('Africa')}).value();
                var countNoAfrica = Lazy(noAfricaCountries).length();

                var noAsiaCountries = Lazy(noAfricaCountries).filter(function(item){return !item.region.startsWith('Asia')}).value();
                var countNoAsia = Lazy(noAsiaCountries).length();

                console.info(countries);
                console.info(usdCountries);
                console.info(noAfricaCountries);
                console.info(noAsiaCountries);

                $('h3.usd').html('Cтраны исповедующие доллар США (' + countUSD + ') :');
                $('h3.no-africa').html('Из них страны вне Африки (' + countNoAfrica + ') :');
                $('h3.no-asia').html('Из них страны вне Азии (' + countNoAsia + ') :');

                //Lazy(usdCountries).each(function(country){ $('<li>').html(country.name).appendTo($('div.usd ol')) });
                //Lazy(noAfricaCountries).each(function(country){ $('<li>').html(country.name).appendTo($('div.no-africa ol')) });
                //Lazy(noAsiaCountries).each(function(country){ $('<li>').html(country.name).appendTo($('div.no-asia ol')) });

                function addLi(element, className){ 
                    $('<li>').html(element).appendTo($('div.' + className +' ol'));
                }

                Lazy(usdCountries).each( function(country){ addLi(country.name, 'usd') } );
                Lazy(noAfricaCountries).each( function(country){ addLi(country.name, 'no-africa') } );
                Lazy(noAsiaCountries).each( function(country){ addLi(country.name, 'no-asia') } );

                /*
                $.each(usdCountries, function(index, value){
                    $('<li>').html(value.name).appendTo($('div.usd ol'));
                });

                $.each(noAfricaCountries, function(index, value){
                    $('<li>').html(value.name).appendTo($('div.no-africa ol'));
                });

                $.each(noAsiaCountries, function(index, value){
                    $('<li>').html(value.name).appendTo($('div.no-asia ol'));
                });
                */
            })
            .fail(function(xhr, textStatus, errorThrown){
            })
            .always(function(xhr, textStatus){
            })
        });