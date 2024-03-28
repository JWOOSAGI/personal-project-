import { Button } from "@mui/material"
import React from "react"

interface Props{
    count : number,
    handlePlus : ()=> 0,
    handleMinus : ()=> 0
}

const CounterComponent = React.memo(({count, handlePlus, handleMinus} : Props)=>{
    return(<>
    <h1 className="text-3xl font-bold">Counter : {count}</h1>
        <Button className="text-2xl font-bold" onClick={handlePlus}>+</Button>
        <Button className="text-2xl font-bold" onClick={handleMinus}>-</Button>
        </>)
})

export default CounterComponent