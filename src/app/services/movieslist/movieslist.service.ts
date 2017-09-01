import { Injectable } from '@angular/core';

@Injectable()
export class MovieslistService {
    listItems: any[] = ['abc','def','ghi','jkl'];
    constructor() {}
    getMovies(){
        return this.listItems;
    }
}

