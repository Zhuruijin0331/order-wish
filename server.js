const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 托管静态文件
app.use(express.static('public'));

// 强制访问首页
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 启动服务
app.listen(port, () => {
  console.log('Server started');
});
