let db = require('../common/database');
let q = require('q');
let conn = db.getConnection();


function addUser(user) {
    if(user) {
        let defer = q.defer();
        let query = conn.query('INSERT INTO users SET ?', user, (err, result) => {
            if(err) {
                defer.reject(err);
            }else {
                defer.resolve(result);
            }
        });
        return defer.promise;
    }
    return false;
}

function selectUser(userName) {
    if(userName) {
        let defer = q.defer();
        let query = "SELECT * FROM users"
        conn.query(query, (err, result) => {
            if(err) throw err;
            return result;
        });
    }
    return false;
}

module.exports = {
    addUser: addUser,
    selectUser: selectUser
}