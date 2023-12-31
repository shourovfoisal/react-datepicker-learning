import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Basic, Layout, Navbar } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/basic-example" element={<Basic />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
