import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Course from "./Components/Course/Course";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/course/:id" element={<Course/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
