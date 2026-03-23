const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// 静态文件托管（指向public文件夹里的index.html）
app.use(express.static('public'));
app.use(express.json());

// 跨域设置
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 测试订单接口（不用连Shopify也能看效果）
app.get('/api/orders', async (req, res) => {
    try {
        const phone = req.query.phone;
        const testOrders = [
            { customerName: '测试用户', phone: phone, address: '北京市朝阳区', orderNumber: 'TEST001' },
            { customerName: '测试用户', phone: phone, address: '上海市浦东新区', orderNumber: 'TEST002' }
        ];
        res.status(200).json(testOrders);
    } catch (error) {
        res.status(500).json({ error: '查询失败' });
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
    console.log(`前端页面地址：http://localhost:${port}`);
});

