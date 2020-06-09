import { Component , OnInit , Input , Output , EventEmitter} from '@angular/core';
import { StorageServiceService } from 'src/app/storage-service.service';

@Component({
    selector  : 'app-sign-up',
    templateUrl : './sign-up.component.html',
    styleUrls : ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit  {
    @Input() public title2 : string;

    public userName : string = '';
    public userSurname : string = '';
    public userMobile : string = '';
    public givenData : any;

    @Output() event : EventEmitter<any> = new EventEmitter();

    constructor(private storage : StorageServiceService) { 

    }

    ngOnInit() {
        let inputs = document.querySelectorAll('.dates');
        for(let i = 0 ; i < inputs.length ; i++) {
            inputs[i].addEventListener('focus',() => {
                inputs[i].setAttribute('style','border:5px solid rgb(14,199,231);');
            });
            inputs[i].addEventListener('blur',() => {
                 inputs[i].setAttribute('style','border:5px solid rgb(180,177,177);');
            });
        }

        if (localStorage.getItem('user') != null) {
            let newUsersArray = JSON.parse(localStorage.getItem('user'));
            for(let i = 0 ; i < newUsersArray.length ; i++) {
                this.userName = newUsersArray[i].name;
                this.userSurname = newUsersArray[i].surName;
                this.userMobile = newUsersArray[i].mobile;
            }
        }
    }

    showApplicants() {
        if (this.userName != '' && this.userSurname != '' && this.userMobile != '') {
            let userInfo = {
                name : this.userName,
                surName : this.userSurname,
                mobile : this.userMobile
            }
            this.storage.usersArray.push(userInfo);
            localStorage.setItem('user',JSON.stringify(this.storage.usersArray));
            this.userName = this.userSurname = this.userMobile = '';
            this.event.emit(this.storage.number++);
            setTimeout(() => {
                alert('Dear applicant you successfully signed up!');
            },500);
        }
        else {
            let newArray = [];
            newArray.push(this.userName,this.userSurname,this.userMobile);
            localStorage.setItem('lessInfo',JSON.stringify(newArray));
            let inputs = document.querySelectorAll('.dates');
            this.givenData = JSON.parse(localStorage.getItem('lessInfo'));
            for(let i = 0 ; i < this.givenData.length ; i++) {
                if (this.givenData[i] == '') {
                    inputs[i].setAttribute('style','border:5px solid rgb(14,199,231);');  
                }
                if (this.givenData[i] == null) {
                    inputs[i].setAttribute('style','border:5px solid rgb(14,199,231);');  
                }
            }
        }
    }

}
