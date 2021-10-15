import "./App.css";
import { gql, useQuery } from "@apollo/client";
import StepZenLogo from "./light-blue.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rockets from "./rocket-information";
import Card from "./Card";
import CardList from "./CardList";


const GET_QUERY = gql`
  query launchesQuery {
    launchesPast(limit: 5) {
      id
      mission_name
      launch_site {
        site_name
      }
      rocket {
        rocket_name        
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
  console.log(data)

  if (loading) return <p>Loading ...</p>;

  if (error) return <pre>ERROR: {JSON.stringify(error, null, 2)}</pre>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={StepZenLogo} alt="StepZen Logo" width="300px" />
        <h2 style={{ marginTop: "40px" }}>Latest launches information pulled from StepZen Endpoint:</h2>
        <CardList>
          {data.launchesPast.map(launch => (
            <Card key={launch.id}>
              <b className="Title">{launch.mission_name}</b>
              <br />
              <p className="Description">
                Launched from {launch.launch_site.site_name}. <br />
                Used rocket {launch.rocket.rocket_name}
              </p>
            </Card>
          ))}
        </CardList>

        <Link to="/rockets" role="button" className="RocketsInformation">
          See rockets information...
        </Link>
      </header>
    </div>
  );
}
export default App;
