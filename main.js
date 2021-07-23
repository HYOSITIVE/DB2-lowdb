// 2021.07.22
// by HYOSITIVE
// based on DATABASE2 - lowdb - 6

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync') // 데이터 저장 방식 : FileSync
const adapter = new FileSync('db.json') // 데이터를 db.json에 저장
const db = low(adapter) // db라는 변수로 lowdb 제어

db.defaults({ topic: [], author: []}).write() // topic, author라는 배열 생성
// db.get('author').push({
//     id:1,
//     name:'egoing',
//     profile:'developer'
// }).write();

// db.get('topic').push({
//     id:1,
//     title:'lowdb',
//     description:'lowdb is ...',
//     author:1
// }).write();

// db.get('topic').push({
//     id:2,
//     title:'mysql',
//     description:'mysql is ...',
//     author:1
// }).write();

// console.log(
//     db.get('topic')
//     .find({title:'lowdb', author:1})
//     .value());

db.get('topic')
    .find({id:2})
    .assign({title:'MySQL & MariaDB'})
    .write();