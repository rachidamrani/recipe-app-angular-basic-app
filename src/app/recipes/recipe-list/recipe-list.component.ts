import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  selectedRecipe: Recipe;

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a test',
      'https://www.allrecipes.com/thmb/RAmhAGGdy3e0Swt_kJtUAY-uTGA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16354-easy-meatloaf-mfs-74-3d9368335f824e31ab2564932cc26fa3.jpg'
    ),
    new Recipe(
      'A test Recipe 2',
      'This is a test 2',
      'https://media.4rgos.it/i/Argos/cherry-cheesecake?maxW=1200&qlt=75&fmt.jpeg.interlaced=true'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
