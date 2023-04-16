// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ProductsComponent } from './pages/products/products/products.component';

// Services
import { RestService } from './services/rest/rest.service';
import { ManagerService } from './services/manager/manager.service';
import { LoginComponent } from './pages/login/login/login.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "login", component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    RestService,
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
