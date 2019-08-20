import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Input() name: string;
  recipes: Recipe[]
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
