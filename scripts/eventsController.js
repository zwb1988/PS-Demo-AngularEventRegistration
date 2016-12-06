var fs = require("fs");
var path = require("path");
var eventStorageDir = 'app/data/event/';
var profileStorageDir = 'app/data/profile/';

function getMaxFileId() {
    var maxId = 0;
    var fileNames = fs.readdirSync(eventStorageDir);
    for (i = 0; i < fileNames.length; i++) {
        var fileName = path.basename(fileNames[i], '.json');
        var fileNameValue = parseInt(fileName);
        if (fileNameValue > maxId) {
            maxId = fileNameValue;
        }
    }
    return maxId;
}

module.exports.get = function(req, res) {
    var event = fs.readFileSync(eventStorageDir + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};

module.exports.getAll = function(req, res) {
    var files = [];
    try {
        files = fs.readdirSync(eventStorageDir);
    } catch (e) {
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var i = 0; i < files.length; i++) {
        if (files[i].indexOf('.json') == files[i].length - 5) {
            results += fs.readFileSync(eventStorageDir + "/" + files[i]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader("Content-Type", "application/json");
    res.send(results);
    res.end();
}

module.exports.getMaxId = function(req, res) {
    res.send({ maxId: getMaxFileId() });
}

module.exports.save = function(req, res) {
    var maxId = req.params.id;
    if (parseInt(maxId).toString() === "NaN") {
        maxId = getMaxFileId() + 1;
    }
    var event = req.body;
    event.id = maxId;
    fs.writeFileSync(eventStorageDir + maxId + '.json', JSON.stringify(event));
    res.send(event);
};

module.exports.getUserProfile = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var profile = fs.readFileSync(profileStorageDir + req.params.userName + '.json', 'utf8');
    res.send(profile);
}

module.exports.getAllUserProfile = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var userNames = [];
    var fileNames = fs.readdirSync(profileStorageDir);
    for (i = 0; i < fileNames.length; i++) {
        var fileName = path.basename(fileNames[i], '.json');
        userNames.push(fileName);
    }
    res.send(userNames);
}

module.exports.saveUserProfile = function(req, res) {
    fs.writeFileSync(profileStorageDir + req.params.userName + '.json', JSON.stringify(req.body));
    res.send(req.body);
}