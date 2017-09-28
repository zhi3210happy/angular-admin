const express = require('express');
const router = express.Router();
const Person = require('../init/model')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/angular-admin')
/* GET users listing. */
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


router.get('/init',(req, res, next) =>{
  Person.remove({},(err) => {
    if(err){
      console.log(err)
    }
  })
  Person.insertMany(data,(err) => {
      return res.json()
})
})
router.get('/searchName', (req, res, next) => {
  console.log(people)
  var people = req.params
  if (people) {
    Person.find(people, (err, doc) => {
      if (doc) {
        return res.json(doc)
      }
    })
  }
})
router.post('/search', (req, res, next) => {
  const people = req.body
  if (people.name == '') {
    delete people.name;
  }
  if (people.team == '') {
    delete people.team;
  }
  if (people.account == '') {
    delete people.account;
  }
  Person.find(people, (err, doc) => {
    if (doc) {
      return res.json(doc)
    }
  })
})
router.post('/add', (req, res, next) => {
  const add = new Person(req.body);
  add.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        msg: '新增人员加入成功!'
      });
      console.log('成功插入数据')
    }
  })
})
router.post('/del', (req, res, next) => {
  console.log(req.body)
  Person.remove({
    name: {
      $in: req.body
    }
  }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        msg: '删除成功!'
      });
      console.log('成功删除数据')
    }
  })
})
router.post('/edit', (req, res, next) => {
  console.log(req.body)
  console.log(req.query)
  const name = req.query
  const update = req.body
  Person.findOneAndUpdate(name, update, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        msg: '修改成功!'
      });
      console.log('成功修改数据')
    }
  })
})
module.exports = router;