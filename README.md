## Getting start

0. install Prisma globally

1. `yarn install`
   Install all the packages

1. `yarn prisma-up`
   Docker-compose up for prisma

1. `prisma deploy`
   Deploy database changing and seed

1. `yarn dev`
   Run webpack build and start locally

## Testing & Lint

1. `yarn test`
2. `yarn lint`

## Tools

`yarn ts-node ./prisma/seed.ts`
Manually seed if there is no initial data

`yarn docker-stop`
Stop all docker container

## GraphQL test api

http://localhost:4000/playground

## Restful api

http://localhost:4000/restful/test

## Eslint extention used

```
 "@typescript-eslint/eslint-plugin": "^2.0.0",
 "@typescript-eslint/parser": "^2.0.0",
 "eslint-config-prettier": "^6.1.0",
```
