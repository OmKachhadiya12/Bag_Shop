const mongoose = require('mongoose');
const dbgr = require('debug')('development:mongoose');
const mongoURL = "mongodb://127.0.0.1:27017/Bag-Shop";

const db = mongoose.connect(mongoURL).then(() => {
    dbgr('Connected');
}).catch((err) => {
    dbgr(err);
})

module.exports = db;