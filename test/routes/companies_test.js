const request = require('supertest');
const expect = require('chai').expect;
const app = require('../../app.js');

describe('GET /companies', function() {
    it('responds with json', async function() {
        const response = await request(app)
            .get('/companies')
            .set('Accept', 'application/json')
        expect("Content-Type", /json/)
        expect(response.status).equals(200);
    });

    it('returns a full list of companies', async function() {
        const response = await request(app)
            .get('/companies')
            .set('Accept', 'application/json')
        expect("Content-Type", /json/)
        expect(response.status).equals(200)
        expect(response.body.length).equals(100)
    });

    it('searching by company name returns a filtered list of companies', async function() {
        const searchName = 'Works'
        const response = await request(app)
            .get(`/companies?name=${searchName}`)
            .set('Accept', 'application/json')
        expect("Content-Type", /json/)
        expect(response.status).equals(200)
        expect(response.body.length).equals(4)
        expect(response.body[0].company_name.toLowerCase()).includes(searchName.toLowerCase())
    });
});
