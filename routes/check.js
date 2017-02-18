var request = require('request');

function check(req, res) {
    request({
        url: 'https://tmi.twitch.tv/group/user/' + req.body.nameA.toLowerCase() + '/chatters',
        method: "GET"
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var userA = JSON.parse(body).chatters;
            var listA = [];
            for (var type in userA)
                for (var name in userA[type])
                    listA.push(userA[type][name]);
            request({
                url: 'https://tmi.twitch.tv/group/user/' + req.body.nameB.toLowerCase() + '/chatters',
                method: "GET"
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var userB = JSON.parse(body).chatters;
                    var listB = [];
                    for (var type in userB)
                        for (var name in userB[type])
                            listB.push(userB[type][name]);
                    var listC = [];
                    for (var i in listA){
                    	if(listA[i]!="jibot"&&listA[i]!="nightbot")
                        	if (listB.indexOf(listA[i]) > -1)
                            	listC.push(listA[i]);
                    }
                    
                    res.render('Jade1', {list: listC });
                }
                else
                    res.send("error");
            });

        }
        else
            res.send("error");
    });
}



exports.check = check;