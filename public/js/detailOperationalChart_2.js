var objectName_2    =   '#detailOperationalChart_2';
var chartTitle_2    =   'Remaining Days of Operational Period - All Functions';
var chartSubTitle_2 =   '2016-05-30 09:00:00 UTC - 2016-06-17 03:34:48 UTC';
// One per axis
var yAxisTitles_2   = [ 'Number of Function Calls' ];

// One per series
var seriesNames_2   = [ 'vote','transfer','transferFrom','approve','newProposal (non-split)','newProposal (split)','splitDAO', ];
var suffix_2        = [ '','','','','','','', ];
var type_2          = [ 'areaspline','column','column','column','column','column','column', ];

// X values
var xValues_2       = [
	[ '05-30','05-31','06-01','06-02','06-03','06-04','06-05','06-06','06-07','06-08','06-09','06-10','06-11','06-12','06-13','06-14','06-15','06-16', ],
	];

// Y values, one per series
var yValues_2 = [
	// vote
	[ 198,328,418,232,196,226,227,225,206,143,167,236,212,243,131,127,88,87, ],

	// transfer
	[ 1375,902,873,522,439,414,329,343,512,517,451,428,296,339,545,692,706,434, ],

	// transferFrom
	[ 588,364,362,201,133,136,102,116,157,162,245,210,262,362,209,232,217,148, ],

	// approve
	[ 497,247,252,152,139,95,82,93,97,114,98,83,63,62,99,142,117,77, ],

	// newProposal (non-split)
	[ 1,2,0,0,1,1,0,1,0,0,0,0,0,0,2,0,0,0, ],

	// newProposal (split)
	[ 5,4,12,8,2,1,6,0,4,4,6,3,4,1,9,8,15,15, ],

	// splitDAO
	[ 0,0,0,0,0,0,1,3,6,4,10,2,1,1,4,9,5,5, ],


	];

$(function () {
    $(objectName_2).highcharts({
		plotOptions: {
			areaspline: { lineColor:'#666666',lineWidth:1,marker:{enabled:false,} },
			column:     { pointWidth:10 },
			spline:     { color:'blue',lineWidth:1,marker:{enabled:false,} },
			series:     { animation: {duration: 400,} }
		},
		chart:       {zoomType:'xy'},
		title:       {text:chartTitle_2},
		subtitle:    {text:chartSubTitle_2},
		xAxis:      [{categories:xValues_2[0],crosshair:true,}],
        yAxis:      [
			{ title:{text:yAxisTitles_2[0],style:{color:yColors[0]}}, labels:{format:'{value} '+suffix_2[0],style:{color:yColors[0]}},opposite:false,endOnTick:false,min:0,max:1600,tickInterval:400 },
		],
        series:     [
			{name:seriesNames_2[0],data:yValues_2[0],tooltip:{valueSuffix:suffix_2[0]},type:type_2[0],yAxis:0,color:yColors[0+1],},
			{name:seriesNames_2[1],data:yValues_2[1],tooltip:{valueSuffix:suffix_2[1]},type:type_2[1],yAxis:0,color:yColors[1+1],},
			{name:seriesNames_2[2],data:yValues_2[2],tooltip:{valueSuffix:suffix_2[2]},type:type_2[2],yAxis:0,color:yColors[2+1],},
			{name:seriesNames_2[3],data:yValues_2[3],tooltip:{valueSuffix:suffix_2[3]},type:type_2[3],yAxis:0,color:yColors[3+1],},
			{name:seriesNames_2[4],data:yValues_2[4],tooltip:{valueSuffix:suffix_2[4]},type:type_2[4],yAxis:0,color:yColors[4+1],},
			{name:seriesNames_2[5],data:yValues_2[5],tooltip:{valueSuffix:suffix_2[5]},type:type_2[5],yAxis:0,color:yColors[5+1],},
			{name:seriesNames_2[6],data:yValues_2[6],tooltip:{valueSuffix:suffix_2[6]},type:type_2[6],yAxis:0,color:yColors[6+1],},

		],
		tooltip:{shared:true},
    });
});
var yColors= Highcharts.getOptions().colors;
