import React from "react";
import Movies from "./Components/Movies";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Router>  {/* Provides the functionality of Routing in React */}
        <Nav />
        <Switch>  {/* Checks the path with the route entered */}
          <Route path='/' exact component={Home} /> {/* exact -> Checks the exact path with the route entered */}
          <Route path='/movies' component={Movies} />
          {/* <Route path='/about' component={About} /> */}
          {/* Props Passing in routing */}
          <Route path='/about' render={(props) => (
            <About {...props} isAuth={true} />
          )} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

{/* Project Finished */ }