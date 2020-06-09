import { Component , OnInit , OnDestroy} from '@angular/core';
import { StorageServiceService } from '../../../storage-service.service';

@Component({
    selector  : 'app-about-page',
    templateUrl : './about-page.component.html',
    styleUrls : ['./about-page.component.css']
})

export class AboutPageComponent implements OnInit , OnDestroy {
	public timer : any;
	public day : any;
	public hour : any;
	public minute : any;
	public second : any;

    constructor(private storage : StorageServiceService) { 

    }

    ngOnInit() {
        let futureDate = new Date(2020 , 11 , 30 , 16 , 45 , 20).getTime();
        this.timer = setInterval(() => {
        	let now = new Date().getTime(); 
        	let difference = futureDate - now;
        	let day = Math.floor(difference / (1000 * 60 * 60 * 24));
        	let hour = Math.floor(difference %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        	let minute = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
        	let second = Math.floor(difference % (1000 * 60) / 1000) ;
        	this.day = day + "D";
        	this.hour = hour + "H";
        	this.minute = minute + "M";
        	this.second = second + "S";
        	if (difference < 0) {
        		clearInterval(this.timer);
        		this.day = this.hour = this.minute = this.second = 0;
        	}
        } , 1000);
	}
	
	ngOnDestroy() {
		clearInterval(this.timer);
	}

}
