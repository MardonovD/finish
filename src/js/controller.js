import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const constrolRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    //1. fetch bilan malumotlarni olib keldikkkk....
    recipeView.renderSpinner();
    await model.loadRecipe(id);

    //2. render qilamiz
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError('salom siz notugri manzil kiritdingiz 🎃🎃🎃');
  }
};

const init = function () {
  recipeView.addHandlerRender(constrolRecipes);
};
init();



