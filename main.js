// 2021.07.22
// by HYOSITIVE
// based on DATABASE2 - lowdb - 9

var shortid = require('shortid');
var low = require('lowdb')
var FileAsync = require('lowdb/adapters/FileAsync') // 데이터 저장 방식 : FileaSync
var adapter = new FileAsync('db.json') // 데이터를 db.json에 저장
low(adapter).then( // 비동기 방식으로 제어
    function(db) {
        db.defaults({ topic: [], author: []}).write(); // topic, author라는 배열 생성

        // CREATE
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

        // READ
        // console.log(
        //     db.get('topic')
        //     .find({title:'lowdb', author:1})
        //     .value());

        // UPDATE
        // db.get('topic')
        //     .find({id:2})
        //     .assign({title:'MySQL & MariaDB'})
        //     .write();

        // DELETE
        // db.get('topic')
        //     .remove({id:2})
        //     .write();

        // CREATE (shortid)
        var sid = shortid.generate();
        db.get('author')
            .push({
                id:sid,
                name:'duru',
                profile:'db admin'
            }).write().then(function() { // 비동기적 처리
                console.log('add author');
        });

        db.get('topic')
            .push({
                id:shortid.generate(),
                title:'MSSQL',
                description:'MSSQL is ...',
                author:sid
            }).write().then(function() {
                console.log('add topic');
        });
    }
) 

