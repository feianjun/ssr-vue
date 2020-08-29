const fs = require('fs');
const path = require('path');
const express = require('express');
const server = express();
const favicon = require('serve-favicon')


const dir = (...agu)=> path.resolve(...agu)


server.use(express.static(dir('dist')));
server.use(favicon(dir('assets', 'logo-48.png')))

const serverbui = require('./dist/server.js').default


const { createRenderer } = require('vue-server-renderer')
const template = fs.readFileSync(dir('dist/index.ssr.html'), 'utf-8')
const serverBundle = fs.readFileSync(dir('dist/server.js'), 'utf-8')

const renderer = createRenderer({
  template,
//   clientManifest
})

server.get('*', (req, res) => {
    const context = {
        url: req.url,
    }
    serverbui(context).then((vm)=>{
        renderer.renderToString(vm, (err, html) => {
            if (err) {
                console.error(err);
                res.status(500).end('错了');
                return;
            }
            res.end(html);
        })
    })
});


server.listen(8111, () => {
    console.log('后端渲染服务器启动，端口号为：8111');
});
