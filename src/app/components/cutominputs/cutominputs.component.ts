import { AddCustom } from './../../store/actions';
import { counterState } from './../../store/initialState';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cutominputs',
  templateUrl: './cutominputs.component.html',
  styleUrls: ['./cutominputs.component.css'],
})
export class CutominputsComponent {
  constructor(private store: Store<{ couner: counterState }>) {}
  onAddCustomVal() {
    const data = document.getElementById('custominput') as HTMLInputElement;
    if (data.value.length > 0) {
      this.store.dispatch(AddCustom({ value: parseInt(data.value) }));
    }
  }
}
