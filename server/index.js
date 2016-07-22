/**
 * Created by DEV on 2016/6/17.
 */
var app = require('koa')();
var static = require('koa-static');
var path = require('path');
//静态文件
app.use(static(path.join(process.cwd(), "bower_components")));
app.use(static(path.join(process.cwd(), "node_modules")));
app.use(static(path.join(process.cwd(), "client")));

module.exports = app;
