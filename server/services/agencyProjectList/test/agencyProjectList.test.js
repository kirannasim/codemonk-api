const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;
const request = require('supertest');
chai.use(chaiHttp);
const jwt = require('jsonwebtoken');
const tokenOptionalInfo = {
    algorithm: 'HS256',
    expiresIn: 86400
};
// agency User
const agencyUser = {
    id: '5f475a9ef25e122eb21d68a8',
    email: 'agency@mailinator.com'
};
const requestPayload = {
    token: jwt.sign(agencyUser, process.env.JWT_SECRET, tokenOptionalInfo)
};

const agencyUserNoTalents = {
    id: '5f4754eb3fc8842306a8220d',
    email: 'agencystart@mailinator.com'
};
const requestPayloadNoTalents = {
    token: jwt.sign(agencyUserNoTalents, process.env.JWT_SECRET, tokenOptionalInfo)
};
describe('Agency get project list', () => {
    try {
        it('As a Agency, I can get my project list based on query params', async () => {
            const query = {
                status: -1,
                limit: 10,
                page: 2
            };
            const res = await request(process.env.BASE_URL)
                .get('/agency/project/list')
                .set({ Authorization: requestPayload.token })
                .query(query);
            expect(res.body.status).to.be.status;
            assert.equal(res.statusCode, 200);
        });

        it('As a Agency, I can my get project list based on query params', async () => {
            const query = {
                limit: 10,
                page: 2
            };
            const res = await request(process.env.BASE_URL)
                .get('/agency/project/list')
                .set({ Authorization: requestPayload.token })
                .query(query);
            expect(res.body.status).to.be.status;
            assert.equal(res.statusCode, 200);
        });

        it('As a Agency, I can get my project list based on query params', async () => {
            const query = {
                status: 1
            };
            const res = await request(process.env.BASE_URL)
                .get('/agency/project/list')
                .set({ Authorization: requestPayload.token })
                .query(query);
            expect(res.body.status).to.be.status;
            assert.equal(res.statusCode, 200);
        });

        it('As a Agency, I can get my project list based on query params', async () => {
            const query = {
            };
            const res = await request(process.env.BASE_URL)
                .get('/agency/project/list')
                .set({ Authorization: requestPayloadNoTalents.token })
                .query(query);
            expect(res.body.status).to.be.status;
            assert.equal(res.statusCode, 200);
        });
    } catch (exception) {
        CONSOLE_LOGGER.error(exception);
    }
});

