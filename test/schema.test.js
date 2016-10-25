require('babel-register')({
  "presets": ["es2015"]
});

const expect = require('chai').expect;
const { graphql } = require('graphql');
const schema = require('../graphql/schema');

describe('SCHEMA', () => {
  it("can be imported", () => {
    expect(schema).to.be.ok;
    expect(graphql).to.be.ok;
  });
  it("process query with 'me' field only", (done) => {
    graphql(schema.default, 'query Query { me }').then((result) => {
      expect(result).to.have.property('data');
      done();
    }, done);
  });
});
