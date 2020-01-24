exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    { id: 1, step_number: 1, recipe_id: 1, instructions: 'Instruction For Step Number 1 / recID 1' },
    { id: 2, step_number: 2, recipe_id: 1, instructions: 'Instruction For Step Number 2 / recID 1' },
    { id: 3, step_number: 3, recipe_id: 1, instructions: 'Instruction For Step Number 3 / recID 1' },
//
    { id: 4, step_number: 1, recipe_id: 2, instructions: 'Instruction For Step Number 1 / recID 2' },
    { id: 5, step_number: 2, recipe_id: 2, instructions: 'Instruction For Step Number 2 / recID 2' },
    { id: 4, step_number: 3, recipe_id: 2, instructions: 'Instruction For Step Number 3 / recID 2' },
//
    { id: 6, step_number: 1, recipe_id: 3, instructions: 'Instruction For Step Number 1 / recID 3' },
    { id: 7, step_number: 2, recipe_id: 3, instructions: 'Instruction For Step Number 2 / recID 3' },
    { id: 8, step_number: 3, recipe_id: 3, instructions: 'Instruction For Step Number 3 / recID 3' }
  ])
}