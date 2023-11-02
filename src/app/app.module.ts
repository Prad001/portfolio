import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFirestore} from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGXuXTcOB9mLUe5DdVdnLjTPH55yZj4Yk",
  authDomain: "portfolio-fb89a.firebaseapp.com",
  projectId: "portfolio-fb89a",
  storageBucket: "portfolio-fb89a.appspot.com",
  messagingSenderId: "726770624656",
  appId: "1:726770624656:web:6f921b51f17d74da481015"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    
  ],
  imports: [
   
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
