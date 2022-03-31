import { client } from "@tilework/opus";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";


class App extends React.Component {
  render() {
    return (
      <>
      {client.setEndpoint('http://localhost:4000/')}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Category />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
