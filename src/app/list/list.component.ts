import { Component, OnInit } from '@angular/core';
import { MovieslistService } from '../services/movieslist/movieslist.service';
@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    srcpath: string = 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg';
    title: string = 'Testing Directives and Binding';
    listItems: any[];
    constructor(private _movieslist: MovieslistService) {
        this.listItems = this._movieslist.getMovies();
    }

    ngOnInit() {}

    hiButton(){
        console.log('hie button clicked');
        alert('hi button clicked');
        
    }

}

