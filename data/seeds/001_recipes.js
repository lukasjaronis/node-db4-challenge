
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'Macaroni and Cheese', preptime: '10 minutes', servings:'2-4 persons'}, // 1
        {name: 'Burger', preptime: '10 minutes', servings:'1 person'}, // 2
        {name: 'Pizza', preptime: '15 minutes', servings:'4-5 persons'} // 3
      ]);
};


//name, preptime, servings