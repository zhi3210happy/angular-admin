var mongoose = require('mongoose')
// 表模型
var personSchema = new mongoose.Schema({
    'id': String,
    'name': String,
    'sex': String,
    'team': String,
    'account': String,
    'role': String,
    'position': String
})
module.exports = mongoose.model('Person', personSchema)