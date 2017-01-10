const knex = require('./knex');
module.exports = {
  create: function(session) {
    return knex('session').insert(session, "id")
  }
}
