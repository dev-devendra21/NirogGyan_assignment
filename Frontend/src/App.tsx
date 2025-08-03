import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/doctors/:id" element={<Profile />} />
          <Route path="/feedback/:status" element={<Feedback />} />
          <Route path="*" element={<h1>404 Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
