<p align="center">
  <a href="https://tsei.jp/mdmd/about">
    <img width="250" src="https://res.cloudinary.com/dpimrj9cp/image/upload/v1588347839/md.png">
    <img width="250" src="https://res.cloudinary.com/dpimrj9cp/image/upload/v1588347839/md.png">
  </a>
</p>
<h1 align="center">React Markdown with Material Design</h1>
<p align="center"Built with <b>React Markdown</b> and <b>React Bootstrap with Material Design</b></p>
<p align="center"><b>Markdown</b> for material UI Component, Grid System, and many more.</p>

<p align="center">
  <img alt="build passin" src="https://img.shields.io/badge/build-passing-green.svg"/>
  <img alt="license MIT" src="https://img.shields.io/badge/license-MIT-green.svg"/>
  <img alt="npm package" src="https://img.shields.io/badge/npm_package-1.0.0-green.svg"/>
  <img alt="twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Ftseijp"/>
</p>

<p align="center">
  <a href="https://mdbootstrap.com/docs/react/" target="_blank">
    <img width="700" src="https://res.cloudinary.com/dpimrj9cp/image/upload/c_scale,w_1000/v1588494236/MDMD.png" alt="page">
  </a>
</p>


# Table of Contents
- [Demo](#Demo)
- [Version](#Version)
- [Quick start](#Quick start)
- [Available commands](#Available commands)
- [How to install React Markdown and MDBReact via npm](#How to install React Markdown and MDBReact via npm)

# Demo
- ~~[Demo](https://tsei.jp/mdmd)~~ COMING SOON

# Version
- React 16.12.0
- MDB React 4.26.0
- React Markdown ^4.3.1

# Quick start
- `git clone https://github.com/tseijp/mdmd-react .`
- `npm i`
- `npm start`
- open browser and visit [http://localhost:3000](http://localhost:3000)

# Usage
```js
import Mdmd from 'mdmd';
import MyText from './MyText.md';
const App =()=> <Mdmd path={MyText}/>
```

# How to install React Markdown and MDBReact via npm
- create your project - `create-react-app myproject`
- `cd myproject`
- `npm install --save mdbreact react-markdown`
- Import style files into the src/index.js before the App.js file:
```
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
```
- Learn more : [React Bootstrap with Material Design](https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design#how-to-install-mdb-via-npm)
