exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 64).notNullable();
      tbl.string('description', 256);
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo('1');
    })
    .createTable('actions', tbl => {
      tbl.increments();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.string('description', 256).notNullable();
      tbl.string('notes');
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo('1');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects').dropTableIfExists('actions');
};
