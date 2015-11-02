React Tutorial 1
=====

#### 配置开发环境
```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install node
```

#### 使用npm建立React Project基本结构
```bash
$ mkdir react-todo
$ cd react-todo
$ npm init
```

#### 安装react依赖包
```bash
$ npm install --save react react-dom
```

#### main.jsx

```javascript
// src/main.jsx, this file need node to compile it.
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

```javascript
// src/main-babel-browser.jsx
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

#### start a http static server
```bash
$ npm install http-server -g
$ http-server . -p 8989
```

#### build main.js

**index-browserify.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
  </head>
  <body>
    <div id="example"></div>
    <script src="../build/main.js"></script>
  </body>
</html>
```

**browserify cli**
```bash
$ npm install -g browserify
$ npm install --save-dev babelify babel-preset-react
$ mkdir build
$ browserify src/main.jsx -o build/main.js -t [ babelify --presets [ react ] ]
```

**bable cli**
```bash
$ npm install -g babel-cli
$ npm install --save-dev babel-preset-react
$ mkdir build
$ babel --presets react src/main.jsx -o build/main.js
or
$ babel --presets react -w src/ -d build/
```
after bable compile, you don't need include 'bable-core' into html
