import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div style={{padding:"2rem", backgroundColor:"gray"}}>
      <button onClick={()=> setCount(count + 1)}>{count} times</button>
    </div>
  )
}

export default Counter
