import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';
import {ShoopingService} from './shooping.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoopingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
      (ingredient: Ingredient[]) => this.ingredients = ingredient
    );
  }

}
