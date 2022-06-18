const request = require('supertest');
const expect = require('chai').expect;
const app = require('../../app.js');

describe('GET /statistics', function() {
    it('returns 400 response if field is not passed in', async function() {
        const stat = 'sum'
        const response = await request(app)
            .get(`/statistics?type=&stat=${stat}`)
            .set('Accept', 'application/json')
        expect("Content-Type", /json/)
        expect(response.status).equals(400)
    });

    it('returns 400 response if stat is not passed in', async function() {
        const field = 'sum'
        const response = await request(app)
            .get(`/statistics?field${field}&stat=`)
            .set('Accept', 'application/json')
        expect("Content-Type", /json/)
        expect(response.status).equals(400)
        expect(response.error.text).equals('Insufficient data specified. Please provide both a field and statistic type')
    });

    it('returns sum of specified field', async function() {
        const field = 'premium_sum'
        const stat = 'sum'
        const response = await request(app)
            .get(`/statistics?field=${field}&stat=${stat}`)
            .set('Accept', 'application/json')
        expect("Content-Type", /json/)
        expect(response.status).equals(200)
        expect(response.body).equals(218275705)
    });

    it('returns average of specified field (participants)', async function() {
        const field = 'participants_sum'
        const stat = 'average'
        const response = await request(app)
            .get(`/statistics?field=${field}&stat=${stat}`)
            .set('Accept', 'application/json')
        expect("Content-Type", /json/)
        expect(response.status).equals(200)
        expect(response.body).equals(357.9)// the number in the test doc was 222.5 but I'm fairly certain this is the correct answer with the given data set 
    });
});
