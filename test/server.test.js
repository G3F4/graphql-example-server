require('babel-register')({
  "presets": ["es2015"]
});

const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const TEST_HOST = 'http://localhost:3000';

chai.use(chaiHttp);

describe('SERVER', () => {
    it("returns status 200", (done) => {
      chai.request(TEST_HOST)
        .get('/')
        .then((res) => {
          expect(res).to.have.status(200);
          done();
        }, done)
    });
    it("returns hello message", (done) => {
      chai.request(TEST_HOST)
        .get('/')
        .then((res) => {
          expect(res.text).to.be.equal('Hello');
          done();
        })
    });
    it("returns data from graphql endpoint", (done) => {
      chai.request(TEST_HOST)
        .post('/graphql')
        .set('Content-Type', 'application/graphql')
        .send('query Query { me }')
        .then((res) => {
          expect(res.body).to.have.property('data');
          done();
        })
    });
  });