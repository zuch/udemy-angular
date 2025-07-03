import {Component, computed, inject} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {InvestmentsService} from "../investments.service";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  results = computed(() => this.investmentService.resultsData());

  private investmentService = inject(InvestmentsService)
}
