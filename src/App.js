import './App.css';
import Password from './Password';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import PasswordList from './PasswordList';

function App() {
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem('PASSWORD_STATE')
      if (!serializedState) return 

      return JSON.parse(serializedState)
    } catch (err) {
      console.error(err)
    }
  }

 const saveState = state => {
   try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('PASSWORD_STATE', serializedState)
   } catch (err) {
     console.error(err)
   }
 }

  const persistedState = loadState()
  const store = createStore(reducers, persistedState)
  store.subscribe(() => saveState(store.getState()))
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Password Storage</h1>
        <Password />
        <PasswordList />
      </div>
    </Provider>
  );
}

export default App;
