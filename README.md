# vocab_builder_framework

UI interface for flashcard based custom game generation project

## Getting Started

### Prerequisites

* [Node.js](http://nodejs.org/) (v16.13.2) - Javascript runtime.

### Install

````
npm install
````

### Setting up the API URL
1. Create a `.env` file in the root of the project if it doesn't already exist. 
2. Add the following line to your `.env` file, assuming you are running the backend on localhost:8000:
````
REACT_APP_API_URL=https://localhost:8000/api
````
To use development or production servers replace with their URLs as appropriate - contact me for this information if required.

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
Serves the production version of the app build in `dist` on a local server on port 8080.

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

## Contributing
If you are interested in contributing to this project, please contact the author before making any changes or submitting pull requests. You can reach out to the author via [email](mailto:aidanmsheehan@gmail.com).

Please note that this project is the author's private intellectual property and any contributions will be subject to the author's approval and licensing terms.

## License
All rights reserved. This project and its source code are the private intellectual property of the author. No part of this project may be copied, modified, distributed, or used in any manner without the explicit permission of the author.