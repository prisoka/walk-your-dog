exports.up = function(knex, Promise) {
  return knex.schema.createTable('walkers', (table) => {
    table.increments()
    table.string('walkername').notNullable()
    table.string('address').notNullable()
    table.integer('mobile')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('walkers')
}
