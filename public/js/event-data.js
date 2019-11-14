$(function() {

    Morris.Donut({
        element: 'event-donut-chart',
        data:
			[
				{ label: "Download Sales",   value: 12 },
				{ label: "In-Store Sales",   value: 30 },
				{ label: "Mail-Order Sales", value: 20 }
			],
        resize: true
    });

    Morris.Bar({
        element: 'event-bar-chart',
        data:
			[
				{ y: '2006', a: 100, b: 90 },
				{ y: '2007', a: 75,  b: 65 },
				{ y: '2008', a: 50,  b: 40 },
				{ y: '2009', a: 75,  b: 65 },
				{ y: '2010', a: 50,  b: 40 },
				{ y: '2011', a: 75,  b: 65 },
				{ y: '2012', a: 100, b: 90 }
			],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Bar({
        element: 'event-bar-chart2',
        data:
			[
				{ y: '2006', a: 100, b: 190 },
				{ y: '2007', a: 72,  b: 165 },
				{ y: '2008', a: 12,  b: 140 },
				{ y: '2009', a: 10,  b: 165 },
				{ y: '2010', a: 12,  b: 140 },
				{ y: '2011', a: 75,  b: 165 },
				{ y: '2012', a: 100, b: 110 }
			],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Line({
        element: 'event-line-chart',
        data:
			[
				{ y: '2006', a: 100, b: 190 },
				{ y: '2007', a: 72,  b: 165 },
				{ y: '2008', a: 12,  b: 140 },
				{ y: '2009', a: 10,  b: 165 },
				{ y: '2010', a: 12,  b: 140 },
				{ y: '2011', a: 75,  b: 165 },
				{ y: '2012', a: 100, b: 110 }
			],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
