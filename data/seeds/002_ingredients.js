
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {name: 'Buns'}, // 1
        {name: 'Cheese'}, // 2
        {name: 'Ham'}, // 3
        {name: 'Majo'}, // 4
        {name: 'Cucumber'}, // 5
        {name: 'Milk'}, // 6
        {name: 'Pasta'}, // 7
        {name: 'Cheese'}, // 8
        {name: 'Garlic'} // 9
      ]);
};

// Burger - 1, 2, 3, 4, 5
// Mac & Cheese - 2, 6
// Pizza - 7, 8, 9
