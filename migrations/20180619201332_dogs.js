exports.up = function(knex, Promise) {
  return knex.schema.createTable('dogs', (table) => {
    table.increments()
    table.string('dogname').notNullable()
    table.string('ownername').notNullable()
    table.string('address').notNullable()
    table.integer('mobile')
    table.text('description')
    table.integer('dogage')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dogs')
}
