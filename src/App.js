import Slides from './components/Slides';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-content">
        <Slides />
      </div>
    </div>
  );
}

export default App;
