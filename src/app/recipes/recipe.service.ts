import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Gajar ka halva', 
  //     'A super-testy Gajar ka halva - jsut awesome!', 
  //     'https://tastedrecipes.com/wp-content/uploads/2020/01/gajar-ka-halwa-recipe-1280x720.png', 
  //     [ 
  //       new Ingredient('Gajar', 20),
  //       new Ingredient('Ghi', 2),
  //       new Ingredient('kaju, Badam', 20)
  //     ]),
  //   new Recipe(
  //     'Testy coockies', 
  //     'A testy coockies - yummyy!', 
  //     'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/baking-recipes-1.jpg', 
  //     [
  //       new Ingredient('chocolate', 10),
  //       new Ingredient('Biscite', 20)
  //     ])
  // ];
  private recipes: Recipe[] = [];
  constructor(private shoppinglistService: ShoppingListService) { }

  
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppinglistService.addIngredients(ingredients);
  };

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
