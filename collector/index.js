// scrapper
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = "http://www.imdb.com/search/title?genres=fantasy&title_type=feature&sort=user_rating,desc";
var path = "./data/film_list1.json";
var items = [];

request(url, function(error, response, page){
	
    if(!error){
        var $ = cheerio.load(page);

        var list = $(".lister-item.mode-advanced");
        for(var i = 0; i < list.length; i++){
            
            var obj = {
                id: i,
                name: "",
                href: "",
                rating: "",
				date: ""
            };

            var z = $(list[i]).find(".lister-item-header > a");
            obj.name = $(z).first().text();
			obj.href = $(z).first().attr("href");
			console.log(z);

            var x = $(list[i]).find(".ratings-imdb-rating > strong");
            obj.rating = $(x).first().text();
			console.log(x);
			
			var c = $(list[i]).find(".lister-item-header > .lister-item-year");
			obj.date = $(c).first().text();
			console.log(c);
            
            items.push(obj);

        }
    }

    fs.writeFile(path, JSON.stringify(items));

});