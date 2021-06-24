import './App.css';
import { gql, useQuery } from '@apollo/client';
import StepZenLogo from './light-blue.svg';
const GET_QUERY = gql`
  query MyQuery   {
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

  const { loading, error, data } = useQuery(GET_QUERY);
  console.log('DATA',data)

  if (loading) return <p>Loading ...</p>;

  if (error) return (
    <pre>{JSON.stringify(error, null, 2)}</pre>
  );

  return (
    <div className="App">
      <header className="App-header">
      <img src={StepZenLogo} alt="StepZen Logo" width="200px"/>
      Capsule information pulled from StepZen Endpoint:
        <p>
          id :{data.capsule.id}
          </p><p>
          <ul>
          <li>landings- {data.capsule.landings}</li>
          <li>reuse-count- {data.capsule.reuse_count}</li>
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
