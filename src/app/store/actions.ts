import { createAction, props } from '@ngrx/store';

export const Increase = createAction('Increase');
export const Decrease = createAction('Decrease');
export const Reset = createAction('Reset');
export const ChangeText = createAction(
  'ChangeText',
  props<{ value: string }>()
);
export const AddCustom = createAction('AddCustom', props<{ value: number }>());
