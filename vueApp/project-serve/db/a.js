
/* GET home page. */
const {
    find
} = require('./db');

(async () => {

    let data = await find('booksAPP',null);
    console.log(data)
})();
