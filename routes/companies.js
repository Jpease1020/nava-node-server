var express = require('express');
const {mockData} = require('../testData')
var router = express.Router();

router.get('/', function(req, res, next) {
    if(req.query.name){
        let result = mockData.filter((comp) => {
            return comp['company_name'].toLowerCase().includes(req.query.name.toLowerCase())
        })
        res.json(result);
    } else {
        res.json(mockData);
    }
});

module.exports = router;
