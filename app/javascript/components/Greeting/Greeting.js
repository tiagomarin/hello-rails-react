import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingMessage } from '../../redux/greetingsSlice';
// import './Greeting.css';

function Greeting() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.greeting.status);
  const message = useSelector((state) => state.greeting.message);

  useEffect(() => {
    if (!status !== "succeeded") {
      dispatch(getGreetingMessage());
    }
  }, []);

  return (
    <main className="background">
      <h1 className="my-heading">Hello React Rails!</h1>
      <h2> this is one of my greetings:</h2>
      <p className="greeting"> {message} </p>
    </main>
  );
}

export default Greeting;
