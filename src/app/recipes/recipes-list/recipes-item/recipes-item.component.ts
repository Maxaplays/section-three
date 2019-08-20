import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() name: string;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
