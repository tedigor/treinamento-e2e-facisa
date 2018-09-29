import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  expression: string;
  currentNumber: string;
  operators: string[];
  numbers: string[];
  isOperating: boolean;

  constructor() {
    this.expression = '';
    this.currentNumber = '0';
    this.numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
    this.isOperating = false;
  }

  ngOnInit() {

  }

  test(num) {
    console.log(num);
  }

  append(value: string): void {
    if (this.isOperating) {
      this.currentNumber = '';
    }

    if (this.expression === '0') {
      this.expression = '';
    }

    // console.log(value);

    if (value in this.numbers) {
      if (this.currentNumber === '0') {
        this.currentNumber = '';
      }

      console.log('NUM');
      this.expression += value;
      this.currentNumber += value;
      this.isOperating = false;

    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      console.log('OP');
      this.expression += value;
      this.isOperating = true;

    } else if (value === '=') {
      console.log('EQ');
      this.calculate();

    } else if (value.toLowerCase() === 'c') {
      console.log('CLS');
      this.clearAll();
    }
  }

  /**
   * Handle key events here.
   */
  @HostListener('document:keypress', ['$event'])
  handleKey(event) {
    let keyValue = event['key'];
    if (keyValue === 'Enter') {
      keyValue = '=';
    }
    console.log('KEY: ', keyValue);
    this.append(keyValue);
  }

  calculate() {
    this.isOperating = false;
    console.log(this.expression);
    this.currentNumber = eval(this.expression).toString();
    this.expression = this.currentNumber;
  }

  clearAll() {
    this.expression = '';
    this.currentNumber = '0';
    this.isOperating = false;
  }
}
