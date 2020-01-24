const express = require('express');
const recipes = require('./model');
const router = express.Router();

//GET
router.get('/', (req, res) => {
    recipes.getRecipes()
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.status(500).json({ errorMsg: `There was an error getting recipes. ${error}` });
    });
  });

  router.get('/:id/shoppingList', (req, res) => {
    recipes.getShoppingList(req.params.id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(error => {
      res.status(500).json({ errorMsg: `There was an error getting shopping list for id ${req.params.id}. ${error}` });
    });
  });

  router.get('/:id/instructions', (req, res) => {
    recipes.getInstructions(req.params.id)
    .then(steps => {
      res.json(steps);
    })
    .catch(error => {
      res.status(500).json({ errorMsg: `There was an error getting instructions for id ${req.params.id}. ${error}` });
    });
  });

  module.exports = router;