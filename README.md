
# Test task for backend 

## Stack:
* nestjs
* docker-compose
* typeorm

## Installation

Install packages:
```bash
$ npm install
```

## Running the db

Run docker image db with deamon:

```bash
$ docker-compose up -d
```
Down docker container: 

```bash
$ docker-compose down
```

OPTIONAL. Run docker image db without deamon:

```bash
$ docker-compose up
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

# Task Description 

## Input data

Archive with 4 pgsql exported tables: pairs, operations, tokens, and transfers

- `pairs` are Liquidity pairs, which contain general information about LPs
- `tokens` are erc20 tokens that might be locked in LPs
- `operations` log of swap operations in Liquidity pairs
- `transefer` log of all token transfers between accounts in networks

## Task

To implement a microservice that will return by address and a time the following struct:

```json
{
  "statistic": {
    "prevDateUSDVolume": 1000 // the usd sum of all transactions during previous day
  },
	"assets": [
		{ // for each asset there should be an object
			"network": "BOBA",
			"name": "Wrapped ETH",
      "symbol": "WETH",
			"valueUSD": 15000, // usd value of the token
			"value": 75, // raw value of the token
			"priceUSD": 200, // usd price per token
		},
		...
	]
}
```

❗Effective price at timestamp can be retrieved from last operation of corresponding pair. 

> If we have transfer with ts=T then effective price is the last with op.ts < T
> 

Stable tokens always have price of 1 USD per token.

## Requirements

- Microservice must be implemented with nestjs and typescript
- All tables must be implemented as typeorm entities with manual migration
- Microservice must have OpenAPI interface with all needed entities
- Microservice must be dockerized
- All configuration must be taken from environment (e.g. `.env`)
- Result must be a GitHub/GitLab repo

Nice to have

- All custom SQL indexes/views/etc are advised to have motivation and be effective on inserts (especially on operations and transfers)
- It’ll be good to reduce microservice response time as much as possible
- CI that pushes recent version of docker image