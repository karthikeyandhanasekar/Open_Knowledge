import { BrowserRouter } from 'react-router-dom';
import './components/assets/css/index.css'
import Main from './components/jsx/MainComponents';
function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
