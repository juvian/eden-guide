var Datastore = require('nedb')

module.exports.users = new Datastore({ filename: '.data/users', autoload: true, timestampData: true });
module.exports.builds = new Datastore({ filename: '.data/builds', autoload: true, timestampData: true  });

module.exports.users.ensureIndex({fieldName: 'username', unique: true}, console.log);