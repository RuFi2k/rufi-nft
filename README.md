# RuFi|NFT
**Generative NFT software**

# Getting started
To run application locally, clone the repository and use the following script:
```
npm install
npm run start
```

To build application, use `npm run build:dev` for development purpoes, or `npm run build` for production needs.

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