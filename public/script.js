
google.charts.load('45', { packages: ['table','corechart'] });

google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawChart);  
google.charts.setOnLoadCallback(drawChart1);  
google.charts.setOnLoadCallback(drawChart2);  

function drawTable() {
    
    $.ajax({
        url: "/filmer",
        dataType: "json",
        success: function (jsonData) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Title');
            data.addColumn('number', 'Rating');
			data.addColumn('number', 'Year');
            data.addColumn('string', 'Href');
			
            for (var i = 0; i < jsonData.length; i++) {
			var n = jsonData[i].name;
			//console.log(n);
			var r = jsonData[i].rating;
			//console.log(r);
			var d = jsonData[i].date;
			//console.log(d);
			var h = jsonData[i].href;
			//console.log(h);

				 data.addRow([n,parseFloat(r),parseInt(d),h]);
            }

            var options = {
                title: 'Table Chart',
				allowHtml: true,
                showRowNumber: true,
                width: '500px',
                height: '500px'
            };

            var table = new google.visualization.Table(document.getElementById('table_chart'));
            table.draw(data,options);
        }
    });
}

function drawChart() {
    $.ajax({
        url: "/filmer",
        dataType: "json",
        success: function (jsonData) {
        var data = new google.visualization.DataTable();

            data.addColumn('number');
            data.addColumn('number');

            for(var i = 0; i < jsonData.length; i++){
			var r = jsonData[i].rating;
			//console.log(r);
			var d = jsonData[i].date;
			//console.log(d);

				 data.addRow([parseFloat(r),parseInt(d)]);
            }
      
         var options = {
          title: 'Column Chart',
            vAxis: {title: 'Year',  titleTextStyle: {color: 'black'}},
            hAxis: {title: 'Rating',  titleTextStyle: {color: 'black'}},
        };
          var chart = new google.visualization.ColumnChart(document.getElementById('column_chart'));
        chart.draw(data, options);


        }
    });

 }

function drawChart1() {
    $.ajax({
        url: "/filmer",
        dataType: "json",
        success: function (jsonData) {
        var data = new google.visualization.DataTable();

            data.addColumn('number');
            data.addColumn('number');
			
            for(var i = 0; i < jsonData.length; i++){
				
				var d = jsonData[i].date;
				//console.log(d);
				
                data.addRow([jsonData[i].id,parseInt(d)]);
            }
      
         var options = {
        vAxis: {title: 'Year',  titleTextStyle: {color: 'blue'}},
        hAxis: {title: 'ID',  titleTextStyle: {color: 'blue'}},}
        
          var chart = new google.visualization.LineChart(document.getElementById('line_chart'));
        chart.draw(data, options);


        }
    });

 }
 
function drawChart2() {
    $.ajax({
        url: "/filmer",
        dataType: "json",
        success: function (jsonData) {
        var data = new google.visualization.DataTable();

            data.addColumn('string');
            data.addColumn('number');

            for(var i = 0; i < jsonData.length; i++){
				var h = jsonData[i].href;
				console.log(h);
				var d = jsonData[i].date;
				//console.log(d);
                data.addRow([h,parseInt(d)]);
            }
      
         var options = {
          title: 'ColumnChart',
            vAxis: {title: 'Year',  titleTextStyle: {color: 'red'}},
            hAxis: {title: 'URL',  titleTextStyle: {color: 'red'}},
        };
          var chart = new google.visualization.ColumnChart(document.getElementById('column_chart1'));
        chart.draw(data, options);


        }
    });

 }