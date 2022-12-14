import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import NavigationBar from "./Navigation/NavigationBar"

function App() {
  return (
    <Routes>

      <Route path = "Pismenniki-of-belarus/" element={<NavigationBar/>}>
        <Route index element = {<Home/>}/>
        
      </Route>
    </Routes>
  );
  /*<Route path = "writers" element ={<WritersList/>}/>
        <Route path="writers/:id" element = {<WritersInfo/>}/>*/
}

export default App;