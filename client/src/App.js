import React from "react"; 
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import search from "./pages/search"; 
import saved from "./pages/saved"; 
import NoMatch from "./pages/NoMatch"; 


function App(){
  return(
    <Router>
      <div>

        <switch>
          <Route exact path="/" component={search}/>
          <Route exact path="/search" component={search}/>
          <Route exact path="/books" component={saved}/>
          <Route exat path="/books/:id" component={saved}/>
          <Route component={NoMatch}/>
        </switch>
      </div>
    </Router>
  );
}

export default App; 