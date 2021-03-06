import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { ShoopingEditComponent } from './shooping-list/shooping-edit/shooping-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoopingService} from './shooping-list/shooping.service';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoopingListComponent,
    ShoopingEditComponent,
    DropdownDirective,
    RecipesStartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoopingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
