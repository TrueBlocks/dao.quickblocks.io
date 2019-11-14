var objectName_1    =   '#detailOperationalChart_1';
var chartTitle_1    =   '1st Day of Period';
var chartSubTitle_1 =   '2016-05-29 09:00:00 UTC';
// One per axis
var yAxisTitles_1   = [ 'Number of Function Calls' ];

// One per series
var seriesNames_1   = [ 'vote','transferFrom','approve','transfer', ];
var suffix_1        = [ '','','','', ];
var type_1          = [ 'column','column','column','column', ];

// X values
var xValues_1       = [
	[ '05-29', ],
	];

// Y values, one per series
var yValues_1 = [
	// vote
	[ 134, ],

	// transferFrom
	[ 5553, ],

	// approve
	[ 5448, ],

	// transfer
	[ 4686, ],


	];

$(function () {
    $(objectName_1).highcharts({
		plotOptions: {
			areaspline: { lineColor:'#666666',lineWidth:1,marker:{enabled:false,} },
			column:     { pointWidth:10 },
			spline:     { color:'blue',lineWidth:1,marker:{enabled:false,} },
			series:     { animation: {duration: 400,} }
		},
		chart:       {zoomType:'xy'},
		title:       {text:chartTitle_1},
		subtitle:    {text:chartSubTitle_1},
		xAxis:      [{categories:xValues_1[0],crosshair:true,}],
        yAxis:      [
			{ title:{text:yAxisTitles_1[0],style:{color:yColors[0]}}, labels:{format:'{value} '+suffix_1[0],style:{color:yColors[0]}},opposite:false,endOnTick:false,min:0,max:5800,tickInterval:1450 },
		],
        series:     [
			{name:seriesNames_1[0],data:yValues_1[0],tooltip:{valueSuffix:suffix_1[0]},type:type_1[0],yAxis:0,color:yColors[0+1],},
			{name:seriesNames_1[1],data:yValues_1[1],tooltip:{valueSuffix:suffix_1[1]},type:type_1[1],yAxis:0,color:yColors[1+1],},
			{name:seriesNames_1[2],data:yValues_1[2],tooltip:{valueSuffix:suffix_1[2]},type:type_1[2],yAxis:0,color:yColors[2+1],},
			{name:seriesNames_1[3],data:yValues_1[3],tooltip:{valueSuffix:suffix_1[3]},type:type_1[3],yAxis:0,color:yColors[3+1],},

		],
		tooltip:{shared:true},
    });
});
var yColors= Highcharts.getOptions().colors;
