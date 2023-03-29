import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import BenchIndexPage from "./components/BenchIndexPage";
import BenchShowPage from "./components/BenchShowPage";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/benches/:benchId">
            <BenchShowPage />
          </Route>
          <Route exact path="/">
            <BenchIndexPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;