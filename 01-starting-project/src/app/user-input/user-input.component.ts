import {Component, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserInputModel} from "./user-input.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(5);
  enteredDuration = signal(10);
  calculated = output<UserInputModel>();

  onSubmit() {
    this.emitUserInputEvent();
  }

  onCalculate() {
    this.emitUserInputEvent();
  }

  onReset() {
    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(5);
    this.enteredDuration.set(10);
    this.emitUserInputEvent();
  }

  private emitUserInputEvent() {
    this.calculated.emit(
      {
        initialInvestment: this.enteredInitialInvestment(),
        annualInvestment: this.enteredAnnualInvestment(),
        expectedReturn: this.enteredExpectedReturn(),
        duration: this.enteredDuration()
      }
    )
  }
}
