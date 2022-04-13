import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';

// HEADER AND FOOTER 
import { CommonHeaderComponent } from './common-components/common-header/common-header.component';
import { CommonFooterComponent } from './common-components/common-footer/common-footer.component';

// HOME PAGE
import { HomeBodyComponent } from './home/home-body/home-body.component';

// EQUIPE PAGE
import { EquipeBodyComponent } from './equipe/equipe-body/equipe-body.component';

// INSTALLATIONS PAGE
import { InstallationsBodyComponent } from './installations/installations-body/installations-body.component';

// PRESTATIONS PAGE
import { PrestationsBodyComponent } from './prestations/prestations-body/prestations-body.component';

// TRAVAIL ET ENSEIGNEMENT PAGE
import { TravailEnseignementBodyComponent } from './prestations/travail-enseignement/travail-enseignement-body/travail-enseignement-body.component';

// FORMULES ET TARIFS
import { FormulesTarifsBodyComponent } from './prestations/formules-tarifs/formules-tarifs-body/formules-tarifs-body.component';

// CONTACT PAGE
import { ContactBodyComponent } from './contact/contact-body/contact-body.component';

// STAGES PAGE
import { StagesBodyComponent } from './prestations/stages/stages-body/stages-body.component';





const routes : Routes = [
  { path : 'home', component : HomeBodyComponent },
  { path : 'equipe', component : EquipeBodyComponent },
  { path : 'installations', component : InstallationsBodyComponent },
  { path : 'travailetenseignement', component : PrestationsBodyComponent },
  { path : 'formulesettarifs', component : FormulesTarifsBodyComponent },
  { path : 'contact', component : ContactBodyComponent },
  { path : 'stages', component : StagesBodyComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    HomeBodyComponent,
    EquipeBodyComponent,
    InstallationsBodyComponent,
    PrestationsBodyComponent,
    TravailEnseignementBodyComponent,
    FormulesTarifsBodyComponent,
    ContactBodyComponent,
    StagesBodyComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
