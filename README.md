# Nest.js + GraphQL + React + TypeScript Boilerplate

A template made up of a combination of Nest.js + GraphQL + React + TypeScript.  
You can use this template to easily build services with a combination of Nest.js + GraphQL + React + TypeScript.

## Getting Started

```sh
git clone https://github.com/LeeKyuHyuk/NestJS-GraphQL-React-TypeScript-Boilerplate.git ProjectName
```

Install the required packages with the command below.

```sh
cd ProjectName
npm install
```

Run Backend and Frontend in development mode with the command below.  
When the code is changed, it is rebuilt in real time and applied.

```sh
npm run dev
```

## Structure

```
├── LICENSE
├── README.md
├── backend
│   ├── graphql
│   │   └── person.graphql
│   ├── nest-cli.json
│   ├── package.json
│   ├── src
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── models
│   │       ├── person.module.ts
│   │       └── person.resolver.ts
│   ├── tsconfig.build.json
│   └── tsconfig.json
├── frontend
│   ├── apollo.config.js
│   ├── package.json
│   ├── src
│   │   ├── NotFound.tsx
│   │   ├── People.tsx
│   │   ├── PeopleDetail.tsx
│   │   ├── index.html
│   │   ├── index.tsx
│   │   └── types
│   │       ├── GetAllPerson.ts
│   │       ├── GetPerson.ts
│   │       └── globalTypes.ts
│   ├── tsconfig.json
│   └── webpack.config.js
└── package.json
```

- `backend` : Backend project directory using Nest.js.
- `backend/dist` : Output of the built backend project is saved
- `backend/graphql` : Type and Schema used in GraphQL are defined.
- `frontend/src/main.ts` : Backend entry point
- `frontend` : Frontend project directory using React.js.
- `frontend/dist` : Output of the built frontend project is saved
- `frontend/src/index.tsx` : Frontend entry point
- `frontend/src/types` : Containing GraphQL Types created through `npm run apollo:codegen`.

# Test Environment

- **Node.js** v16.13.0
- **NPM** v8.2.0
