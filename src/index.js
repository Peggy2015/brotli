import * as koa2 from 'koa2'
import * as path from 'node:path'
import serve from 'koa-static'

const Koa = koa2.default;
const app = new Koa();
const rootPath = process.cwd();

// 设置静态文件目录
const staticPath = './static';
app.use(serve(
  path.join(rootPath,staticPath)
));

app.listen(3000);

console.log('server start...');
