import React, { Component } from "react";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Middle />
        <Footer />
      </div>
    );
  }
}

export default App;
