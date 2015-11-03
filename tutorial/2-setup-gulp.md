React Tutorial 2
=====

#### 安装全局gulp
```bash
$ npm install gulp -g
```

#### 安装babel
```bash
$ npm install gulp babel-core babel-preset-es2015 --save-dev
```

#### 增加babel配置文件
```bash
$ touch .babelrc
```

**.bablerc**
```json
{
  "presets": ["es2015"]
}
```

**gulpfile.babel.js**
```javascript
'use strict';

import gulp from 'gulp';

gulp.task('hello', () => {
  return console.log('hello');
});

gulp.task('default', ['hello']);
```
