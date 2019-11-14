var objectName_3    =   '#detailOperationalChart_3';
var chartTitle_3    =   'Voting, Proposals, and Splitting the DAO';
var chartSubTitle_3 =   '2016-05-30 09:00:00 UTC - 2016-06-17 03:34:48 UTC';
// One per axis
var yAxisTitles_3   = [ 'Number of Function Calls','Num Votes' ];

// One per series
var seriesNames_3   = [ 'vote','newProposal (non-split)','newProposal (split)','splitDAO', ];
var suffix_3        = [ '','','','', ];
var type_3          = [ 'areaspline','column','column','column', ];

// X values
var xValues_3       = [
	[ '05-30','05-31','06-01','06-02','06-03','06-04','06-05','06-06','06-07','06-08','06-09','06-10','06-11','06-12','06-13','06-14','06-15','06-16', ],
	];

// Y values, one per series
var yValues_3 = [
	// vote
	[ 198,328,418,232,196,226,227,225,206,143,167,236,212,243,131,127,88,87, ],

	// newProposal (non-split)
	[ 1,2,0,0,1,1,0,1,0,0,0,0,0,0,2,0,0,0, ],

	// newProposal (split)
	[ 5,4,12,8,2,1,6,0,4,4,6,3,4,1,9,8,15,15, ],

	// splitDAO
	[ 0,0,0,0,0,0,1,3,6,4,10,2,1,1,4,9,5,5, ],


	];

$(function () {
    $(objectName_3).highcharts({
		plotOptions: {
			areaspline: { lineColor:'#666666',lineWidth:1,marker:{enabled:false,} },
			column:     { pointWidth:10 },
			spline:     { color:'blue',lineWidth:1,marker:{enabled:false,} },
			series:     { animation: {duration: 400,} }
		},
		chart:       {zoomType:'xy'},
		title:       {text:chartTitle_3},
		subtitle:    {text:chartSubTitle_3},
		xAxis:      [{categories:xValues_3[0],crosshair:true,}],
        yAxis:      [
			{ title:{text:yAxisTitles_3[0],style:{color:yColors[0]}}, labels:{format:'{value} '+suffix_3[0],style:{color:yColors[0]}},opposite:false,endOnTick:false,min:0,max:15,tickInterval:3 },
			{ title:{text:yAxisTitles_3[1],style:{color:yColors[1]}}, labels:{format:'{value} '+suffix_3[1],style:{color:yColors[1]}},opposite:true,endOnTick:false,min:0,max:500,tickInterval:100 },
		],
        series:     [
			{name:seriesNames_3[0],data:yValues_3[0],tooltip:{valueSuffix:suffix_3[0]},type:type_3[0],yAxis:1,color:yColors[0+1],},
			{name:seriesNames_3[1],data:yValues_3[1],tooltip:{valueSuffix:suffix_3[1]},type:type_3[1],yAxis:0,color:yColors[1+1],},
			{name:seriesNames_3[2],data:yValues_3[2],tooltip:{valueSuffix:suffix_3[2]},type:type_3[2],yAxis:0,color:yColors[2+1],},
			{name:seriesNames_3[3],data:yValues_3[3],tooltip:{valueSuffix:suffix_3[3]},type:type_3[3],yAxis:0,color:yColors[3+1],},

		],
		tooltip:{shared:true},
    });
});
var yColors= Highcharts.getOptions().colors;
