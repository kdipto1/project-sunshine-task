import "./App.css";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import {Routes,Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import SocialLogin from "./Components/Login/SocialLogin";

function App() {
  return (
    <div className="">
      <Header/>
      {/* <Services /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <SocialLogin/>
    </div>
  );
}

export default App;
