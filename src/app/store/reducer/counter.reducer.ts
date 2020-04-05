import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../action/counter.actions';
import { state } from '@angular/animations';
import { count } from 'rxjs-compat/operator/count';
 

export interface CounterState {
  count: any;
  type: string;
}

export const initialState: CounterState ={
  count: 4 ,
  type: '德玛西亚'
};

//解构赋值

// let state = {
//   count:4,
//   type:'德玛西亚'
// }
//console.log('state:',{...state,count:state.count+2});//{count: 6, type: "333333"}

const _counterReducer = createReducer(
  initialState,
  on(increment, state => ({...state,count:state.count+1})),
  on(decrement, state => ({...state,count:state.count-1})),
  on(reset, state => ({...state,count:0}))
);
 
export function counterReducer(state, action) {

  console.log('re-states222:',{...state});
  // {...state} 就是 {count: 4 ,type: '德玛西亚'}
  return _counterReducer(state, action);
}