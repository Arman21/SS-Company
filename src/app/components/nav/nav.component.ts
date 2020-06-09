import { Component , OnInit } from '@angular/core';
import { StorageServiceService } from '../../storage-service.service';

@Component({
    selector  : 'app-nav',
    templateUrl : './nav.component.html',
    styleUrls : ['./nav.component.css']
})

export class NavComponent implements OnInit  {
    public isTrue : boolean = false;
    public searchText : string = '';
    public title : Array<any> = ['HOME','ABOUT'];

    constructor(private storage : StorageServiceService) { 

    }

    ngOnInit() {
        if (localStorage.getItem('pages') != null) {
            this.storage.searchArray = JSON.parse(localStorage.getItem('pages'));
        }

        this.storage.doCheck();
    }

    openListContainer() {
        let action = setTimeout(() => {
            this.isTrue = true;
            setTimeout(() => {
                window.onclick = () => {
                    if (this.isTrue == true) {
                        this.isTrue = false;
                    }
                };
            },0);
            return action;
        },0);
    }

    giveValue(list) {
        for(let i = 0 ; i < this.storage.searchArray.length ; i++) {
            if (this.storage.searchArray[i] != '') {
                this.storage.searchText = list.innerText;
            }
        }
    }

    toClear() {
        if (this.storage.searchArray.length < 3) {
            this.storage.searchArray.push(this.storage.searchText);
        }
        localStorage.setItem('pages',JSON.stringify(this.storage.searchArray));
        this.storage.searchText = '';
    }

    writeText() {
        let lists = document.querySelectorAll('.lessons_list');
        if (this.storage.searchText != '') {           
            lists.forEach(item => {
                if (item.innerHTML.search(this.storage.searchText) == -1) {
                    item.classList.add('hide');
                }  
            });           
        }
        else {
            lists.forEach(item => {
                item.classList.remove('hide'); 
            }); 
        }
    }

}
