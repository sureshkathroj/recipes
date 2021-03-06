import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
    path:'', component:MenuComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:"recipe",component:RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
