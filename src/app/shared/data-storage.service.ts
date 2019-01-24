import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataStorageService {

    readonly baseURL = 'https://udemy-ng-http-4ed91.firebaseio.com/recipes.json';

    constructor(
        private http: Http,
        private recipeService: RecipeService
    ) {}

    storeRecipes() {
        return this.http.put(this.baseURL, this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get(this.baseURL).subscribe (
            (response: Response) => {
                this.recipeService.setRecipes(response.json());
            }
        );
    }
}
