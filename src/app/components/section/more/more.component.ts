import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector  : 'app-more',
    templateUrl : './more.component.html',
    styleUrls : ['./more.component.css']
})

export class MoreComponent implements OnInit  {
    public titleParam : any;

    constructor(private route : ActivatedRoute) { 

    }

    ngOnInit() {
        this.route.params.subscribe(param => {
            for(let key in param) {
                this.titleParam = param[key];
            }
        });
    }

}
