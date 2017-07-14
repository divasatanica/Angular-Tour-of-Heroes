import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero-detail/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})


export class AppModule { }
