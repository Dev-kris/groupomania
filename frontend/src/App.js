import './App.css';
import SideNav from './components/SideNav';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SideNav />

        <Main />
      </div>
    </div>
  );
}

export default App;
