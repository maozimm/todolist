const express = require('express');
const app = express();
const path = require('path');
require('./model/connet');
const Task = require('./model/task');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/task', async(req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});
app.get('/add', async(req, res) => {
    //添加数据
    await Task.create(req.query);
    const tasks = await Task.find();
    res.send(tasks);
});
app.get('/delete', async(req, res) => {
    //删除数据
    const { _id } = req.query;
    await Task.deleteOne({ _id: _id });
    const tasks = await Task.find();
    res.send(tasks);
});
//修改状态
app.get('/completed', async(req, res) => {
    const { _id } = req.query;
    await Task.updateOne({ _id: _id }, { completed: req.query.completed });
    const tasks = await Task.find()
    res.send(tasks);
});
//修改内容
app.get('/modify', async(req, res) => {
    const { _id } = req.query;
    await Task.updateOne({ _id: _id }, { title: req.query.title });
    const tasks = await Task.find();
    res.send(tasks);
});
//图标请求
app.get('/favicon.ico', (req, res) => {
    res.send();
})
app.listen(3000);