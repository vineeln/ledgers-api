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