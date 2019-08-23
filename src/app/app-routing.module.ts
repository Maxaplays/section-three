import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoopingListComponent} from './shooping-list/shooping-list.component';
import {NgModule} from '@angular/core';
import {RecipesStartComponent} from './recipes/recipes-start/recipes-start.component';
import {RecipesItemComponent} from './recipes/recipes-list/recipes-item/recipes-item.component';
import {RecipesDetailComponent} from './recipes/recipes-detail/recipes-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipesStartComponent},
      {path: ':id', component: RecipesDetailComponent}
    ]},
  {path: 'shoppingList', component: ShoopingListComponent}
];

@NgModule ({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
