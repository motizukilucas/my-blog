var hamburger = $(".hamburger");

hamburger.click(function() {
    hamburger.toggleClass("is-active");
});

// ChartJS
var config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                4,
                5,
                1,
                1,
            ],
            backgroundColor: [
            'rgb(255, 99, 132)', // red
            'rgb(54, 162, 235)', // blue
            'rgb(255, 205, 86)', //yellow
            'rgb(75, 192, 192)', // green
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Front-end',
            'Back-end',
            'Infrastrucutre',
            'Others',
        ]
    },
    options: {
        responsive: true
    }
};

window.onload = function() {
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myPie = new Chart(ctx, config);
};
