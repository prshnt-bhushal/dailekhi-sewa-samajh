import React from 'react'
import { useState } from 'react'

const FeedBackBox = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log({name,email,phone,message});
    }
  return (
    <form className='flex flex-col items-center' onSubmit={ handleSubmit}>
      <h2 className="uppercase p-1 text-3xl mb-2">Feedback</h2>
        <input type="text" className='m-2 p-2 rounded-lg w-full cursor-pointer bg-slate-100 hover:bg-white'  value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
        <input type="email" className='m-2 p-2 rounded-lg w-full cursor-pointer bg-slate-100 hover:bg-white'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        <input type="tel" className='m-2 p-2 rounded-lg w-full cursor-pointer bg-slate-100 hover:bg-white' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Number'  />

        <textarea value={message} className='resize-none m-2 p-2 rounded-lg w-full cursor-pointer bg-slate-100 hover:bg-white' onChange={(e) => setMessage(e.target.value)}  placeholder='Message' rows='5' />
      <button className='m-2 p-2 uppercase rounded-md font-semibold text-white bg-slate-400 w-32' type="submit">Submit</button>
    </form>
  )
}

export default FeedBackBox