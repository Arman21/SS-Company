import { Component , OnInit } from '@angular/core';
import { StorageServiceService } from '../../../storage-service.service';

@Component({
    selector  : 'app-home-page',
    templateUrl : './home-page.component.html',
    styleUrls : ['./home-page.component.css']
})

export class HomePageComponent implements OnInit  {
    public percent1 : any;
    public percent2 : any;
    public percent3 : any;
    public percent4 : any;

  
    constructor(private storage : StorageServiceService) { 

    }

    ngOnInit() {
        let time1 , time2 , time3 , time4;
        let currentCount1 , currentCount2 , currentCount3 , currentCount4;
        let border1 , border2 , border3 , border4;

        currentCount1 = currentCount2 = currentCount3 = currentCount4 = 0;

        border1 = document.getElementById("border1");
        border2 = document.getElementById("border2");
        border3 = document.getElementById("border3");
        border4 = document.getElementById("border4");

        let incrementFirst = () => {
        	time1 = setInterval(() => {
        		this.percent1 = ++currentCount1 + "%";
        		if (currentCount1 == 25) {
        			border1.style.borderTopColor = "#3EC1D5";
        		}
        		else if (currentCount1 == 50) {
        			border1.style.borderRightColor = "#3EC1D5";
        		}
        		else if (currentCount1 == 75) {
        			border1.style.borderBottomColor = "#3EC1D5";
        		}
        		else if (currentCount1 == 100) {
        			border1.style.borderLeftColor = "#3EC1D5";
        			clearInterval(time1);
        		}
        	},25);
        }

        let incrementSecond = () => {
        	time2 = setInterval(() => {
        		this.percent2 = ++currentCount2 + "%";
        		if (currentCount2 == 25) {
        			border2.style.borderTopColor = "#3EC1D5";
        		}
        		else if (currentCount2 == 50) {
        			border2.style.borderRightColor = "#3EC1D5";
        		}
        		else if (currentCount2 == 75) {
        			border2.style.borderBottomColor = "#3EC1D5";
        			clearInterval(time2);
        		}
        	},18.75);
        }

        let incrementThird = () => {
        	time3 = setInterval(() => {
        		this.percent3 = ++currentCount3 + "%";
        		if (currentCount3 == 25) {
        			border3.style.borderTopColor = "#3EC1D5";
        		}
        		else if (currentCount3 == 50) {
        			border3.style.borderRightColor = "#3EC1D5";
        			clearInterval(time3);
        		}
        	},12.5);
        }

        let incrementFourth = () => {
        	time4 = setInterval(() => {
        		this.percent4 = ++currentCount4 + "%";
        		if (currentCount4 == 25) {
        			border4.style.borderTopColor = "#3EC1D5";
        			clearInterval(time4);
        		}
        	},6.25);
        }

        incrementFirst();
        incrementSecond();
        incrementThird();
        incrementFourth();

    }

}
