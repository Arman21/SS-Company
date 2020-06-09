import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HomePageComponent } from './components/section/home-page/home-page.component';
import { AboutPageComponent } from './components/section/about-page/about-page.component';
import { ProductsPageComponent } from './components/section/products-page/products-page.component';
import { ProductFirstComponent } from './components/section/product-first/product-first.component';
//import { ProductSecondComponent } from './components/section/product-second/product-second.component';
//import { ProductThirdComponent } from './components/section/product-third/product-third.component';
import { MoreComponent } from './components/section/more/more.component';
import { ApplicantsComponent } from './components/section/applicants/applicants.component';
import { NotFoundPageComponent } from './components/section/not-found-page/not-found-page.component';


const routes: Routes = [
    {path : '' , redirectTo : '/home-page' , pathMatch : 'full'},
    {path : 'home-page' , component : HomePageComponent},
    {path : 'about-page' , component : AboutPageComponent},
    {path : 'products-page' , component : ProductsPageComponent} , 
    {path : 'products-page/:title1' , component : ProductFirstComponent},
    //{path : 'products-second/:title2' , component : ProductSecondComponent},
    //{path : 'products-third/:title3' , component : ProductThirdComponent},
        /*children : [
            {path : 'product-first/:webApps' , component : ProductFirstComponent},
            {path : 'product-second/:digitalMarketing' , component : ProductSecondComponent},
            {path : 'product-third/:seo' , component : ProductThirdComponent}
    ]*/
    {path : 'more/:pageName' , component : MoreComponent},
    {path : 'applicants' , component : ApplicantsComponent},
    {path : '**' , component : NotFoundPageComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule { }
