import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UmwegeZumZielComponent } from './umwege-zum-ziel/umwege-zum-ziel.component';
import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ResearchWirRecherchierenDesBedarfComponent } from './research-wir-recherchieren-des-bedarf/research-wir-recherchieren-des-bedarf.component';
import { BeraterKnowhowWirhOrenDasGrasWachComponent } from './berater-knowhow-wirh-oren-das-gras-wach/berater-knowhow-wirh-oren-das-gras-wach.component';
import { UnserNetzwerkWirBringenSieinkontakComponent } from './unser-netzwerk-wir-bringen-sieinkontak/unser-netzwerk-wir-bringen-sieinkontak.component';
import { HeadhunterWirverschaffenIhnenZugangComponent } from './headhunter-wirverschaffen-ihnen-zugang/headhunter-wirverschaffen-ihnen-zugang.component';
import { PrivateEquityComponent } from './private-equity/private-equity.component';
import { UnternehmensnachfolgeComponent } from './unternehmensnachfolge/unternehmensnachfolge.component';
import { StartUpsComponent } from './start-ups/start-ups.component';
import { VorstandsportalComponent } from './vorstandsportal/vorstandsportal.component';
import { ZusatzlicheResearchleistungenComponent } from './zusatzliche-researchleistungen/zusatzliche-researchleistungen.component';
import { KundenerfahrungenComponent } from './kundenerfahrungen/kundenerfahrungen.component';
import { ArbeitgeberUndererKundenComponent } from './arbeitgeber-underer-kunden/arbeitgeber-underer-kunden.component';
import { ZahlenDatenFaktenComponent } from './zahlen-daten-fakten/zahlen-daten-fakten.component';
import { PositionierungComponent } from './positionierung/positionierung.component';
import { ZielfirMentlisteComponent } from './zielfir-mentliste/zielfir-mentliste.component';
import { SchriftlicheUnterlagenComponent } from './schriftliche-unterlagen/schriftliche-unterlagen.component';
import { BusinessPortratsComponent } from './business-portrats/business-portrats.component';
import { ManagerportratfilmComponent } from './managerportratfilm/managerportratfilm.component';
import { ArbeitszeugnisseComponent } from './arbeitszeugnisse/arbeitszeugnisse.component';
import { DigitalePrasenzComponent } from './digitale-prasenz/digitale-prasenz.component';
import { VorstellungsgesprachComponent } from './vorstellungsgesprach/vorstellungsgesprach.component';
import { UnternhmensdossiersComponent } from './unternhmensdossiers/unternhmensdossiers.component';
import { ArbeitsvertragsangeboteComponent } from './arbeitsvertragsangebote/arbeitsvertragsangebote.component';
import { UnternehmensCheckComponent } from './unternehmens-check/unternehmens-check.component';
import { LektoratComponent } from './lektorat/lektorat.component';
import { HansRainerVogelComponent } from './hans-rainer-vogel/hans-rainer-vogel.component';
import { DrDanielDetambelComponent } from './dr-daniel-detambel/dr-daniel-detambel.component';
import { BuroleitungDrDetambelComponent } from './buroleitung-dr-detambel/buroleitung-dr-detambel.component';
import { ProjeltmanagerComponent } from './projeltmanager/projeltmanager.component';
import { ResearcherComponent } from './researcher/researcher.component';
import { AnalystenComponent } from './analysten/analysten.component';
import { SchriflichesComponent } from './schrifliches/schrifliches.component';
import { FilmUndFotoComponent } from './film-und-foto/film-und-foto.component';
import { UbersetzerComponent } from './ubersetzer/ubersetzer.component';
import { ServiceComponent } from './service/service.component';
import { WirFordernExzellenzComponent } from './wir-fordern-exzellenz/wir-fordern-exzellenz.component';
import { InfoDienstPersonaliaComponent } from './info-dienst-personalia/info-dienst-personalia.component';
import { InfoDienstHeadhunterComponent } from './info-dienst-headhunter/info-dienst-headhunter.component';
import { InsiderDossierVerdeckterStellenmarktComponent } from './insider-dossier-verdeckter-stellenmarkt/insider-dossier-verdeckter-stellenmarkt.component';
import { PodcastComponent } from './podcast/podcast.component';
import { VAndDImDialogComponent } from './vand-dim-dialog/vand-dim-dialog.component';
import { VAndDInsideComponent } from './vand-dinside/vand-dinside.component';
import { OutplacementComponent } from './outplacement/outplacement.component';
import { UnsereBuchpublikationenComponent } from './unsere-buchpublikationen/unsere-buchpublikationen.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ExecutiveSearchComponent } from './executive-search/executive-search.component';
import { KarrierekillerComponent } from './karrierekiller/karrierekiller.component';
import { VorgesprachComponent } from './vorgesprach/vorgesprach.component';
import { LeistungsbroschureComponent } from './leistungsbroschure/leistungsbroschure.component';
import { StandorteAnfarhrtComponent } from './standorte-anfarhrt/standorte-anfarhrt.component';
import { BeiUnsZuGastComponent } from './bei-uns-zu-gast/bei-uns-zu-gast.component';
import { ErreichbarkeitComponent } from './erreichbarkeit/erreichbarkeit.component';
import { ArbeitenBeiVandDComponent } from './arbeiten-bei-vand-d/arbeiten-bei-vand-d.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatMenuModule }   from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const ROUTES: Routes = [
  {path:'UmwegezumZiel', component: UmwegeZumZielComponent },
  {path:'', component:HomeComponent},
  {path:'researchWirRecherchierenDesBedarf', component: ResearchWirRecherchierenDesBedarfComponent},
  {path:'beraterKnowhowWirhOrenDasGrasWach', component: BeraterKnowhowWirhOrenDasGrasWachComponent},
  {path:'unserNetzwerkWirBringenSieinkontak', component: UnserNetzwerkWirBringenSieinkontakComponent},
  {path:'headhunterWirverschaffenIhnenZugang', component:HeadhunterWirverschaffenIhnenZugangComponent},
  {path:'privateEquity', component:PrivateEquityComponent},
  {path:'unternehmensnachfolge', component:UnternehmensnachfolgeComponent},
  {path:'startUps', component:StartUpsComponent},
  {path:'vorstandsportal', component:VorstandsportalComponent},
  {path:'zusatzlicheResearchleistungen', component:ZusatzlicheResearchleistungenComponent},
  
  {path:'kundenerfahrungen', component:KundenerfahrungenComponent},
  {path:'ArbeitgeberUndererKunden', component:ArbeitgeberUndererKundenComponent},
  {path:'ZahlenDatenFakten', component:ZahlenDatenFaktenComponent},

  {path:'Positionierung',component:PositionierungComponent},
  {path:'ZielfirMentliste',component:ZielfirMentlisteComponent},
  {path:'SchriftlicheUnterlagen',component:SchriftlicheUnterlagenComponent},
  {path:'BusinessPortrats',component:BusinessPortratsComponent},
  {path:'Managerportratfilm',component:ManagerportratfilmComponent},
  {path:'Arbeitszeugnisse',component:ArbeitszeugnisseComponent},
  {path:'DigitalePrasenz',component:DigitalePrasenzComponent},
  {path:'Vorstellungsgesprach',component:VorstandsportalComponent},
  {path:'Unternhmensdossiers',component:UnternhmensdossiersComponent},
  {path:'Arbeitsvertragsangebote',component:ArbeitsvertragsangeboteComponent},
  {path:'UnternehmensCheck',component:UnternehmensCheckComponent},
  {path:'Lektorat',component:LektoratComponent},

  {path:'HansRainerVogel',component:HansRainerVogelComponent},
  {path:'DrDanielDetambel',component:DrDanielDetambelComponent},
  {path:'BuroleitungDrDetambel',component:BuroleitungDrDetambelComponent},
  {path:'Projeltmanager',component:ProjeltmanagerComponent},
  {path:'Researcher',component:ResearcherComponent},
  {path:'Analysten',component:AnalystenComponent},
  {path:'Schrifliches',component:SchriflichesComponent},
  {path:'FilmUndFoto',component:FilmUndFotoComponent},
  {path:'Ubersetzer',component:UbersetzerComponent},
  {path:'Service',component:ServiceComponent},
  {path:'WirFordernExzellenz',component:WirFordernExzellenzComponent},

  {path:'InfoDienstPersonalia',component:InfoDienstPersonaliaComponent},
  {path:'InfoDienstHeadhunter',component:InfoDienstHeadhunterComponent},
  {path:'InsiderDossierVerdeckterStellenmarkt',component:InsiderDossierVerdeckterStellenmarktComponent},
  {path:'Podcast',component:PodcastComponent},
  {path:'VAndDImDialog',component:VAndDImDialogComponent},
  {path:'VAndDInside',component:VAndDInsideComponent},
  {path:'Outplacement',component:OutplacementComponent},
  {path:'UnsereBuchpublikationen',component:UnsereBuchpublikationenComponent},
  {path:'FAQs',component:FAQsComponent},
  {path:'ExecutiveSearch',component:ExecutiveSearchComponent},
  {path:'Karrierekiller',component:KarrierekillerComponent},

  {path:'Vorgesprach',component:VorgesprachComponent},
  {path:'Leistungsbroschure',component:LeistungsbroschureComponent},
  {path:'StandorteAnfarhrt',component:StandorteAnfarhrtComponent},
  {path:'BeiUnsZuGast',component:BeiUnsZuGastComponent},
  {path:'Erreichbarkeit',component:ErreichbarkeitComponent},
  {path:'ArbeitenBeiVandD',component:ArbeitenBeiVandDComponent},
  {path:'Impressum',component:ImpressumComponent},
  {path:'Datenschutz',component:DatenschutzComponent}
 
];

