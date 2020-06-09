import { Component , OnInit } from '@angular/core';
import { StorageServiceService } from '../../../storage-service.service'

@Component({
    selector  : 'app-applicants',
    templateUrl : './applicants.component.html',
    styleUrls : ['./applicants.component.css']
})

export class ApplicantsComponent implements OnInit  {

    constructor(private storage : StorageServiceService) { 

    }

    ngOnInit() {

    }

    removeApplicant(index) {
        this.storage.usersArray.splice(index,1);
        localStorage.setItem('user',JSON.stringify(this.storage.usersArray));
        this.storage.number--;
        localStorage.setItem('number',JSON.stringify(this.storage.number));
    }

}
