import './index.css';
import { gql, useQuery } from '@apollo/client';
import StepZenLogo from '../light-blue.svg';
const GET_QUERY = gql`
  query MyQuery   {
    rockets(limit: 5) {
        id
        name
        mass {
          kg
          lb
        }
        company
        cost_per_launch
        country
        description
      }
  }
`;

function Rockets() {
    const { loading, error, data } = useQuery(GET_QUERY);
    console.log('DATA', data);

    if (loading) return <p>Loading ...</p>;

    if (error) return (
        <pre>{JSON.stringify(error, null, 2)}</pre>
    );
    const rockets = data.rockets;
    const listitems = rockets.map((rocket) => <>
        <li>Id: {rocket.id}, Name: {rocket.name}, Country: {rocket.country}, Cost: {rocket.cost_per_launch}</li></>);
    return (
        <div className="App">
            <header className="App-header">
                <img src={StepZenLogo} alt="StepZen Logo" width="200px" />
                <p style={{ marginTop: "40px" }}>Top 10 Rockets information:</p>
                <ul>
                    {listitems}
                </ul>
            </header>
        </div>
    );
}

export default Rockets;
