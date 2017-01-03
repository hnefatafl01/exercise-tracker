
exports.up = function(knex, Promise) {
  return knex.schema.createTable('session', (table)=> {
    table.increments();
    table.date('date');
    table.text('exercise');
    table.integer('duration');
    table.integer('distance');
    table.string('HR_zone');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('session');
};
