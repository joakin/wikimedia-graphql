# wikimedia-graphql

A test implementation of a graphql server for Wikimedia APIs. WIP.

![test run!](./wm-graphql.gif)

## Links

* http://graphql.org/learn/schema/
* https://github.com/apollographql/apollo-server
* http://dev.apollodata.com/tools/graphql-tools/generate-schema.html
* https://github.com/apollographql/GitHunt-API/blob/master/api/schema.js

## TODO

* uselang=content for action api calls

## Questions

* Performance caracteristics (batching and composing query tree into optimized requests or sql)
* Unmarshalling and type validation on client & server
* Comparison to the action api capabilities
* Production usages (facebook, github)
* Mutations and subscriptions
* Caching