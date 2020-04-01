import React, {useState,useEffect} from 'react'
import Nav from "./Nav";

export default function SimpleCounter() {
    const initialState = 0 
    const [counter, setCounter] = useState(initialState);
    const incrementCounter = () => {
		setCounter( counter + 1 );
	};
    return (
        <>
			<Nav/>
			<div className="container">
				<h3 className="mt-5 mb-5">Simple Counter Demo using useState</h3>
				<button className="btn btn-secondary" onClick={incrementCounter}>Increment Counter</button>
				<span className="ml-3">{counter}</span>
			</div>
		</>
    );
};
