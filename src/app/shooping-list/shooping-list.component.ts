import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cheese', 10),
    new Ingredient('Tomato', 2)
  ];
  constructor() { }

  ngOnInit() {
  }

}
