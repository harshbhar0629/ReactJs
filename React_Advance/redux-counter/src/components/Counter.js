import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {

    // use selector can access your slice by callback fn
    const count = useSelector((state) => {
        return state.counter.value;
    });

    //use dispatch hook call your reducer function
    const dispatch = useDispatch();

  return (
		<div className="flex gap-x-4 w-full h-[90vh]  justify-center items-center">
			<button onClick={()=>dispatch(decrement())}>Decrement</button>

			<div>{count}</div>

			<button onClick={() => dispatch(increment())}>Increment</button>
		</div>
	);
}

export default Counter