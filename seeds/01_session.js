exports.seed = function(knex, Promise) {
  return knex('session').del()
    .then(function () {
      return knex('session').insert([{
          date: new Date(),
          exercise: 'jog',
          duration: 30,
          distance: 5000,
          HR_zone: 'low'
        },{
          date: new Date(),
          exercise: 'run',
          duration: 10,
          distance: 2000,
          HR_zone: 'med'
        },{
          date: new Date(),
          exercise: 'run',
          duration: 5,
          distance: 1200,
          HR_zone: 'high'
        },{
          date: new Date(),
          exercise: 'run',
          duration: 5,
          distance: 1200,
          HR_zone: 'high'
        }])
      });
};
