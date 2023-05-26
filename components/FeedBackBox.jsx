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
        <input type="text" className='m-2 p-1 w-[400px]'  value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
        <input type="email" className='m-2 p-1 w-[400px]'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        <input type="tel" className='m-2 p-1 w-[400px]' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Number'  />

        <textarea value={message} className='resize-none m-2 p-2 w-[400px]' onChange={(e) => setMessage(e.target.value)}  placeholder='message' rows='5' />
      <button className='m-2 p-2 bg-slate-400 w-[150px]' type="submit">Submit</button>
    </form>
  )
}

export default FeedBackBox