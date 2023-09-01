import logo from './logo.svg';
import './App.css';
import AdoptionListing from './AdoptionListing';

function App() {
  return (
    <div className="App">
      <p>Hello GA React Development Class! :)</p>
      <AdoptionListing name="Freddie" picture="https://placekitten.com/200/150"/>
      <AdoptionListing name="Mittens" picture="https://placekitten.com/205/150"/>
    </div>
  );
}

export default App;
