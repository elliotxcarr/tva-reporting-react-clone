
import './App.css';
import SideMenu from './Components/SideMenu';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="absolute bg-navtorDark w-full h-full">
      <header className="">
        <TopBar/>
        <SideMenu/>
      </header>
    </div>
  );
}

export default App;
