"use strict";
function index(req, res) {
	var queryName = {"first":"","second":""};
	var query = (req.query);	
	if("first" in query){
		queryName.first = query.first;
	}
	if("second" in query){
		queryName.second = query.second;
	}
	console.log(queryName);
    res.render('index',queryName);
}
exports.index = index;
;
//# sourceMappingURL=index.js.map