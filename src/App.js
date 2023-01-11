
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Private1 from './components/Private1';
import Private2 from './components/Private2';
import Public1 from './components/Public1';
import Login from './components/Login';
import SecurityProvider from './context/SecurityProvider';
import React  from 'react';
import Protected from "./components/SecureRoute";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <SecurityProvider>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route
            path="/private1"
            element={
              <Protected>
                <Private1 />
              </Protected>
            }
          />
          <Route element={<Private2/>} path="/private2" />
          <Route element={<Public1/>} path="/public" />
          <Route element={<Login/>} path="/login" />
        </Routes>
        </SecurityProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
