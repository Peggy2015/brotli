# brotli
brotli测试验证

## 功能
### 压缩
压缩功能、压缩率、压缩速度（环境差异过大，没有对比性）

### 解压缩
解压功能、解压速度（环境差异过大，没有对比性）

### 测试已支持br的服务器
1- 查看MDN对br的支持 https://developer.mozilla.org/zh-CN/docs/Web/HTML
2- curl方式
curl -H 'Accept-Encoding:br' -I https://developer.mozilla.org/zh-CN/docs/Web/HTML
curl -H 'Accept-Encoding:gzip' -I https://developer.mozilla.org/zh-CN/docs/Web/HTML

### 搭建支持br的服务器并验证
#### 压缩
npm run encode

#### 解缩
npm run decode

#### 运行服务器
npm run start

#### 验证
浏览器验证：http://localhost:3000/
curl方式：
curl -H 'Accept-Encoding:br' -I http://localhost:3000/
curl -H 'Accept-Encoding:gzip' -I http://localhost:3000/
curl -H 'Accept-Encoding:' -I http://localhost:3000/

curl -H 'Accept-Encoding:br' -I http://localhost:3000/analytics.js
curl -H 'Accept-Encoding:gzip' -I http://localhost:3000/analytics.js
curl -H 'Accept-Encoding:' -I http://localhost:3000/analytics.js

