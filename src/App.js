import './App.css';
import Navbar from './components/navbar/navbar';
import Slides from './components/slides/slides';
import KelasWeekend from './components/kelasweekend/kelasweekend';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <br />
        <Slides />
        <br />
        <KelasWeekend />
      </header>
    </div>
  );
}

export default App;
