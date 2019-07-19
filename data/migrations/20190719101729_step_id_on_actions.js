exports.up = function(knex) {
  return knex.schema.table('actions', tbl => {
    tbl
      .integer('step_number')
      .notNullable()
      .unsigned()
      .defaultTo(1);
  });
};

exports.down = function(knex) {
  return knex.schema.table('actions', tbl => {
    tbl.dropColumn('step_number');
  });
};
