
exports.seed = function(knex) {
      return knex('instructions').insert([
        {recipe_id: 1, instruction: 'Instruction 1 for 1'},
        {recipe_id: 1, instruction: 'Instruction 2 for 1'},
        {recipe_id: 1, instruction: 'Instruction 3 for 1'},
        //
        {recipe_id: 2, instruction: 'Instruction 1 for 2'},
        {recipe_id: 2, instruction: 'Instruction 2 for 2'},
        {recipe_id: 2, instruction: 'Instruction 3 for 2'},
        {recipe_id: 2, instruction: 'Instruction 4 for 2'},
        //
        {recipe_id: 3, instruction: 'Instruction 1 for 3'},
        {recipe_id: 3, instruction: 'Instruction 2 for 3'},
        {recipe_id: 3, instruction: 'Instruction 3 for 3'},
        {recipe_id: 3, instruction: 'Instruction 4 for 3'},
        {recipe_id: 3, instruction: 'Instruction 5 for 3'},
      ]);
};
