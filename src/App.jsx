import Home from './containers/Home';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
