$(function() {
    Morris.Donut({
        element: 'event-donut-chart',
        data:
			[
				{ label: "function()",       value: 41714 },
				{ label: "createTokenProxy", value: 16043 },
				{ label: "approve",          value: 5106  },
				{ label: "other",            value: 10  },
			],
        resize: true
    });

});
