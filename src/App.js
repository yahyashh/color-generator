import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [colors,setColors]=useState('')
  const [error,seterror]=useState(false)
  const [list,setList]=useState([])
  
  const handlesubmit=(e)=>{
  e.preventDefault()
  try{
    let color=new Values(colors).all(10)
    setList(color)
  } catch(error){
    seterror(true)
     console.log(error) 
    }
   }
  return (
  <>
  <section className="container">
  <h2>color generator</h2>
  <form onSubmit={handlesubmit}>
    <input type="text" value={colors} onChange={(e)=>setColors(e.target.value)} placeholder="#f15025" />
    <button className='btn' type='submit'>submit</button>
  </form>
  </section>
  <section className="colors">
    {list.map((color,index)=>{
      return <SingleColor key={index} {...color} index={index} />
    })}

  </section>
  </>
  )
}

export default App
