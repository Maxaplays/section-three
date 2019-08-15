import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  @Input() name: string;
  recipes: Recipe[] = [
    new Recipe('Tacos Recipe', 'This is a Tacos Recipe',
      'https://tse1.mm.bing.net/th?id=OIP.JrM-W6WOq7IkR8dx6AMryAHaFF&pid=Api&P=0&w=237&h=164'),
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
  this.recipeWasSelected.emit(recipe);
  }
}
