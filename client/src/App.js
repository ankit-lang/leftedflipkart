import './App.css';
import Home from './components/Home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <div style={{marginTop:55}}><Home />
    </div>
    
    </div>
  );
}

export default App;
