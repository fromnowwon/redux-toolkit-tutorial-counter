import './App.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// reducer와  action 통합된 작은 store
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
    subtract: (state, action) => {
      state.value -= action.payload;
    }
  }
})

// store 통합
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }
})

// counter component
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div>
      <div>{count}</div>
      {/* 방식1 */}
      <button onClick={() => dispatch({ type: 'counter/add', payload: 3 })}>+</button>
      {/* 방식2 */}
      <button onClick={() => dispatch(counterSlice.actions.subtract(2))}>-</button>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
