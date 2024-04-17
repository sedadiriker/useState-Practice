import React, { useState } from 'react'

const Checkbox = () => {
    const [check,setCheck] = useState(false)

    const handleData = (e) => {
        setCheck(e.target.checked) 
        // console.log(e.target.checked)
    }
  return (
    <div style={{backgroundColor:"bisque", padding:'2rem'}}>
      <input type="checkbox" onChange={handleData} />
      {
        check ? (
            <p>You like this</p>
        ) : (
            <p>You don't like this</p>
        )
      }
    </div>
  )
}

export default Checkbox
