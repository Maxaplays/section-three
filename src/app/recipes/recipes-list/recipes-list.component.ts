import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tacos Recipe', 'This is a Tacos Recipe',
      'https://tse1.mm.bing.net/th?id=OIP.JrM-W6WOq7IkR8dx6AMryAHaFF&pid=Api&P=0&w=237&h=164')
  ];
  constructor() { }

  ngOnInit() {
  }

}
