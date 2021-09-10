import './App.css';
import Movies from './pages/Movies';
import Signup from './pages/Signup';

function App() {
  let user = false;
  return (
    <div className="App">
      {user ? (
        <div className="app">
          <div className="app__container">
            <Movies />
          </div>
        </div>
      ) : (
        <Signup />
      )}
    </div>
  );
}

export default App;
