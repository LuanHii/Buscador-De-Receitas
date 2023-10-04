import Meal from './components/Meal'
import './components/style.css';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/" element={<Meal></Meal>}></Route>
      </Routes>
    
      
    </div>
  );
}

export default App;
