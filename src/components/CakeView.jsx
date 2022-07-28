import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ordered, restocked} from '../store/features/cakeSlice'

const CakeView = () => {
    const numOfCakes = useSelector (state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Num of cakes - {numOfCakes}</h1>
            <button onClick={()=> dispatch(ordered())}>Order</button>
            <br />
            <br />
            <br />
            <button onClick={()=> dispatch(restocked(5))}>Restock</button>
        </div>
    )
}

export default CakeView