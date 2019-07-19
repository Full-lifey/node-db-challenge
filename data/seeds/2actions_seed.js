exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 5,
          description: 'Find USA Hardware list, purchase recommended hardware',
          notes: 'If wanted, grab a custom case from CryptoCloaks',
          completed: 0,
          step_number: 1
        },
        {
          project_id: 5,
          description: 'Image SD Card',
          notes:
            'Instructions in the Readme. Use a program called balenaEtcher',
          completed: 0,
          step_number: 2
        },
        {
          project_id: 6,
          description: 'Work on Chipping',
          notes:
            "My touch hasn't been very good around the greens. I need to spend at least two hours a week on chipping",
          completed: 0,
          step_number: 1
        },
        {
          project_id: 6,
          description: 'Full Swing Practice',
          notes: 'Spend more time hitting partial shots on the range',
          completed: 0,
          step_number: 2
        }
      ]);
    });
};
