import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrimDirective } from './beer/trim.directive';
import { SelectDirective } from './beer/select.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './beer/store';
import { BeerCreatorComponent } from './beer/containers/beer-creator/beer-creator.component';
// components
import { BeerFormComponent } from './beer/components/beer-form/beer-form.component';
import { BeerListComponent } from './beer/components/beer-list/beer-list.component';
import { BeerButtonComponent } from './beer/components/beer-button/beer-button.component';
import { BeerNameComponent } from './beer/components/beer-name/beer-name.component';
import { BeerSelectorComponent } from './beer/components/beer-selector/beer-selector.component';
import { BeerSelectedComponent } from './beer/components/beer-selected/beer-selected.component';
import { JoinPipe } from './beer/pipes/join.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TrimDirective,
    SelectDirective,
    BeerCreatorComponent,
    BeerFormComponent,
    BeerListComponent,
    BeerButtonComponent,
    BeerNameComponent,
    BeerSelectorComponent,
    BeerSelectedComponent,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
