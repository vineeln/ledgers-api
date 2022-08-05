  522  createdb neoledgers_dev
  523  yarn add uuid
  524  cd src
  525  mv model entities
  526  yarn -D add @types/uuid
  527  npx mikro-orm migration:create 
  528  cd ..
  529  npx mikro-orm migration:create 
  530  npx mikro-orm migration:create 
  531  npx mikro-orm migration:up 
  532  yarn add express apollo-servver-express graphql type-graphql
  533  yarn add express apollo-server-express graphql type-graphql
  534  history
  535  yarn add -D @types/express
  yarrn add class-validator 
  yarn add -D @types/validator


  curl --request POST \
  --header 'content-type: application/json' \
  --url http://localhost:4000/graphql \
  --data '{"query":"query { __typename }"}'

  #run watch task
  CMD + Shift + B
  #debugging
  F5
  #migrations
  npx typeorm migration:run
  npx typeorm migration:generate

  #creates migration files
  npx typeorm migration:generate -c ledgers -n init -d src/migrations/
  #executes migrations on DB
  npx ts-node ./node_modules/typeorm/cli.js migration:run -c ledgers

#Learn TypeScript
https://www.typescriptlang.org/docs/handbook/2/basic-types.html
https://blog.logrocket.com/types-vs-interfaces-in-typescript/

#node
  https://stackoverflow.com/questions/44764004/ts-node-is-not-recognized-as-an-internal-or-external-command-operable-program
  https://courses.reactsecurity.io/view/courses/advanced-react-security-patterns/339440-authentication-and-authorization-for-graphql/974184-add-the-user-to-the-graphql-context-object
  https://courses.reactsecurity.io/

#UI
##dashboard: horizon
https://github.com/horizon-ui/horizon-ui-chakra

##dashboard: purity
https://github.com/vineeln/purity-ui-dashboard
https://www.creative-tim.com/product/purity-ui-dashboard?ref=readme-pud
https://demos.creative-tim.com/purity-ui-dashboard/?_ga=2.126177157.940624823.1659505962-1444183135.1659505962#/admin/dashboard


## chakra react-app guide
https://chakra-ui.com/getting-started/cra-guide

