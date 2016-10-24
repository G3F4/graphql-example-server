import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      // curl -XPOST -H "Content-Type:application/graphql"  -d 'query Query { me }' http://localhost:3000/graphql
      me: {
        type: GraphQLString,
        resolve: () => 'Gitara siema!'
      }
    }
  })
});

export default schema;