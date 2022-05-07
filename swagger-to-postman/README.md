# About

This project will be a simple nestjs app that will automate the process from creating a nestjs api to building and running integration tests.

## Goal

The goal of this work is to create an automated pipeline that can detect changes in a controller action compiled into swagger documentation, import the swagger documentation into postman, have postman automatically build the happy path integration tests, then auto-run the integration tests in jenkins.

## Technologies

- NestJS API: <https://nestjs.com/>
- Swagger: <https://swagger.io/>
- Postman: <https://www.postman.com/>
- Jenkins: <https://www.jenkins.io/>

## Step 1: Build Swagger Documentation

Compile a NestJS API into Swagger JSON format to generate a url with the api documentation.

One of the advantages of making our imports to postman from the swagger url is that the swagger documentation has been standardized making our remaining process language agnostic.

<https://docs.nestjs.com/openapi/introduction>

To start this proof of concept, I am building a basic NestJS api and importing the swagger npm project to build the swagger response. The above link shows the instructions for setting this up. Running locally my api can be accessed at <http://localhost:3000/> and my swagger documentation is available at <http://localhost:3000/api/>. Now for importing into postman we will want to build the api into a json format which can be accessed locally at <http://localhost:3000/api-json>.

For my proof of concept, I am going to build a basic library/book tracking api. So we will have options for basic crud on a book object.

Swagger.json output for the initial version: ~/auto-nest-api/swagger.json

## Step 2: Auto Import into Postman

Now the base feature we are looking for does not actually exist to have postman auto-sync the api. A manual process would be to go to file -> import -> link, and import your api with the swagger link.

An export of our api: ~/auto-nest-api/API.postman_collection

For this step it appears postman has an api that may be of use. <https://www.postman.com/postman/workspace/postman-public-workspace/example/12959542-0822faf0-ac98-444f-b68b-dc7b175a5d3a>
With the correct api configuration we could set up a batch job or as part of the build/deploy process that just calls the api to import.

Potentially outdated as this is from 4 years ago, but could be a great start for getting into the automation for this step: <https://blog.postman.com/sync-your-specs/>

Postman Commands shared at: <https://www.getpostman.com/collections/072e1a451943307b9241>

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

## License

Nest is [MIT licensed](LICENSE).
