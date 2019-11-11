const MongoClient = require('mongodb').MongoClient;
// 连接路径（默认）
const url = 'mongodb://localhost:27017';
// 数据库名称
const dbName = '1909';

// 连接到服务器
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useUnifiedTopology: true },
            function (err, client) {
                err ? reject(err) : resolve(client);
                console.log('连接成功');
            });
    });
};
//查
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        // 操作选中的表
        const collection = db.collection(col);
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
            console.log('查找成功');
        });
        client.close();
    });
};
//插入、增
const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        // 操作选中的表
        const collection = db.collection(col);
        // 插入数据，参数是数组json类
        collection.insertMany(query, function (err, result) {
            err ? reject(err) : resolve(result);
            console.log('插入成功');
        });
        client.close();
    });
};
//改
const updata = (col, query, query2) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        // 操作选中的表
        const collection = db.collection(col);
        collection.updateOne(
            query//条件
            , { $set: query2 },//更改的值
            function (err, result) {
                err ? reject(err) : resolve(result);
                console.log('更改成功');
            });
        client.close();
    });
};

//删除
const del = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        // 操作选中的表
        const collection = db.collection(col);
        collection.deleteMany(query ? query : {},
            function (err, result) {
                err ? reject(err) : resolve(result);
                console.log('删除成功');
            });
        client.close();
    });
};

module.exports = {
    find,
    insert,
    updata,
    del
};