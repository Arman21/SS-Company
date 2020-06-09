import { Component , OnInit } from '@angular/core';
import { StorageServiceService } from '../../../storage-service.service';

@Component({
    selector  : 'app-products-page',
    templateUrl : './products-page.component.html',
    styleUrls : ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit  {
    public line : string = 'underline';

    public classObj : Object = {
        'products_text' : true,
    }

    constructor(private storage : StorageServiceService) { 

    }

    ngOnInit() {
    
    }

    makeParam(text) {
        
    }

}
