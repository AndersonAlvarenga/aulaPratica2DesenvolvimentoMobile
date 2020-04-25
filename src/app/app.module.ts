import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { DataComponent } from './data/data.component';
import { EnderecoComponent } from './endereco/endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    DataComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
