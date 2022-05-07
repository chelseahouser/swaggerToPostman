# Swagger To Postman

This is a NestJS utility API to create and update Postman Collections based on Swagger API documentation. This application will have endpoints that can be hit on a scheduled basis that will take in the Swagger URL and Import the API documentation using the PostmanAPI. It will also build up some basic integration tests that can be run automatically through the postman application.

## TODO

- Build integration tests

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger

To access the swagger documentation run the project with 'npm run start' and navigate to <http://localhost:3000/api>
