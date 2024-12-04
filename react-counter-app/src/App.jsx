import {Routes,Route} from 'react-router-dom'
import Home from "./Components/Home"
import StopWatch from './Components/StopWatch';
import Counter from './Components/Counter';

const App = () =>{
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/counter" element = {<Counter />}></Route>
        <Route path="/stopwatch" element = {<StopWatch />}></Route>
        <Route path="*" element = {<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App;