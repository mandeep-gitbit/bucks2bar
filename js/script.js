window.onload = function() {
    // Event to download the chart as an image
    document.getElementById('download').addEventListener('click', function() {
        var canvas = document.getElementById('myChart');
        var imgURI = canvas.toDataURL('image/png');

        var link = document.createElement('a');
        link.href = imgURI;
        link.download = 'chart.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    // Event to update the chart when the chart tab is clicked
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Event to update the chart when the chart tab is clicked
    document.querySelector('a[data-toggle="tab"][href="#chart"]').addEventListener('click', function() {
        
        var januaryIncome = Number(document.getElementById('january-income').value);
        var januaryExpenses = Number(document.getElementById('january-expenses').value);
        
        var februaryIncome = Number(document.getElementById('february-income').value);
        var februaryExpenses = Number(document.getElementById('february-expenses').value);
        
        var marchIncome = Number(document.getElementById('march-income').value);
        var marchExpenses = Number(document.getElementById('march-expenses').value);
        
        var aprilIncome = Number(document.getElementById('april-income').value);
        var aprilExpenses = Number(document.getElementById('april-expenses').value);
        
        var mayIncome = Number(document.getElementById('may-income').value);
        var mayExpenses = Number(document.getElementById('may-expenses').value);
        
        var juneIncome = Number(document.getElementById('june-income').value);
        var juneExpenses = Number(document.getElementById('june-expenses').value);
        
        var julyIncome = Number(document.getElementById('july-income').value);
        var julyExpenses = Number(document.getElementById('july-expenses').value);
        
        var augustIncome = Number(document.getElementById('august-income').value);
        var augustExpenses = Number(document.getElementById('august-expenses').value);
        
        var septemberIncome = Number(document.getElementById('september-income').value);
        var septemberExpenses = Number(document.getElementById('september-expenses').value);
        
        var octoberIncome = Number(document.getElementById('october-income').value);
        var octoberExpenses = Number(document.getElementById('october-expenses').value);
        
        var novemberIncome = Number(document.getElementById('november-income').value);
        var novemberExpenses = Number(document.getElementById('november-expenses').value);
        
        var decemberIncome = Number(document.getElementById('december-income').value);
        var decemberExpenses = Number(document.getElementById('december-expenses').value);
        
        myChart.data.datasets[0].data = [januaryIncome, februaryIncome, marchIncome, aprilIncome, mayIncome, juneIncome, julyIncome, augustIncome, septemberIncome, octoberIncome, novemberIncome, decemberIncome];
        myChart.data.datasets[1].data = [januaryExpenses, februaryExpenses, marchExpenses, aprilExpenses, mayExpenses, juneExpenses, julyExpenses, augustExpenses, septemberExpenses, octoberExpenses, novemberExpenses, decemberExpenses];
        myChart.update();
    });

}