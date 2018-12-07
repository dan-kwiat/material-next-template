# Material Next Template

Basic boilerplate for a responsive app layout with SSR using Material Design Components & Next.js:
* https://github.com/material-components/material-components-web-react
* https://github.com/zeit/next.js

### Demo
[Demo](https://dan-kwiat.github.io/material-next-template/)

### Install
```bash
yarn
```

### Dev
```bash
yarn dev
```
This runs on http://localhost:3000

### Build Static
```bash
yarn export
```
This will bundle static files into an `out` directory.

### Deploy
```bash
yarn deploy
```
This will deploy the relevant files to the `gh-pages` branch of your repo.  Make sure the `assetPrefix` endpoint in [next.config.js](next.config.js) reflects the name of your repo.
