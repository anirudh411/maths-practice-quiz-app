import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {QuizResultComponent} from '../quiz-result/quiz-result.component';

export interface Question {
  op1: number;
  op2: number;
  operator: string;
  value?: number | string;
  answer?: number;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(public dialog: MatDialog) {

  }

  private totalQuestions = 20;
  private questions: Question[] = [];
  private opertators = ['+', '-', '+', '/', '*'];
  private currentQuestion: Question;
  public currentIndex = 0;

  static evaluateAnswer(operatorOne: number, operatorTwo: number, operator: string) {
    // tslint:disable-next-line:no-eval
    let value = eval(operatorOne.toString() + operator + operatorTwo.toString());
    value = Number(value).toFixed(2);
    return Number(value);

  }

  static generateOperands(linit: number): number {
    return Math.ceil(Math.random() * linit);
  }

  ngOnInit() {
    this.generateQuestions();

  }

  generateQuestions(): void {
    for (let i = 0; i < this.totalQuestions; i++) {
      const op1 = QuizComponent.generateOperands(10);
      const op2 = QuizComponent.generateOperands(10);
      const operator = this.opertators[op1 % 4];
      this.questions.push({op1, op2, operator, value: '', answer: QuizComponent.evaluateAnswer(op1, op2, operator)});
    }
    this.setCurrentQuestion(0);
  }

  setCurrentQuestion(index) {
    this.currentQuestion = this.questions[index];
  }

  nextQuestionClickHandler() {
    this.currentIndex++;
  }

  submitButtonClickHandler() {
    this.dialog.open(QuizResultComponent, {
      width: '500px',
      data: {questions: this.questions}
    });
  }

  restartButtonClickHandler() {
    this.currentIndex = 0;
    this.generateQuestions();
  }
}
