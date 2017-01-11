const knex = require('./knex');
module.exports = {
  create: function(session) {
    return knex('session').insert(session, "id");
  },
  getAll: function() {
    return knex('session').select();
  },
  getOne: function(id) {
    return knex('session').select().where('id', id).first();
  }
}
