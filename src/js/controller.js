import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

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
    recipeView.renderError();
  }
};

const constrolSearchResults = async function () {
  try {
    await model.loadSearchResults('pizza');
    console.log(model.state.search.results);
  } catch (err) {
    console.log(arr);
  }
};

constrolSearchResults();

const init = function () {
  recipeView.addHandlerRender(constrolRecipes);
};
init();
