import React from 'react';
import classes from './Counter.module.css';

const Counter = () => {

    // function incrementHandler = () => {}

    // function decrementHandler = () => {}


  return (
    <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>
            --- Counter ---
        </div>
        <div>
            {/* <button onClick={incrementHandler}>Increment</button> */}
            {/* <button onClick={decrementHandler}>Decrement</button> */}
        </div>
      
    </main>
  )
}

export default Counter
