// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import { React, useState } from 'react';

import Button from 'react-bootstrap/Button';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  // const user = { displayName: 'Cody' }; // TODO: COMMENT OUT FOR AUTH
  const [value, setValue] = useState(0);

  const handleClick = (button) => {
    switch (button) {
      case 'Increment':
        setValue((prevState) => prevState + 1);
        break;
      case 'Decrement':
        setValue((prevState) => prevState - 1);
        break;
      case 'Reset':
        setValue(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{ value }</h2>
      <Button onClick={() => handleClick('Increment')}>Increment</Button>
      <Button onClick={() => handleClick('Decrement')}>Decrement</Button>
      <Button onClick={() => handleClick('Reset')}>Reset</Button>
    </>
  );
}

// <div
//   className="text-center d-flex flex-column justify-content-center align-content-center"
//   style={{
//     height: '90vh',
//     padding: '30px',
//     maxWidth: '400px',
//     margin: '0 auto',
//   }}
// >
//   <h1>Hello {user.displayName}! </h1>
// </div>

export default Home;
