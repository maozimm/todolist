const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('连接成功'));