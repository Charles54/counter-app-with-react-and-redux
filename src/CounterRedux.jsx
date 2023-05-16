import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, reset} from './Redux/counterSlice'
import '../src/counterRedux.css'

const CounterRedux = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>

<div className='mt-3 counter'>
        <h1>Counter with Redux</h1>
    <div>
        <h1 className='m-3'>Count : {count} </h1>
    
        <button className='btn btn-success m-3' onClick={() => dispatch(increment())} >Increase</button>
        <button className='btn btn-secondary m-3' onClick={() => dispatch(reset())} >Reset</button>
        <button className='btn btn-danger m-3' onClick={() => dispatch(decrement())} >Decrease</button>
    </div>

    </div>


    </div>
  )
}

export default CounterRedux