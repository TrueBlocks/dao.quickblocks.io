var objectName    =   '#detailPostHackChart';
var chartTitle    =   'Detail of Post Hack Period by Function';
var chartSubTitle =   '2016-06-17 03:34:48 UTC - 2016-07-20 01:20:40 UTC';
// One per axis
var yAxisTitles   = [ 'Number of Function Calls' ];

// One per series
var seriesNames   = [ 'newProposal (non-split)','splitDAO','newProposal (split)','vote','transferFrom','approve','transfer','function()', ];
var suffix        = [ '','','','','','','','', ];
var type          = [ 'column','column','column','column','column','column','column','column', ];

// X values
var xValues       = [
	[ '06-17','06-18','06-19','06-20','06-21','06-22','06-23','06-24','06-25','06-26','06-27','06-28','06-29','06-30','07-01','07-02','07-03','07-04','07-05','07-06','07-07','07-08','07-09','07-10','07-11','07-12','07-13','07-14','07-15','07-16','07-17','07-18','07-19', ],
	];

// Y values, one per series
var yValues = [
	// newProposal (non-split)
	[ 0,0,0,0,0,0,1,0,2,0,0,6,3,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],

	// splitDAO
	[ 8,35,19,5,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],

	// newProposal (split)
	[ 15,39,17,20,20,4,0,2,0,0,1,2,4,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0, ],

	// vote
	[ 104,309,32,250,48,91,102,31,6,6,8,12,13,5,1,1,2,0,130,77,51,99,81,14,7,6,2,2,0,1,0,2,0, ],

	// transferFrom
	[ 349,1062,594,355,330,400,240,158,133,386,181,142,226,199,150,99,83,68,109,149,88,94,160,176,101,97,85,110,172,603,201,890,420, ],

	// approve
	[ 185,140,698,275,128,146,112,86,43,142,61,123,91,55,58,41,40,22,108,1,1,1,3,2,2,3,104,1,3,516,25,1,1, ],

	// transfer
	[ 904,2661,1649,854,763,939,564,360,309,202,352,323,482,374,321,215,185,177,249,285,208,187,299,300,191,180,196,212,300,301,176,213,278, ],

	// function()
	[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,0,1,1,3,2,1,3,1,2, ],


	];

$(function () {
    $(objectName).highcharts({
		plotOptions: {
			areaspline: { lineColor:'#666666',lineWidth:1,marker:{enabled:false,} },
			column:     { pointWidth:10 },
			spline:     { color:'blue',lineWidth:1,marker:{enabled:false,} },
			series:     { animation: {duration: 400,} }
		},
		chart:       {zoomType:'xy'},
		title:       {text:chartTitle},
		subtitle:    {text:chartSubTitle},
		xAxis:      [{categories:xValues[0],crosshair:true,}],
        yAxis:      [
			{ title:{text:yAxisTitles[0],style:{color:yColors[0]}}, labels:{format:'{value} '+suffix[0],style:{color:yColors[0]}},opposite:false,endOnTick:false,min:0,max:3000,tickInterval:750 },
		],
        series:     [
			{name:seriesNames[0],data:yValues[0],tooltip:{valueSuffix:suffix[0]},type:type[0],yAxis:0,color:yColors[0+1],},
			{name:seriesNames[1],data:yValues[1],tooltip:{valueSuffix:suffix[1]},type:type[1],yAxis:0,color:yColors[1+1],},
			{name:seriesNames[2],data:yValues[2],tooltip:{valueSuffix:suffix[2]},type:type[2],yAxis:0,color:yColors[2+1],},
			{name:seriesNames[3],data:yValues[3],tooltip:{valueSuffix:suffix[3]},type:type[3],yAxis:0,color:yColors[3+1],},
			{name:seriesNames[4],data:yValues[4],tooltip:{valueSuffix:suffix[4]},type:type[4],yAxis:0,color:yColors[4+1],},
			{name:seriesNames[5],data:yValues[5],tooltip:{valueSuffix:suffix[5]},type:type[5],yAxis:0,color:yColors[5+1],},
			{name:seriesNames[6],data:yValues[6],tooltip:{valueSuffix:suffix[6]},type:type[6],yAxis:0,color:yColors[6+1],},
			{name:seriesNames[7],data:yValues[7],tooltip:{valueSuffix:suffix[7]},type:type[7],yAxis:0,color:yColors[7+1],},

		],
		tooltip:{shared:true},
    });
});
var yColors= Highcharts.getOptions().colors;
