
import './App.css';
import { Provider } from 'react-redux';
import store from './component/store';
import Dashboard from './component/Dashboard';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Dashboard />
       
      </Provider>
    </div>
  );
}

export default App;