import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    srcpath: string = 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg';
    title: string = 'Testing Directives and Binding';
    listItems: string[] = ['abc','def','ghi','jkl'];
    constructor() {}

    ngOnInit() {}

    hiButton(){
        console.log('hie button clicked');
        alert('hi button clicked');
        
    }

}

