'use client'

import { useState } from "react";
import { Button } from "@mui/material";


export default function Counter() {
    const [count, setCount] = useState(0)

    const handlePlus = () => {
        setCount(count + 1)
    }
    const handleMinus = () => {
        setCount(count - 1)
    }
    return (<div className="text-center">
        <h1 className="text-3xl font-bold">Counter : {count}</h1>
        <Button className="text-2xl font-bold" onClick={handlePlus}>+</Button>
        <Button className="text-2xl font-bold" onClick={handleMinus}>-</Button>
    </div>)
}