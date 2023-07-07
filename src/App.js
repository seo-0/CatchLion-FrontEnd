import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Detail from "./Detail";

function App() {
  return (
    <div>
      {/* <header className="App-header"> */}
        <Routes>
          <Route element ={<Home />} />
          <Route element ={<Detail />} />
          <Route element ={<Register />} />
          <Route element ={<Login />} />
        </Routes>
      {/* </header> */}
    </div>
  );
}

export default App;
