var express = require('express');
const {mockData} = require('../testData')
var router = express.Router();

// Since stats isn't a relation object to a company as in /companies/{:id}/employees/{:id} I decided it should be a separate route  
router.get('/', function(req, res, next) {
    const field = req.query.field
    const stat = req.query.stat

    if(!field || !stat){
        res.status(400).send('Insufficient data specified. Please provide both a field and statistic type');
    }

    let data = mockData.map((comp) => {
        return comp[field]
    })

    //In a prod app I would move all crunching of data to the service layer
    const dataTypes = ["employee_count", "premium_sum", "broker_commission_sum", "participants_sum"]
    if(dataTypes.includes(field)){
        if(stat === 'sum'){
            data = findSum(data)
        } else if(stat === 'average'){
            data = findAverage(data)
        }
    }

    res.json(data);
});

const findSum = (data) => {
    return data.reduce((currentValue, a) => currentValue + a, 0);
}

const findAverage = (data) => {
    const sum = findSum(data)
    return sum/data.length
}

module.exports = router;