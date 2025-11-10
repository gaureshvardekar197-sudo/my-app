import React,{useState} from 'react';

function Counter() {
    const[count, setCount] = useState(0); //UseState intializes the state
    const increment = () => setCount(count + 1); //Function to update state 
    // const increment = () => setCount(...count, count + 1); //Function to update state 
    const decrement = () => setCount(count - 1);
    const user = {
        id:1,
        name:'gauresh',
        age:20,
        address: {
            roomno:1,
            cityname:'gauresh',
            pincode:416602,
            state:"nallsopara",

    },

    }
    const {name,address:{pincode},address:{cityname},age}=user;
    return ( 
        <div>
            <h1>count:{count}</h1>
            <h1>name:{name}</h1>
            <h1>address:{pincode}&nbsp; {cityname}</h1>
            <h1>age:{age}</h1>
            <button onClick={increment} id="Inc">Increment</button>
            <button onClick={decrement} id="Dec">Decrement</button>
        </div>
     );
}

export default Counter;


