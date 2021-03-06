import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit, DoCheck {
  @Input() recipe: Recipe;
  @Input() name: string;
  @Input() nameOutside: string;
  dataPass = '';
  @Output() text = new EventEmitter<string>();

  constructor(private recipeService: RecipesService) {
  }


  ngDoCheck() {
    if (this.dataPass !== '') {
      this.text.emit(this.dataPass);
    } else {
      this.text.emit('');
    }
  }

  ngOnInit(): void {
  }

  toShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
  }
}
