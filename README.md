# STEPS

##﻿INITIAL ENVIRONMENT SET UP FOR EXPRESS APP

1. create project folder
2. initialize npm project
3. set up common startup file like: '.gitignore'
4. install babel-register with npm saving dependencies(to use es2015+ features)
5. create index.js, the entry file in project root folder and within:
	* use require to import babel-register(creates hook)

## CREATE EXPRESS SERVER

1. install express.js with npm and save flag
2. create server.js in project root folder and within:
	* import express
	* define port number
	* create express application
	* define routing for '/' endpoint
	* start server to listening
3. index.js:
	* require server.js
4. install express.js with npm and save flag
5. add script starting server to package.json
6. start server
7. test server with CURL

## ??ADDING TEST ENVIRONMENT

1. install chai, chai-http, mocha as development dependencies
2. create test folder
3. add to package.json test script

## ??ADDING TEST FOR SERVER

1. create server.test.js file in test folder, within:
    * use babel-register hook with es2015 presets for test environment
    * require chai, chai-http and expect for chai
    * enable chai to use http request
    * define test HOST
    * describe test for server
    * check if request to server return:
        * status 200
        * hello message
    * !remember to call done callback after async operation are done

## ?ADDING NODEMON FOR AUTOMATIC RESTART SERVER

1. install nodemon with npm and development save flag
2. add to package.json script starting server in watch mode
3. test server restart

## DEFINING GRAPHQL SCHEMA

1. install graphql and body-parser with npm saving dependencies
2. create folder called 'graphql'
3. inside new folder create schema.js file, within:
	* import necessary graphql types
	* create scheme
	* export scheme

## ??ADD SCHEMA BASIC TEST

1. create scheme.test.js in test folder, within:
    * require babel-register hook
    * require expect from chai
    * require graphql
    * require schema
    * describe test group
    * check if:
        * schema and graphql are imported
        * schema execution with simple query returns data

## ADDING GRAPHQL QUERY EXECUTION IN EXPRESS APPLICATION

1. import graphql, body-parser and scheme.js
2. add use call to application as first call and enable body parsing for graphql application type
3. set '/graphql' route to execute graphql function in callback.
4. graphql execution returns Promise. Use it to resolve parsed data.
5. send data to client
6. add new test to server.test.js checking '/graphql' route

## USING EXPRESS-GRAPHQL AND GRAPHIQL

1. install epxress-graphql and save dependencies
2. in server.js file:
    * import express-graphql
    * use express-graphql in middleware for '/graphql' route
    * delete old routing for '/graphql'
    * delete body-parser
    * remove all unused code
3. open http://localhost:3000/graphql in browser
4. check docs and test query for me field
5. run tests
6. remove unused modolues in package.json
