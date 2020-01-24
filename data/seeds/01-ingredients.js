exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { id: 1, name: 'Ing 1'},
    { id: 2, name: 'Ing 2'},
    { id: 3, name: 'Ing 3'},
    { id: 4, name: 'Ing 4'},
    { id: 5, name: 'Ing 5'},
    { id: 6, name: 'Ing 6'},
    { id: 7, name: 'Ing 7'},
    { id: 8, name: 'Ing 8'},
    { id: 9, name: 'Ing 9'},
    { id: 10, name: 'Ing 10'},
  ])
}