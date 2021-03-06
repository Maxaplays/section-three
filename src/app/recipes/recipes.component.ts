import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  name1 = '';
  @Output() nameThrow = new EventEmitter<string>();
  @Output() dataThrow = new EventEmitter<string>();

  constructor(private recipeService: RecipesService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

  getName() {
    this.nameThrow.emit(this.name1);
  }

  passData(event: string) {
    this.dataThrow.emit(event);
  }
}
