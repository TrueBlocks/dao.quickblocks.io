var objectName    =   '#detailRecoveryChart';
var chartTitle    =   'Detail of Recovery Period by Function';
var chartSubTitle =   '2016-07-20 01:20:40 UTC - 2016-09-01 00:00:00 UTC';
// One per axis
var yAxisTitles   = [ 'Number of Function Calls' ];

// One per series
var seriesNames   = [ 'approve','transferFrom','transfer','withdraw', ];
var suffix        = [ '','','','', ];
var type          = [ 'areaspline','column','column','column', ];

// X values
var xValues       = [
	[ '07-20','07-21','07-22','07-23','07-24','07-25','07-26','07-27','07-28','07-29','07-30','07-31','08-01','08-02','08-03','08-04','08-05','08-06','08-07','08-08','08-09','08-10','08-11','08-12','08-13','08-14','08-15','08-16','08-17','08-18','08-19','08-20','08-21','08-22','08-23','08-24','08-25','08-26','08-27','08-28','08-29','08-30','08-31', ],
	];

// Y values, one per series
var yValues = [
	// approve
	[ 424,2366,1084,633,579,650,466,460,400,289,771,144,164,217,172,138,108,83,70,59,78,90,83,63,57,39,59,63,1060,39,44,41,32,36,51,62,333,49,34,64,57,73,87, ],

	// transferFrom
	[ 163,371,94,188,84,120,86,124,66,15,80,39,34,52,48,34,22,17,11,30,13,21,22,38,22,6,9,21,10,5,8,16,13,14,23,36,19,17,9,13,16,12,17, ],

	// transfer
	[ 335,604,342,366,608,616,460,400,333,208,173,137,157,148,168,80,76,55,50,87,50,77,80,97,79,28,38,51,23,33,37,39,38,25,83,151,80,54,34,55,45,43,58, ],

	// withdraw
	[ 0,2069,949,516,647,694,486,329,256,180,120,111,118,121,135,144,117,76,77,81,80,101,95,102,91,46,60,69,1037,43,41,48,43,32,87,124,79,65,45,63,55,78,71, ],


	];

$(function () {
    $(objectName).highcharts({
		plotOptions: {
			areaspline: { lineColor:'#666666',lineWidth:1,marker:{enabled:false,} },
			column:     { pointWidth:15 },
			spline:     { color:'blue',lineWidth:1,marker:{enabled:false,} },
			series:     { stacking:'normal',animation: {duration: 400,} }
		},
		chart:       {zoomType:'xy'},
		title:       {text:chartTitle},
		subtitle:    {text:chartSubTitle},
		xAxis:      [{categories:xValues[0],crosshair:true,}],
        yAxis:      [
			{ title:{text:yAxisTitles[0],style:{color:yColors[0]}}, labels:{format:'{value} '+suffix[0],style:{color:yColors[0]}},opposite:false,endOnTick:false,min:0,max:2600,tickInterval:650 },
		],
        series:     [
			{name:seriesNames[0],data:yValues[0],tooltip:{valueSuffix:suffix[0]},type:type[0],yAxis:0,color:yColors[0+1],},
			{name:seriesNames[1],data:yValues[1],tooltip:{valueSuffix:suffix[1]},type:type[1],yAxis:0,color:yColors[1+1],},
			{name:seriesNames[2],data:yValues[2],tooltip:{valueSuffix:suffix[2]},type:type[2],yAxis:0,color:yColors[2+1],},
			{name:seriesNames[3],data:yValues[3],tooltip:{valueSuffix:suffix[3]},type:type[3],yAxis:0,color:yColors[3+1],},

		],
		tooltip:{shared:true},
    });
});
var yColors= Highcharts.getOptions().colors;
