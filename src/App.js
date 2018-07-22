import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Create_Bookmark from "./components/bookmark/Create_Bookmark";
import AdvancedBookmark from "./components/advanced_bookmark/AdvancedBookmark";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          {/* Routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/add-bookmark" component={Create_Bookmark} />
          <Route
            exact
            path="/advanced_bookmarking"
            component={AdvancedBookmark}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
