import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './components/assets/css/index.css'
import Main from './components/jsx/MainComponents';
import stores from './redux/store';

function App() {
  return (
    <Provider store={stores}>
      <BrowserRouter >
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
