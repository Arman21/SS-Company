import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/section/home-page/home-page.component';
import { AboutPageComponent } from './components/section/about-page/about-page.component';
import { ProductsPageComponent } from './components/section/products-page/products-page.component';
import { NavComponent } from './components/nav/nav.component';
import { SectionComponent } from './components/section/section.component';
import { NotFoundPageComponent } from './components/section/not-found-page/not-found-page.component';
import { ProductFirstComponent } from './components/section/product-first/product-first.component';
import { ProductSecondComponent } from './components/section/product-second/product-second.component';
import { ProductThirdComponent } from './components/section/product-third/product-third.component';
import { MoreComponent } from './components/section/more/more.component';
import { NgAttributesDirective } from './directives/ng-attributes.directive';
import { ChangeColorDirective } from './directives/change-color.directive';
import { ChangeBgColorDirective } from './directives/change-bg-color.directive';
import { DescriptionPipe } from './pipes/description.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { NgAttribute2Directive } from './directives/ng-attribute2.directive';
import { SignUpComponent } from './components/section/product-first/sign-up/sign-up.component';
import { ApplicantsComponent } from './components/section/applicants/applicants.component';

@NgModule({
    declarations : [
        AppComponent,
        HomePageComponent,
        AboutPageComponent,
        ProductsPageComponent,
        NavComponent,
        SectionComponent,
        NotFoundPageComponent,
        ProductFirstComponent,
        ProductSecondComponent,
        ProductThirdComponent,
        MoreComponent,
        NgAttributesDirective,
        ChangeColorDirective,
        ChangeBgColorDirective,
        DescriptionPipe,
        FooterComponent,
        NgAttribute2Directive,
        SignUpComponent,
        ApplicantsComponent
    ],
    imports : [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers : [],
    bootstrap : [AppComponent]
})

export class AppModule { }
