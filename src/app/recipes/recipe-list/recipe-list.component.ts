import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://d2qpatdq99d39w.cloudfront.net/wp-content/uploads/2020/06/09091934/lolas-red-velvet-cupcake-recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
