import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Gajar ka halva', 
      'A super-testy Gajar ka halva - jsut awesome!', 
      'https://tastedrecipes.com/wp-content/uploads/2020/01/gajar-ka-halwa-recipe-1280x720.png', 
      [ 
        new Ingredient('Gajar', 20),
        new Ingredient('Ghi', 2),
        new Ingredient('kaju, Badam', 20)
      ]),
    new Recipe(
      'Testy coockies', 
      'A testy coockies - yummyy!', 
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/baking-recipes-1.jpg', 
      [
        new Ingredient('chocolate', 10),
        new Ingredient('Biscite', 20)
      ])
  ];
  constructor(private shoppinglistService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppinglistService.addIngredients(ingredients);
  }
}
