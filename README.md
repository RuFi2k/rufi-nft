# RuFi|NFT
**Generative NFT software**

# Getting started
To run application locally, clone the repository and use the following script:
```
npm install
npm run start
```

To build application, use `npm run build:dev` for development purpoes, or `npm run build` for production needs.

# Contribute
To contribute into the repository, some rules needs to be followed:
- **NEVER** (!) push to `master` branch directly. Create a new branch and use pull request instead;
- Before pushing your changes, ensure that application builds successfully and follows code styles by using `npm run build` and `npm run lint` commands;
- In pull request try to follow 1 commit rule. If need to push into existing branch, use `git commit --amend` and add changes to the last commit directly.

# Tech stack

## ESBuild
ESBuild is being used as bundler.

**Pros**
- Faster build time comparing to common Webpack solution
- Lightweight configuration is enough for project needs
- Out of the box Typescript and SASS support

**Cons**
- Limited configuration ability
- CSS modules are apsent
- No watch mode while serving application. That means:
  - No out-of-box solution for hot reload. Need to provide a custom script to build application and host in virtual development server
  - Need to rebuild an entire application when saving some changes. For lightweight projects it's not a big deal, but as your project scales, advantage of faster build time becomes unseen in development process. Still can see build time improvement in CI/CD pipelines

For more information follow the [official documentation](https://esbuild.github.io/)

## React
Main skeleton of the entire application builds by using [React v.18.2](https://reactjs.org/) library

## Typescript
Typescript is being used as a standard for scalable and well-maintained applications to provide better development experience
[Documentation](https://www.typescriptlang.org/docs/)

## ESLint
ESLint is used to follow the code stylings. The initial configuration is hosted in `.eslintrc.json` file. The initial configuration based on Airbnb code styles with some updated rules.
