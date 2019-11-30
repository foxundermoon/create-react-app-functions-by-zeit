import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/else">
          <Else />
        </Route>
      </Switch>

      <div>
        <main>
          <h1>Create React App + Go API</h1>
          <p>
            <a href="/api/date">
              <code>api/date</code> for the Date API with Go
            </a>
          </p>
          <br />

          <div>
            <ol>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/else">Else</Link>
              </li>
            </ol>
          </div>
          <h2>The date according to Go is --:</h2>
          {/* <p>{date ? date : "Loading date..."}</p> */}
        </main>
      </div>
    </Router>
  );
}

const Home = () => <div> Home page</div>;
const Else = () => <div> Else page</div>;
export default App;
