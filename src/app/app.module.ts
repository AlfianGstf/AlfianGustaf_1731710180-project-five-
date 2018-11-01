import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

//tambahan
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";

//Tambahkan (2)
import { RecipeItemComponent } from "./recipe/recipe-list/recipe-item/recipe-item.component";

//Tambahkan (3)
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { SharedComponent } from './shared/shared.component';
import { FooterGustafComponent } from './FooterGustaf/FooterGustaf.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingListComponent,

  //tambahan
  RecipeListComponent,
  RecipeDetailComponent,

  //Tambahkan (2)
  RecipeItemComponent,

//Tambahkan (3)
ShoppingEditComponent,
SharedComponent,
FooterGustafComponent,
DropdownDirective
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
