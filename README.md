# vocab_builder_framework

UI interface for flashcard based custom game generation project

## Getting Started

### Prerequisites

* [Node.js](http://nodejs.org/) (v16.13.2) - Javascript runtime.

### Install

````
npm install
````

## Node tasks

### Documentation
```
npm run docs
```

Generates documentation files into `spec > docs` directory.

### Testing

```
npm run test
```

Execute unit tests on files with `.test` file extension on the console and produce coverage report into `spec > coverage`

See [Jest CLI Options](https://jestjs.io/docs/cli) for more testing options.

### Development

````
npm run start
````

Will launch a development server providing live reloading and hot module replacement.

### Deployment
````
npm run build
````

Builds minified JS files into `dist`.

````
npm run serve
````
Serves the production version of the app build in `dist` on a local server on port 3000.

To build and run the app statically for use in non-browser environments instances of `<BrowserRouter>` should be changed to `<HashRouter>`

## Built With

* [Webpack](http://webpack.js.org) (v5.74.0) - Open-source JavaScript module bundler
* [React](http://reactjs.org/) (v18.2.0) - A JavaScript library for building user interfaces maintained by Facebook
* [TypeScript](https://www.typescriptlang.org/) (v4.8.4) - Strict syntactical superset of JavaScript, developed and maintained by Microsoft.
* [Babel](http://babeljs.io) (v7.19.3) - Free and open-source JavaScript compiler and and configurable transpiler
* [React-Router] (https://reactrouter.com/en/main) (v6.4.2) - Lightweight, fully-featured routing library for React

## Authors
* **Aidan Sheehan** <aidannmsheehan@gmail.com>

## Ticketing
See [Jira Project](https://vocab-builder.atlassian.net/jira/software/projects/VBF/boards/3) to track current tickets.

## Versioning
TBD