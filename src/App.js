

import React, {useState} from 'react';
import Counter from './index';


const App = () => {
    const [count, setCount] = useState(0);
    const increament = () => setCount(count + 1);
    const decreament = () => setCount(count - 1);


    return (
        <center>
         <div class='main'>
            <h1>Counter App</h1>
            <h2>Count: {count}</h2>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decreament</button>
        </div>
        </center>
    )
}

export default App;

