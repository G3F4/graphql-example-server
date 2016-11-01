require('babel-register')({ presets: ['es2015'] });

const expect = require('chai').expect;
const { graphql } = require('graphql');
const schema = require('../graphql/schema');

describe('SCHEMA', () => {
  it('can be imported', () => {
    expect(schema).to.be.ok;
    expect(graphql).to.be.ok;
  });
  it('returns schema types', (done) => {
    const queryDocument = `{
      __schema {
        types { 
          name
        }
      }
    }`;
    
    graphql(schema.default, queryDocument).then((result) => {
      expect(result).to.have.property('data');
      expect(result.data).to.have.property('__schema');
      expect(result.data['__schema']).to.have.property('types');
      done();
    }, done);
  });
});
