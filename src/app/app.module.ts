import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { OutputComponent } from './components/output/output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers';
import { CutominputsComponent } from './components/cutominputs/cutominputs.component';

@NgModule({
  declarations: [AppComponent, ButtonsComponent, OutputComponent, CutominputsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
