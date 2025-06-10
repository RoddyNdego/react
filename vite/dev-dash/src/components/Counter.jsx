import { useState } from 'react';

import './counter-styles.css'

function Counter() {
   const[count, setCount] = useState(0)
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button className="btn_1" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn_2" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="btn_3" onClick={() => setCount(0)}>Reset</button> 
        </div>
    )
}

export default Counter;