import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllFrontComponent } from './Front/all-front/all-front.component';
import { HeaderComponent } from './Front/header/header.component';
import { FooterFrontComponent } from './Front/footer-front/footer-front.component';
import { AllBackComponent } from './Back/all-back/all-back.component';
import { SidebarComponent } from './Back/sidebar/sidebar.component';
import { FooterComponent } from './Back/footer/footer.component';
import { NavbarComponent } from './Back/navbar/navbar.component';
import { HomebackComponent } from './Back/homeback/homeback.component';
import { HomeComponent } from './Front/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { ChaudiereComponent } from './Back/chaudiere/chaudiere.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { AuthLayoutComponent } from './Authentication/auth-layout/auth-layout.component';
import { SigninfComponent } from './Authentication/signinf/signinf.component';
import { AuthInterceptor } from './Services/auth.interceptor';
import { ProjetComponent } from './Back/projet/projet.component';
import { FormulaireContactComponent } from './Back/formulairecontact/formulairecontact.component';
import { ServicComponent } from './Back/servic/servic.component';
import { ServicfComponent } from './Front/servicf/servicf.component';
import { ChaudierefComponent } from './Front/chaudieref/chaudieref.component';
import { FormulairecontactfComponent } from './Front/formulairecontactf/formulairecontactf.component';
import { FaqComponent } from './Front/faq/faq.component';




@NgModule({
  declarations: [
    AppComponent,
    AllFrontComponent,
    HeaderComponent,
    FooterFrontComponent,
    AllBackComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    HomebackComponent,
    HomeComponent,
    ChaudiereComponent,
    RegisterComponent,
    SigninfComponent,
    ProjetComponent,
    FormulaireContactComponent,
    ServicComponent,
    ServicfComponent,
    ChaudierefComponent,
    FormulairecontactfComponent,
    SigninfComponent,
    AuthLayoutComponent,
    FaqComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
