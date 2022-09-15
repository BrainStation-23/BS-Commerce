# `seeder`

> To seed data to the packages

## How to start

```
cd packages/seeder
yarn install
yarn build
yarn seed
```

> To seed product data to the elastic search db

## How to start

```
cd packages/seeder
docker-compose up -d
yarn install
yarn build
yarn seed:es
```