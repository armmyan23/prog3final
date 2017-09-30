
google.charts.load('45', { packages: ['table'] });

google.charts.setOnLoadCallback(drawTable);

function drawTable() {
    
    $.ajax({
        url: "/filmer",
        dataType: "json",
        success: function (jsonData) {
            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Id');
            data.addColumn('string', 'Name');
            data.addColumn('number', 'Rating');
            data.addColumn('number', 'Date');

            for (var i = 0; i < jsonData.length; i++) {
                 data.addRow([jsonData[i].id, jsonData[i].name, jsonData[i].rating, jsonData[i].date]);
            }

            var options = {
                allowHtml: true,
                showRowNumber: true,
                width: '100%',
                height: '100%'
            };

            var table = new google.visualization.Table(document.getElementById('barformat_div'));
            table.draw(data,options);
        }
    });
}


$(window).resize(function () {
    drawTable();
});
