import React from "react"; 
import {BrowserRouter as Router, Route } from "react-router-dom"; 


function App(){
  return(
    <Router>
      <div>

        <switch>
          <Route exact path="/" component={}/>
          <Route exact path="" component={}/>
          <Route exact path="" component={}/>
        </switch>
      </div>
    </Router>
  );
}

export default App; 