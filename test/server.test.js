require('babel-register')({ presets: ['es2015'] });

const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const TEST_HOST = 'http://localhost:3000';

describe('SERVER', () => {
  it('returns schema types from graphql endpoint', (done) => {
    const queryDocument = `{
      __schema {
        types { 
          name
        }
      }
    }`;

    chai.request(TEST_HOST)
      .post('/graphql')
      .set('Content-Type', 'application/graphql')
      .send(queryDocument)
      .then((response) => {
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('__schema');
        expect(response.body.data['__schema']).to.have.property('types');
        done();
      })
  });
});