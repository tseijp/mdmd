<p align="center">
  <a href="https://tsei.jp/mdmd/">
    <img width="200" src="https://res.cloudinary.com/dpimrj9cp/image/upload/v1588347839/md.png">
    <img width="200" src="https://res.cloudinary.com/dpimrj9cp/image/upload/v1588347839/md.png">
  </a>
</p>

<h1 align="center">️React Ⅿarkⅾown with Ⅿaterial Ⅾesign</h1>
<p align="center"><b>Markdown</b> for material UI Component, Grid System, and many more.</p>

<p align="center">
    <a href="https://github.com/tseijp/mdmd"><img alt="build passin"src="https://img.shields.io/badge/build-✔-green.svg"/></a>
    <a href="https://github.com/tseijp/mdmd"><img alt="build passin"src="https://img.shields.io/badge/types-✔-yellow.svg"/></a>
    <a href="https://github.com/tseijp/mdmd"><img alt="build passin"src="https://img.shields.io/badge/demos-✔-red.svg"/></a>
    <br>
    <a href="https://github.com/tseijp/mdmd"><img alt="license MIT" src="https://img.shields.io/badge/license-MIT-green.svg"/></a>
    <a href="https://www.npmjs.com/package/@tsei/mdmd"><img alt="npm package" src="https://img.shields.io/badge/npm_package-2.0.1-green.svg"/></a>
    <a href="https://twitter.com/intent/tweet?url=https://tsei.jp/mdmd/about/&text=React Ⅿarkⅾown with Ⅿaterial Ⅾesign"><img alt="tweet" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Ftseijp"/></a>
</p>

<p align="center">
  <a href="https://tsei.jp/mdmd/basic" target="_blank">
    <img width="700" src="https://res.cloudinary.com/dpimrj9cp/image/upload/c_scale,w_1000/v1588494236/MDMD.png" alt="page">
  </a>
</p>

<hr>

# Table of Contents
- [Demo](#Demo)  
- [Version](#version)  
- [Simple Example](#simple-example)
- [Quick Started](#quick-started)  
- [Install via npm](#install-via-npm)  

# Demo
- [Mdmd Demo](https://tsei.jp/mdmd)

# Version
- React 16.12.0
- MDB React 4.26.0
- React Markdown ^4.3.1

# Simple Example
```js
import Mdmd from 'mdmd';
import MyText from './MyText.md';
const App =()=> <Mdmd md={MyText}/>
```

# Quick Started
- `git clone https://github.com/tseijp/mdmd`
- `npm i -D`
- `npm start`
- open browser and visit [http://localhost:3000](http://localhost:3000)
- Now you can go to our [demo](https://tsei.jp/mdmd), and try its usage.

# Install via npm
- create your project - `create-react-app myproject`
- `cd myproject`
- `npm i @tsei/mdmd -S`
- Import style files into the src/index.js before the App.js file:
```js
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
```
