import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; //This a routing tool
import Homepage from "./components/homepage.component.js";

/*
This is the primary "driver" for the website. The App is the full site.
Each function named in the Route paths will be a function that is defined in here.
That function takes a modified HTML descriptor which is native to react. When we run it,
the webiste converts this into real HTML in order to display what we want.

Each of the 'Route' options in the main App() function are treated as url links, 
so if we're at starkvillediy.com/ then that's our home page and it returns the associated function.
*/


function App() {
  return (
    <Router>
      <Routes> 
        <Route path = "/" exact element = {<Homepage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
