import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '¡HOLI! BIENVENIDO A NUESTRA APP';
  name = 'JAI, VANE Y TIVEN';
  num1 = 2;
  num2 = 3;
  resultSuma: number;
  /**
   * Constructor function of the app component
   */

  constructor(){
    console.log('CONSTRUCTOR...APP component created!!!');
    console.log('RESULT SUMA:', this.resultSuma);
  }
/**
 * function to add two numers
 */
}
