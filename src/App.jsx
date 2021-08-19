import Home from './containers/Home';
import Sidebar from './components/Sidebar';
import Navigation from './containers/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
