import React, { useState } from 'react';
import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {

     const count = useSelector((state) => state.counter.value);
     const dispatch = useDispatch();

     const [incrementValue, setIncrementValue] = useState('');

     const handleChange = (e) => {
          setIncrementValue(e.target.value);
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(incrementByAmount(Number(incrementValue)));
          setIncrementValue('');
     };

     return (
          <div className='counter-container'>
               <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
               <button aria-label="Increment value" onClick={() => dispatch(decrement())}>Decrement</button>
               <div className='incrementByValye'>
                    <form onSubmit={handleSubmit}>
                         <input name="increment_value" id="increment_value" onChange={handleChange} defaultValue={incrementValue} type="number" placeholder='Increment By Amount' />
                         <button type="submit">Submit</button>
                    </form>
               </div>
               <div>
                    <span>{count}</span>
               </div>
          </div>
     );
}

export default Counter;
