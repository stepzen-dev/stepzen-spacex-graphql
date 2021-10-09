import "./App.css";
import { gql, useQuery } from "@apollo/client";
import StepZenLogo from "./light-blue.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rockets from "./rocket-information";
import Card from "./Card";

const GET_QUERY = gql`
  query MyQuery {
    capsule(id: "C105") {
      id
      landings
      original_launch
      reuse_count
      missions {
        flight
        name
      }
    }
  }
`;

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              {/* <li>
                <Link to='/'>Home</Link>
              </li> */}
              {/* <li>
                <Link to='/rockets'>Rockets Information</Link>
              </li> */}
            </ul>
          </nav>
          <Switch>
            <Route path="/rockets">
              <Rockets />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

function Home() {
  const { loading, error, data } = useQuery(GET_QUERY);
  console.log("DATA", data);

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <>
      <Card>
        <div className="App">
          <header className="App-header">
            <img src={StepZenLogo} alt="StepZen Logo" width="200px" />
            <p style={{ marginTop: "40px" }}>Capsule information pulled from StepZen Endpoint:</p>
            <span>id: {data.capsule.id}</span>
            <span>landings: {data.capsule.landings}</span>
            <span>reuse-count: {data.capsule.reuse_count}</span>
            <Link to="/rockets">Rockets Information</Link>
          </header>
        </div>
      </Card>
    </>
  );
}
export default App;
