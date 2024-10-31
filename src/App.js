import './App.css';
import Sidebar from "./Sidebar";
import Header from './Header';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      <Header></Header>

      <div className="app__body">
        <Sidebar />
        <Feed />

      </div>
    </div>
  );
}

export default App;
