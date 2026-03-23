const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 这行是关键！让express自动读取public文件夹
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
