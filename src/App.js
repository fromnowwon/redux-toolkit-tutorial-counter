import './App.css';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import UserList from './components/UserList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
