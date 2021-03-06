import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private commonService: CommonService, private router: Router) { }
  retrivedRecipe;
  allRecipes;

  ngOnInit(): void {
    this.getAll();
    // this.getRecipe(1001);
  }

  getAll(){
    this.commonService.getAllRecipes().subscribe(result => {
      this.allRecipes = result;
      console.log(this.allRecipes);
    })
  
  }

  getRecipe(id){
    this.commonService.getRecipe(id).subscribe(recipe => {
      this.retrivedRecipe = recipe;
      this.router.navigate(['/recipe', id]);
      console.log(this.retrivedRecipe);
    })
  }

}
