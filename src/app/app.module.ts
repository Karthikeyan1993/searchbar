import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular2-highstock';




import { AppComponent } from './app.component';
import { SearchComponent } from '../app/search/search.component';
import { AutoCompleteComponent } from '../app/autocomplete/autocomplete.component';
import { MyFilterPipe } from '../app/shared/myFilterPipe.pipe';
import { ChartComponent } from '../app/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AutoCompleteComponent,
    MyFilterPipe,
    ChartComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
