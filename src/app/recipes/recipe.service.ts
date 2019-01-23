import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {


    private recipes: Recipe[] = [
        new Recipe('Chicken and Lemon Rice', 'Easy, low-budget, filling, and saisfying!', 
        'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418862-chicken-thighs-delish.jpg?resize=768:*',
        [
            new Ingredient('Chicken Thighs', 3),
            new Ingredient('Basmati Rice', 3)
        ]),
        new Recipe('Big Burger', 'Everythng you would want in a burger', 
        'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1177081/3625/2413/m1/fpnw/wm1/big-burger-vector-icon-converted1-01-.jpg?1460568336&s=4c3fea98d6e9511a8a4f9dadf3d90f4d',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }
}