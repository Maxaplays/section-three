import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';
import {ShoopingService} from '../shooping-list/shooping.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tacos Recipe',
      'This is a Tacos Recipe',
      'https://tse1.mm.bing.net/th?id=OIP.JrM-W6WOq7IkR8dx6AMryAHaFF&pid=Api&P=0&w=237&h=164',
      [
        new Ingredient('meat', 5),
        new Ingredient('cheese', 5),
      ]),
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('tomato', 1)
      ])
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredientsToShoppingList(ingredients);
  }
  constructor(private shoppingService: ShoopingService) {}
}
