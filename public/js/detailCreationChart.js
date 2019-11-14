var objectName    =   '#detailCreationChart';
var chartTitle    =   'Detail of Creation Period by Function';
var chartSubTitle =   '2016-04-28 09:00:00 UTC - 2016-05-28 09:00:00 UTC';
// One per axis
var yAxisTitles   = [ 'Number of Function Calls' ];

// One per series
var seriesNames   = [ 'createTokenProxy','approve','function()', ];
var suffix        = [ '','','', ];
var type          = [ 'column','areaspline','column', ];

// X values
var xValues       = [
	[ '04-30','05-01','05-02','05-03','05-04','05-05','05-06','05-07','05-08','05-09','05-10','05-11','05-12','05-13','05-14','05-15','05-16','05-17','05-18','05-19','05-20','05-21','05-22','05-23','05-24','05-25','05-26','05-27','05-28', ],
	];

// Y values, one per series
var yValues = [
	// createTokenProxy
	[ 9,306,177,170,156,135,102,101,109,300,340,377,437,1174,2751,1249,629,744,671,586,603,475,352,379,387,389,406,747,1782, ],

	// approve
	[ 210,100,1,100,0,200,0,0,0,300,200,501,0,200,0,200,0,0,356,1,0,0,250,0,10,102,18,420,1937, ],

	// function()
	[ 5,3331,1297,1057,865,808,956,1032,987,1145,1426,1539,2305,2798,4891,3065,1041,1110,1201,1127,1198,922,725,747,910,744,789,1051,2642, ],


	];

$(function () {
    $(objectName).highcharts({
		plotOptions: {
			areaspline: { lineColor:'#666666',lineWidth:1,marker:{enabled:false,} },
			column:     { pointWidth:15 },
			spline:     { color:'blue',lineWidth:1,marker:{enabled:false,} },
			series:     { animation: {duration: 400,} }
		},
		chart:       {zoomType:'xy'},
		title:       {text:chartTitle},
		subtitle:    {text:chartSubTitle},
		xAxis:      [{categories:xValues[0],crosshair:true,}],
        yAxis:      [
			{ title:{text:yAxisTitles[0],style:{color:yColors[0]}}, labels:{format:'{value} '+suffix[0],style:{color:yColors[0]}},opposite:false,endOnTick:false,min:0,max:5200,tickInterval:1300 },
		],
        series:     [
			{name:seriesNames[0],data:yValues[0],tooltip:{valueSuffix:suffix[0]},type:type[0],yAxis:0,color:yColors[0+1],},
			{name:seriesNames[1],data:yValues[1],tooltip:{valueSuffix:suffix[1]},type:type[1],yAxis:0,color:yColors[1+1],},
			{name:seriesNames[2],data:yValues[2],tooltip:{valueSuffix:suffix[2]},type:type[2],yAxis:0,color:yColors[2+1],},

		],
		tooltip:{shared:true},
    });
});
var yColors= Highcharts.getOptions().colors;
