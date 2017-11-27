import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { SearchComponent } from '../app/search/search.component';
import { AutoCompleteComponent } from '../app/autocomplete/autocomplete.component';
import { MyFilterPipe } from '../app/shared/myFilterPipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AutoCompleteComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
