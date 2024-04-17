import { useState } from "react"

const Form = () => {
    const [text,setText] = useState('Seda')
    const[age,setAge] = useState(30)

    const handleData = (e) => {
        setText(e.target.value)
    }
  return (
    <div style={{padding:"2rem", backgroundColor:"gray"}}>
      <input type="text" value={text} onChange={handleData} /><br /><br />
      <button onClick={() => setAge(age + 1)}>İncrement age</button>
      <p>Hello, {text}. You are {age}</p>
    </div>
  )
}

export default Form
