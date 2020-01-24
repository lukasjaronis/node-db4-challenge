const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('recipe_ingredients as ring')
        .select('ingredients.name')
        .where({ recipe_id })
        .join('ingredients', 'ingredients.id', 'ring.ingredient_id')
}

function getInstructions(recipe_id){
    return db('instructions as i')
        .select('recipes.name', 'i.instruction')
        .where({ recipe_id })
        .join('recipes', 'recipes.id', 'i.recipe_id')
}