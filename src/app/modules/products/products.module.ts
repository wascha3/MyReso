import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { PacksComponent } from './components/packs/packs.component';
import { IngredientsCategoriesComponent } from './components/ingredients-categories/ingredients-categories.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';


@NgModule({
  declarations: [CategoriesComponent, ProductsListComponent, PacksComponent, IngredientsCategoriesComponent, IngredientsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
