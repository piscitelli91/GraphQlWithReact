var fs = require('fs')
var path = require('path')
var graphql = require('graphql').graphql
var introspectionQuery = require('graphql/utilities').introspectionQuery
var schema = require('../schema')

graphql(schema, introspectionQuery).then(function(result) {
  if (result.errors) return console.error(result.errors) // eslint-disable-line no-console
  fs.writeFileSync(path.join(__dirname, '../schema.json'), JSON.stringify(result, null, 2))
})
