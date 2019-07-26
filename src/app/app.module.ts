import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
