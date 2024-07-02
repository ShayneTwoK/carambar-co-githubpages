import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: []
})
export class AppModule { }
