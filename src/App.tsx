import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import "./App.css";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./fontawesome";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Todo />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
