import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { store } from "./store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
