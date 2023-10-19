import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { NavBar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
