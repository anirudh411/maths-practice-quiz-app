import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {QuizResultComponent} from './components/quiz-result/quiz-result.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizResultComponent
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
    MatDialogModule,
    MatListModule,
  ],
  providers: [],
  entryComponents: [QuizResultComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
