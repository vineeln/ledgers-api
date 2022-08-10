# Run on local environment
  $ docker-compose up  
  $ yarn install
  $ npx ts-node ./node_modules/typeorm/cli.js migration:run -c ledgers
  $ yarn watch
  $ yarn dev; // this should start on localhost:4000

# Some Notes 

## chakra react-app guide
https://chakra-ui.com/getting-started/cra-guide

## Graphql Curl
  curl --request POST \
  --header 'content-type: application/json' \
  --url http://localhost:4000/graphql \
  --data '{"query":"query { __typename }"}'

## VSCode: run watch task
  CMD + Shift + B
  #debugging
  F5

## Creating entity migrations & running them    
  #creates migration files
  npx typeorm migration:generate -c ledgers -n init -d src/migrations/
  #executes migrations on DB
  npx ts-node ./node_modules/typeorm/cli.js migration:run -c ledgers

#TypeScript
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




