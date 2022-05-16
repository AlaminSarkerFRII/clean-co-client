import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRouts";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
