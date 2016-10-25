require('babel-register')({
  "presets": ["es2015"]
});

const expect = require('chai').expect;
const { graphql } = require('graphql');
const schema = require('../graphql/schema');

describe('SCHEMA', () => {
  it("can be imported", () => {
    expect(schema).to.be.ok;
  });
});
