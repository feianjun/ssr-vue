const fs = require('fs');
const path = require('path');
const express = require('express');
const server = express();
const favicon = require('serve-favicon')
const dir = (...agu)=> path.resolve(...agu)

server.use(express.static(dir('dist')));
server.use(favicon(dir('assets', 'logo-48.png')))

const bundle = fs.readFileSync(dir('dist/server.js'), 'utf-8');

const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
    template: fs.readFileSync(dir('dist/index.ssr.html'), 'utf-8')
});

server.get('/index', (req, res) => {
    renderer.renderToString((err, html) => {
        if (err) {
            console.error(err);
            res.status(500).end('22222');
            return;
        }
        res.end(html);
    })
});
server.listen(8111, () => {
    console.log('后端渲染服务器启动，端口号为：8111');
});
