import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  name1 = ''
  @Output() nameThrow = new EventEmitter<string>();
  @Output() dataThrow = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  getName() {
    this.nameThrow.emit(this.name1);
  }

  passData(event: string) {
    this.dataThrow.emit(event);
  }
}
