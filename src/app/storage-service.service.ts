import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})

export class StorageServiceService  {
    public toShow : boolean = false;
    public case : string = '';
    public searchText : string = '';
    public title : string = 'cooperation';
    public number : number = 0;
    public searchArray : Array<string> = [];
    public usersArray : Array<any> = [];

    public pageArray : Array<any> = [
        {
          message : 'Best IT choice for business automation and digital marketing.',
          title : 'WHO WE ARE !',
          info : `SS_Solutions is a privately held company providing Omni-channel iGaming software
          solutions to the online, mobile and land-based verticals. Digitain is a company where
          brilliantly creative minds flourish and work together. Growing every day it has become
          our digital planet, our own unique virtual environment. We believe that teamwork can
          bring us closer to creating our vision of the Digital Universe. We have a unique position:
          technological flexibility, customer-centric behavior, and teamwork are the keys to our success.`,
          img1 : '../../../assets/Images/office_pic.jpg',
          img2 : '../../../assets/Images/instagram.jpg'
        },
        {
          info1 : `SS_Solutions is a privately held company providing Omni-channel iGaming software solutions
          to the online, mobile and land-based verticals.Digitain is a company where brilliantly creative
          minds flourish and work together.Growing every day it has become our digital planet,our own unique
          virtual environment.We believe that teamwork can bring us closer to creating our vision of the
          Digital Universe.We have a unique position:technological flexibility,customer-centric behavior,
          and teamwork are the keys to our success.Our story started in 1999 in Armenia,as a National Lottery,
          then growing into a B2C Affiliate company and finally becoming a software,platform,and Sportsbook
          solutions provider.Today we have more than 1,700 employees,75+ partners worldwide,and more than
          400 land-based bet shops worldwide.` ,
          title : 'The Product',
          info2 : `The multi-channel Digitain Gaming Platform allows operators to plug-in sportsbook,casino,
          live dealer and virtual sports modules,and includes an integrated payment gateway, bonus engine,
          CRM system and dedicated customer support.Our unique APIs also allow clients to customize the
          front-end user journey and user experience.With an extensive payment gateway,bonus engine,
          CRM system,and dedicated customer support 24/7,our market-leading platform provides everything
          required for fast market entry for our partners.The sportsbook product itself covers 65 sports,
          taking in 7,500 leagues,and offers more than 3,000 betting markets.It also offers odds on 35,000
          live events each month,while Digitain’s casino solution has 3,000-plus games from major casino
          suppliers (such as Novomatic,Microgaming,NetEnt and Playson).`,
          img1 : '../../../assets/Images/office_pic2.jpg',
          img2 : '../../../assets/Images/office_pic3.jpg'
        },
        {
          text1 : 'Web-Mobile-Desktop-Development',
          img1 : '../../../assets/Images/structural1.jpg',
          text2 : 'SEO-Marketing',
          img2 : '../../../assets/Images/structural2.jpg',
          text3 : 'Web-Graphic-Design',
          img3 : '../../../assets/Images/structural3.png'
        },
    ];

    constructor() { 
        setTimeout(() => {
            if (localStorage.getItem('user') != null) {
                this.usersArray = JSON.parse(localStorage.getItem('user'));
            }
            if (localStorage.getItem('number') != null) {
                this.number = JSON.parse(localStorage.getItem('number'));
            }
        },0);
    }

    public doCheck = () => {
        if (localStorage.getItem('date') == null) {
            if (localStorage.getItem('case') == null) {
                setTimeout(() => {
                    this.toShow = true;
                },2000);
            }
        }
    }

    public sendDates = function() {
        let dates = new Date();
        localStorage.setItem('date',JSON.stringify(dates));
        this.toShow = false;
        setTimeout(() => {
            localStorage.removeItem('date');
        },120000);
    }

    public toRemove = function() {
        this.toShow = false;
        if (this.toShow == false) {
            this.case = 'no';
            localStorage.setItem('case',this.case);
        }
    }

}
