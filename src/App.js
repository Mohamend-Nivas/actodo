import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([{ name: "nivas", password: "12345" }]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login users={users} setUsers={setUsers} />}
          />
          <Route
            path="/signup"
            element={<Signup users={users} setUsers={setUsers} />}
          />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
