import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewComponent2Component } from './new-component2/new-component2.component';
import { NewComponent3Component } from './new-component3/new-component3.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NewComponent2Component,
    NewComponent3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
