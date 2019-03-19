import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe("Taco", "Best Taco", "https://www.tacobueno.com/assets/food/tacos/Taco_Crispy_Beef_990x725.jpg"),
    new Recipe("Pizza", "Best Pizza", "https://www.cookingclassy.com/wp-content/uploads/2013/09/spinach-artichoke-pizza3-alt-color+srgb.jpg")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
