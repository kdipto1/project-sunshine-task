import "./App.css";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import {Routes,Route} from 'react-router-dom';
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Services />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
