import "./App.css";
import Homepage from "./Pages/Homepage.js";
import { Route, Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
