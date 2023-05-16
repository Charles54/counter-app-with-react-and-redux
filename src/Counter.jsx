import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }

    
  return (
    <div >
        <h1>Counter with React</h1>
    <div>
        <h1 className='m-3'>Count : {count} </h1>
    </div>
    <div className=' text-align-center'>
        <button className='btn btn-success m-3' onClick={increaseCount}>Increase</button>
        <button className='btn btn-secondary m-3' onClick={resetCount}>Reset</button>
        <button className='btn btn-danger m-3' onClick={decreaseCount}>Decrease</button>
    </div>

    </div>
  )
}

export default Counter