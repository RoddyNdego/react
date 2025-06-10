import "./counter-styles.css"
import { useState } from "react"

function Counter() {
   const[count, setCount] = useState(0)
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button style={{backgroundColor: 'gray' ,marginRight: '10px'}} className="btn_1" onClick={() => setCount(count + 1)}>Increment</button>
            <button style={{backgroundColor: 'gray' ,marginRight: '10px'}} className="btn_2" onClick={() => setCount(count - 1)}>Decrement</button>
            <button style={{backgroundColor: 'gray' ,marginRight: '10px'}} className="btn_3" onClick={() => setCount(0)}>Reset</button> 
        </div>
    )
}

export default Counter;