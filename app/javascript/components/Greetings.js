import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../Redux/greetingSlice';


function Greetings() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch])

  return (
    <div className='greeting__container'>
      {
        greeting.map((greet) => (
          <div key={greet.id} >
            <h2>{greet.message}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Greetings;