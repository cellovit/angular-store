// core

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// components

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HomeComponent} from './home/home.component';
import {PostTestComponent} from './post-test/post-test.component';   // test only
import {UserComponent} from './user/user.component';
// import {ProductBuscaComponent} from './busca/busca.component'

import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';

// services

import {PostService} from './post-test/post.service';
import {ProductService} from './product/product.service';
import {UserService} from './user/user.service';
// import {ProductBuscaService} from './busca/busca.service';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        ProductDetailComponent,
        HomeComponent,
        PostTestComponent,
        UserComponent,
        RegisterComponent,
        LoginComponent
        // ProductBuscaComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [ProductService, PostService, UserService],
    bootstrap: [AppComponent]
})

export class AppModule {}
