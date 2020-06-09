import { Component , OnInit } from '@angular/core';
import { StorageServiceService } from '../../../storage-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector  : 'app-product-first',
    templateUrl : './product-first.component.html',
    styleUrls : ['./product-first.component.css']
})

export class ProductFirstComponent implements OnInit  {
    public title : string;
    public page : string = 'Page';
    public data : string = 'applicants';

    public classStorage : Object = {
        'titleText' : true
    };

    constructor(private storage : StorageServiceService , private route : ActivatedRoute) { 

    }

    ngOnInit() {
        this.route.params.subscribe(param => {
            for(let key in param) {
                this.title = param[key];
            }
        });
    }

    showApplicants(date) {
        localStorage.setItem('number',JSON.stringify(this.storage.number));
    }

}
