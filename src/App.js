import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Weather from "./Weather";





function App() {
  return (
    <div className="App">


      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Weather" element={<Weather/>}/>
        
        </Routes>
     
    </div>
  );
}

export default App;
