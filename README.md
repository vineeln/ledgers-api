# Run on local environment
  $ docker-compose up

  $ yarn install

  $ npx ts-node ./node_modules/typeorm/cli.js migration:run -c ledgers

  $ yarn watch

  $ yarn dev; // this should start on localhost:4000

# Some Notes 



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
  
### creates migration files
  npx typeorm migration:generate -c ledgers -n init -d src/migrations/
  
### executes migrations on DB
  npx ts-node ./node_modules/typeorm/cli.js migration:run -c ledgers