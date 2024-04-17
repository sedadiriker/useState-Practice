import { useState } from "react"

const String = () => {
    const [text,setText] = useState('hello')

    const handleData = (e) => {
        setText(e.target.value)
    }
  return (
    <div style={{padding:"2rem", backgroundColor:"gray"}}>
      <input type="text" value={text} onChange={handleData}/>
      <button onClick={() => setText('hello')}>Reset</button>
      <p>You typed : {text}</p>
    </div>
  )
}

export default String
