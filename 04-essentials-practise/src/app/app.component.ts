import {Component, signal, inject} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {UserInputModel} from "./user-input/user-input.model";
import {InvestmentsService} from "./investments.service";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ]
})
export class AppComponent {

  private investmentService = inject(InvestmentsService)

  onCalculateInvestmentResults(input: UserInputModel) {
    this.investmentService.calculateInvestmentResults(input)
  }
}
