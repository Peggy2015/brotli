import * as brotli from 'brotli';
import { readFileSync,writeFileSync} from 'node:fs'
import * as path from 'node:path'
import * as zlib from 'zlib'

// 配置
const defaultOption = {encoding:"utf8"};

// 读取文件
const rootPath = process.cwd();
console.log("rootPath:",rootPath);

// 解压
// 原文件
const htmlBRFile = readFileSync(path.join(rootPath,'static/index.html.br'));
const deHtmlFile = brotli.decompress(htmlBRFile);
writeFileSync(path.join(rootPath,'static/index.html'),deHtmlFile,defaultOption);

// 压缩文件
const jsBRFile = readFileSync(path.join(rootPath,'static/analytics.js.br'));
const deJSFile = brotli.decompress(jsBRFile);
writeFileSync(path.join(rootPath,'static/analytics.js'),deJSFile,defaultOption);

// gzip原文件
const htmlGZFile = readFileSync(path.join(rootPath,'static/index.html.gz'));
const deHtmlGZFile = zlib.unzipSync(htmlGZFile);
writeFileSync(path.join(rootPath,'static/gz.index.html'),deHtmlGZFile,defaultOption);

// 压缩文件
const jsGZFile = readFileSync(path.join(rootPath,'static/analytics.js.gz'));
const deJSGZFile = zlib.unzipSync(jsGZFile);
writeFileSync(path.join(rootPath,'static/gz.analytics.js'),deJSGZFile,defaultOption);