export function httpTranslateLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    UmwegeZumZielComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ResearchWirRecherchierenDesBedarfComponent,
    BeraterKnowhowWirhOrenDasGrasWachComponent,
    UnserNetzwerkWirBringenSieinkontakComponent,
    HeadhunterWirverschaffenIhnenZugangComponent,
    PrivateEquityComponent,
    UnternehmensnachfolgeComponent,
    StartUpsComponent,
    VorstandsportalComponent,
    ZusatzlicheResearchleistungenComponent,
    KundenerfahrungenComponent,
    ArbeitgeberUndererKundenComponent,
    ZahlenDatenFaktenComponent,
    PositionierungComponent,
    ZielfirMentlisteComponent,
    SchriftlicheUnterlagenComponent,
    BusinessPortratsComponent,
    ManagerportratfilmComponent,
    ArbeitszeugnisseComponent,
    DigitalePrasenzComponent,
    VorstellungsgesprachComponent,
    UnternhmensdossiersComponent,
    ArbeitsvertragsangeboteComponent,
    UnternehmensCheckComponent,
    LektoratComponent,
    HansRainerVogelComponent,
    DrDanielDetambelComponent,
    BuroleitungDrDetambelComponent,
    ProjeltmanagerComponent,
    ResearcherComponent,
    AnalystenComponent,
    SchriflichesComponent,
    FilmUndFotoComponent,
    UbersetzerComponent,
    ServiceComponent,
    WirFordernExzellenzComponent,
    InfoDienstPersonaliaComponent,
    InfoDienstHeadhunterComponent,
    InsiderDossierVerdeckterStellenmarktComponent,
    PodcastComponent,
    VAndDImDialogComponent,
    VAndDInsideComponent,
    OutplacementComponent,
    UnsereBuchpublikationenComponent,
    FAQsComponent,
    ExecutiveSearchComponent,
    KarrierekillerComponent,
    VorgesprachComponent,
    LeistungsbroschureComponent,
    StandorteAnfarhrtComponent,
    BeiUnsZuGastComponent,
    ErreichbarkeitComponent,
    ArbeitenBeiVandDComponent,
    ImpressumComponent,
    DatenschutzComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES),
    TranslateModule.forRoot(
      {
      loader:{
        provide:TranslateLoader,
        useFactory:httpTranslateLoaderFactory,
        deps:[HttpClient]

      }
    }
    )
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
