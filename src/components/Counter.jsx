import React from 'react';
import classes from './Counter.module.css';

import { counterActions } from '../store/index';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter)

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }


  return (
    <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>
            {counter}
        </div>
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
      
    </main>
  )
}

export default Counter
