import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [heading, setHeading] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=> {
    e.preventDefault()
    let arr = [...task];
    arr.push({heading,details})
    setTask(arr)
    setHeading('')
    setDetails('')
  }

  const deleteNote = (i)=> {

    const copyTask = [...task]
    copyTask.splice(i,1)
    setTask(copyTask)
  }

  return (
    <div className='min-h-screen lg:flex bg-black text-white'>
      <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex items-start lg:w-1/2 flex-col gap-5 p-10'>
          <h1 className='text-4xl font-bold'>Add Note</h1>
          
          {/* Heading */}
          <input 
            type="text" 
            placeholder='Enter Note Heading'
            className='px-5 py-2 w-full font-medium border-2 rounded outline-none'
            value = {heading}
            onChange={(e)=>{
              setHeading(e.target.value)
            }} 
        />

        {/* Details */}
        <textarea 
            type="text" 
            placeholder='Write details'
            className='px-5 h-52 w-full font-medium py-2 border-2 rounded outline-none' 
            value = {details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
        />

        <button className='active:scale-95 bg-white text-black w-full font-medium px-5 py-2 rounded outline-none'>Add Note</button>
      </form>
      <div className='items-center lg:border-l-2 lg:w-1/2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div  className='flex gap-5 w-full flex-wrap items-start justified-start mt-5 h-[90%] overflow-auto'>
            
            {task.map((elem,i)=>{
              return <div key={i} className="relative px-10 py-10 bg-cover h-75 w-60 rounded-2xl text-black bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
                <h2 onClick={()=>{deleteNote(i)}} className='cursor-pointer active:scale-85 p-1 absolute right-5 top-10 bg-red-500 text-xs rounded-full'><X size={16} strokeWidth={2.75} /></h2>
                <h3 className='bg-cover font-bold text-2xl leading-tight'>{elem.heading}</h3>
                <p className='text-gray-500 font-semibold'>{elem.details}</p>
              </div>
            })}
        </div>
        
      </div>
    </div>
  )
}

export default App
