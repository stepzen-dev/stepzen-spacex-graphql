
import './App.css';
import { gql, useQuery } from '@apollo/client';

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
        <p>
          id :{data.capsule.id}
          </p><p>
          landings: {data.capsule.landings}
          {data.capsule.original_launch}
          {data.capsule.reuse_count}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
