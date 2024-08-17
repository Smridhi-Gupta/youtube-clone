import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <Cards></Cards>
      </div>
    </div>
  );
}

export default App;
