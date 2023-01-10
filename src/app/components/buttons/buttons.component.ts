import { counterState } from './../../store/initialState';
import { Reset, Increase, Decrease, ChangeText } from './../../store/actions';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  constructor(private store: Store<{ counter: counterState }>) {}
  onIncrement(): void {
    this.store.dispatch(Increase());
  }
  onDecrement(): void {
    this.store.dispatch(Decrease());
  }
  onReset(): void {
    this.store.dispatch(Reset());
  }
  onChangeText() {
    this.store.dispatch(ChangeText({ value: 'Text Have Changed' }));
  }
}
