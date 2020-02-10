import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { PacksComponent } from './components/packs/packs.component';
import { IngredientsCategoriesComponent } from './components/ingredients-categories/ingredients-categories.component';


const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'products-list',
    component: ProductsListComponent,
  },
  {
    path: 'packs',
    component: PacksComponent,
  },
  {
    path: 'ingredients-categories',
    component: IngredientsCategoriesComponent,
  },
  {
    path: 'ingredients',
    component: IngredientsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
