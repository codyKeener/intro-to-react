// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import Counter from '../components/Counter';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const user = { displayName: 'Cody' }; // TODO: COMMENT OUT FOR AUTH

  const counters = [{ title: 'Cody\'s Counter' }, { title: 'Skeo\'s Counter' }, { title: 'Julien\'s Counter' }];

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '20vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Hello {user.displayName}! </h1>
      </div>
      {counters.map((counter) => (
        <Counter key={counter.title} title={counter.title} />
      ))}
      <Counter />
    </>
  );
}

export default Home;
