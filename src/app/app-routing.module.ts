import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
// import {ProductBuscaComponent} from './busca/busca.component';


const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'product-detail/:id', component: ProductDetailComponent},
    {path: 'products', component: ProductComponent},
    {path: 'users', component: UserComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    // {path: 'busca', component: ProductBuscaComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
