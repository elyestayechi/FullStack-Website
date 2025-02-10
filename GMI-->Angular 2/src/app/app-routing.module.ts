import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFrontComponent } from './Front/all-front/all-front.component';
import { HomeComponent } from './Front/home/home.component';
import { AllBackComponent } from './Back/all-back/all-back.component';
import { HomebackComponent } from './Back/homeback/homeback.component';
import { ChaudiereComponent } from './Back/chaudiere/chaudiere.component';
import { ProjetComponent } from './Back/projet/projet.component';
import { FormulaireContactComponent } from './Back/formulairecontact/formulairecontact.component';
import { ServicComponent } from './Back/servic/servic.component';
import { ServicfComponent } from './Front/servicf/servicf.component';
import { ChaudierefComponent } from './Front/chaudieref/chaudieref.component';
import { FormulairecontactfComponent } from './Front/formulairecontactf/formulairecontactf.component';
import { AuthLayoutComponent } from './Authentication/auth-layout/auth-layout.component';
import { SigninfComponent } from './Authentication/signinf/signinf.component';
import { AboutComponent } from './Front/about/about.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { FaqComponent } from './Front/faq/faq.component';


const routes: Routes = [
  { 
    path: '', 
    component: AllFrontComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'services', component: ServicfComponent },
      { path: 'chaudieres', component: ChaudierefComponent },
      { path: 'contact-us', component: FormulairecontactfComponent },
      { path: 'about', component: AboutComponent },
      { path: 'faq', component: FaqComponent }
    ]
  },
  { 
    path: 'admin',
    component: AllBackComponent,
    children: [
      { path: 'dashboard', component: HomebackComponent },
      { path: 'chaudiere', component: ChaudiereComponent },
      { path: 'projet', component: ProjetComponent },
      { path: 'formulaire', component: FormulaireContactComponent },
      { path: 'service', component: ServicComponent }
    ]
  },
  { 
    path: 'auth', 
    component: AuthLayoutComponent, // Use the new layout for signin
    children: [
      { path: 'signin', component: SigninfComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
