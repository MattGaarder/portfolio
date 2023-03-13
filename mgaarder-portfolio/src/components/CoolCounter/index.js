import { useState, useEffect } from "react"


function CoolCounter(){
    let [myCount, setMyCount] = useState(5)
    console.log("Whats up")
    useEffect(()=> {
     console.log("hello")   
    },[])

    const increaseCount = () => {
        setMyCount(myCount+1)
    }
    const decreaseCount = () => {
        setMyCount(myCount-1)
    }
    console.log(myCount)
    return (
        <div>
           <h1>{myCount}</h1>
           <button onClick={decreaseCount}>Decrease</button>
           <button onClick={increaseCount}>Increase</button>
        </div>
    )
}

export default CoolCounter