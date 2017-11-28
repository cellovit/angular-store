import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart.model';
import { Product } from '../product/product.model';
import { Router } from '@angular/router';
import { HistoryService } from './history.service';
import { History } from './history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private historyService: HistoryService, private router: Router) { }
  historical: History[];
  messageSucess = 'false';
  message: string;
  precoTotal = 0;

  getHistorical() {

    this.historyService.get().then(historical => {
      this.historical = historical;

      if (historical.length === 0) {
        this.message = 'Historico Vazio';
      }else {
        this.message = '';
      }
    });
  }

  goToHistory(id: string) {
    this.router.navigate(['/history-detail' + '/' + id]);
  }

  ngOnInit() {

    this.getHistorical();
  }
}
