/// <reference path="../allcomponents/homecomponent/body.component.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { BodyComponent } from '../AllComponents/HomeComponent/body.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'default', pathMatch: 'full' },
    //{ path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'my-app', component: AppComponent },
    { path: 'enterprise', component: BodyComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)      
    ],

    declarations: [
        AppComponent,
        BodyComponent
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }