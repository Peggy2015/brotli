import * as brotli from 'brotli';
import { readFileSync,writeFileSync,mkdirSync,} from 'node:fs'
import * as path from 'node:path'
import  * as zlib from 'zlib'

// 配置
const defaultOption = {encoding:"utf8"};

// 读取文件
const rootPath = process.cwd();
console.log("rootPath:",rootPath);
mkdirSync(path.join(rootPath,'static'));
const relativePath = path.join(rootPath,'static');

// 压缩:原文件、空格类压缩文件、gzip压缩、br压缩
const htmlFile = readFileSync(path.join(rootPath,'resource/index.html'));
const brotliHtmlFile = brotli.compress(htmlFile, {
  mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 11, // 0 - 11
});
writeFileSync(path.join(relativePath,'index.html.br'),brotliHtmlFile,defaultOption);
const gzipHtmlFile = zlib.gzipSync(htmlFile);
writeFileSync(path.join(relativePath,'index.html.gz'),gzipHtmlFile,defaultOption);


const jsFile = readFileSync(path.join(rootPath,'resource/analytics.js'));
const brotliJSFile = brotli.compress(jsFile, {
  mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 11, // 0 - 11
});
writeFileSync(path.join(relativePath,'analytics.js.br'),brotliJSFile,defaultOption);
const gzipJSFile = zlib.gzipSync(jsFile);
writeFileSync(path.join(relativePath,'analytics.js.gz'),gzipJSFile,defaultOption);

