import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { History } from '../history/history.model';
import { HistoryService } from '../history/history.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})
export class HistoryDetailComponent implements OnInit {

  @Input() history: History;

  constructor(
    private historyService: HistoryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {

    this.route.paramMap
    .switchMap((params: ParamMap) => this.historyService.get().then(x => x.find(y => y.id === (params.get('id')))))
    .subscribe(history => this.history = history);
  }

  // getHistory(id: string): Observable<any> {

  //   this.historyService.get().then(history => {
  //     this.history = history.find(x => x.id === id);
  //   });

  // }


}
