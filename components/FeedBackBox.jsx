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
    <form className='grid gap-1 w-full ' onSubmit={ handleSubmit}>
      <label className='flex basis-1'>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} className='resize-none' onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default FeedBackBox