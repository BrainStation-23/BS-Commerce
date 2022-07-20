This is a Monorepo strategy TypeScript based Full-Stack setup for BS commerce, All projects bootstrapped with [`Lerna js`](https://lerna.js.org/).

Techstack included:

- [NestJS](https://nestjs.com/) - A progressive Node.js framework.
- [Next.js Documentation](https://nextjs.org/docs) - The React Framework. learn about Next.js features.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - The TypeScript Handbook.
- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces.

## Getting Started

**To start this project, you need to ensure that you are in the root path of this project.**
First, make sure you install `Yarn`: [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

### Connect to MongoDB

You need to install MongoDB on your local computer before you can connect to it. You can install MongoDB by following these instructions.

- For the Installation process in Windows -> [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) or you can try [Geeksforgeeks](https://www.geeksforgeeks.org/how-to-install-mongodb-on-windows/)
- For the Installation process in Ubuntu -> [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) or you can try [Geeksforgeeks](https://www.geeksforgeeks.org/how-to-install-and-configure-mongodb-in-ubuntu/)
- For the Installation process in Mac OS -> [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) or you can try [Geeksforgeeks](https://www.geeksforgeeks.org/how-to-install-mongodb-on-macos/)

MongoDB default settings -> the Hostname would be the localhost, and the port is 27017.

**Install all the dependencies and projects packages**

```bash
yarn bootstrap
```

**Build all the projects [backend server and frontend server]**

```bash
yarn build
```

**Run all the projects [backend server and frontend server]**

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see api live.
Open [http://localhost:3001](http://localhost:3001) with your browser to see SuperAdmin web panel.
Open [http://localhost:3002](http://localhost:3002) with your browser to see StoreFront.
Open [http://localhost:3003](http://localhost:3003) with your browser to see StoreAdmin.

### Seed MongoDB Data

### `seeder`

> To seed data to the packages
#### How to start

```bash
yarn seeder:run
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
