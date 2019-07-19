exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Raspiblitz',
          description: 'Bitcoin full node and lightning node setup',
          completed: 0
        },
        {
          name: 'Drop 3 shots from my golf game',
          description:
            'In order to win more tournaments I need to drop three shots from my average',
          completed: 0
        }
      ]);
    });
};
