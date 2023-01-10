import { initialState, counterState } from './../../store/initialState';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  // counter$!: Observable<{ counter: number; msg: string }>;
  counter$!: Observable<counterState>;
  msgs!: string;
  constructor(private store: Store<{ counter: counterState }>) {}
  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }
}
