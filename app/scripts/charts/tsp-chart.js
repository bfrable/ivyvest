

jQuery(function () {
    
    Highcharts.setOptions({
        colors: ['#aed136', '#2d6267', '#b694ff', '#ff42a9', '#57656b', '#602685', '#FF9655', '#FFF263', '#6AF9C4']
    });

    $('.tsp-chart-container').highcharts({
        chart: {
            backgroundColor: 'transparent',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
        },
        title: {
            text: '',
            align: 'center',
            verticalAlign: 'middle',
            y: 0
        },
        exporting: {
         enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            backgroundColor: null,
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            headerFormat: '<span class="key">{point.key}</span> ',
            pointFormat: '<b class="value">{point.y}</b>',
            style: {
                padding: 0,
                color: '#ffffff'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: 20,
                    connectorColor: 'transparent',
                    style: {
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        color: '#888888'
                    },
                },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '50%'],
                borderWidth: 0,
            }
        },
        series: [{
            type: 'pie',
            name: 'Portfolio',
            innerSize: '50%',
            data: [
                ['Gold', 45.0],
                ['International Real Estate', 26.8],
                ['Tips', 12.8],
                ['Treasuries', 8.5],
                ['Emerging Markets', 5.2],
                {
                    name: 'Others',
                    y: 2.7,
                    dataLabels: {
                        enabled: true
                    }
                }
            ]
        }]
    });
});