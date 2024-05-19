# Next Auth MongoDB (Mongoose) Starter

This is a starter project Next-auth with Mongodb (Mongoose), using Next.js

## Features

- Authentication with NextAuth.js
- Google Auth Provider Configuration
- Session management with NextAuth.js (using JWT)
- MongoDB integration with Mongoose
- Custom User model and JWT token

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Jauharmuhammed/next-auth-mongodb-starter
```

2. Install the dependancies

```bash
cd next-auth-mongodb-starter
npm i
```

3. Create an .env.local at the root and add the following variables

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=************

MONGODB_URI=mongodb://127.0.0.1:27017/**********

GOOGLE_CLIENT_ID=************
GOOGLE_CLIENT_SECRET=************
```

[Google Provider](https://next-auth.js.org/providers/google) - follow this doc to setup the env variables for google authentication.

4. Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [NextAuth.js Docs](https://next-auth.js.org/getting-started/introduction) - Learn more about NextAuth.js and Available Providers and Adapter
- [Google Provider](https://next-auth.js.org/providers/google) - follow this doc to setup the env variables for google authentication.
- [Other Providers](https://next-auth.js.org/providers/) - Other available providers in NextAuth.js
- [MongoDB Adapter](https://authjs.dev/getting-started/adapters/mongodb) - if you like to use the mongodb adapter, follow this link
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) - Try for free, Mongodb Database


**Start your project in minutes! 🚀**
