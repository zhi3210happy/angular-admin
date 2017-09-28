var mongoose = require('mongoose')
var Person = require('./model')
mongoose.connect('mongodb://127.0.0.1:27017/angular-admin')
 var data = [{
    "id": "1",
    "name": "调试1",
    "sex": "男",
    "team": "1",
    "account": "调试1",
    "role": "散人",
    "position": "队长"
  },
  {
    "id": "2",
    "name": "调试2",
    "sex": "女",
    "team": "1",
    "account": "调试2",
    "role": "枪炮师",
    "position": "队员"
  },
  {
    "id": "3",
    "name": "调试3",
    "sex": "男",
    "team": "2",
    "account": "调试2",
    "role": "气功师",
    "position": "队员"
  },
  {
    "id": "4",
    "name": "调试4",
    "sex": "男",
    "team": "2",
    "account": "调试3",
    "role": "散人",
    "position": "队长"
  },
  {
    "id": "5",
    "name": "调试5",
    "sex": "女",
    "team": "3",
    "account": "调试4",
    "role": "枪炮师",
    "position": "队员"
  },
  {
    "id": "6",
    "name": "调试6",
    "sex": "男",
    "team": "3",
    "account": "调试4",
    "role": "气功师",
    "position": "队员"
  },
  {
    "id": "7",
    "name": "调试7",
    "sex": "男",
    "team": "4",
    "account": "调试5",
    "role": "散人",
    "position": "队长"
  },
  {
    "id": "8",
    "name": "调试8",
    "sex": "女",
    "team": "4",
    "account": "调试6",
    "role": "枪炮师",
    "position": "队员"
  },
  {
    "id": "9",
    "name": "调试9",
    "sex": "女",
    "team": "4",
    "account": "调试9",
    "role": "枪炮师",
    "position": "队员"
  },
  {
    "id": "10",
    "name": "调试10",
    "sex": "女",
    "team": "4",
    "account": "调试10",
    "role": "枪炮师",
    "position": "队员"
  },{
    "id": "11",
    "name": "调试11",
    "sex": "男",
    "team": "4",
    "account": "调试10",
    "role": "狂战士",
    "position": "队员"
  }

]

Person.insertMany(data)

