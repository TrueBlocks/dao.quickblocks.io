var express = require('express');
var router = express.Router();

function routeOne(a)
{
//nconf.save(function (err) {
//	if (err) {
//		console.error(err.message);
//		return;
//	}
//	console.log('Configuration saved successfully.');
//});
	router.get("/"+a, function(req, res) {
		req.nconf.load()
		res.render(a, {
			"nconf" : req.nconf,
			"db" : req.db
		});
	});
}

router.get('/', function(req, res) {
	req.nconf.load()
	res.render('overview', {
		"nconf" : req.nconf,
		"db" : req.db
	});
});

router.get('/index', function(req, res) {
	req.nconf.load()
	res.render('overview', {
		"nconf" : req.nconf,
		"db" : req.db
	});
});

routeOne('viewAccounts');
routeOne('overview');
routeOne('detailCreation');
routeOne('detailOperational');
routeOne('detailPostHack');
routeOne('detailRecovery');
routeOne('sumCurator');
routeOne('viewTransactions');

routeOne('chartAccounts');
routeOne('chartEvents');
routeOne('chartFunctions');
routeOne('chartTransactions');

routeOne('srcSolidity');
routeOne('srcABI');
routeOne('srcGas');

routeOne('settings');

routeOne('usFAQ');
routeOne('usAbout');
routeOne('usContact');

routeOne('otherFlotChart');
routeOne('otherMorrisChart');
routeOne('otherTables');
routeOne('otherForms');
routeOne('otherButtons');
routeOne('otherPanels');
routeOne('otherNotifications');
routeOne('otherTypography');
routeOne('otherIcons');
routeOne('otherGrid');
routeOne('otherBlank');
routeOne('otherLogin');

routeOne('otherEthSlurp');

router.get('/otherEditForm', function(req,res) {
	res.render('otherEditForm', { title: 'Add new item' });
});

router.post('/otherEditForm', function(req,res) {

	// set the internal database
	var db = req.db;

	// get the form data using the 'name' attibutes
	var hash = req.body.hash;
	var from = req.body.from;

	// set the collection we are using
	var collection = db.get('usercollection');

	// submit the new data to the database
	collection.insert({
		"hash": hash,
		"from": from
	}, function (err, doc) {
		if (err) {
			// if it failed, return the error
			res.send("There was a problem.");
		} else {
			res.redirect("/otherEthSlurp");
		}
	});
});

module.exports = router;
