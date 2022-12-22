import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
    const dispatch = useDispatch();
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!name || !number) return false ;

      dispatch(addContact({id:nanoid(),name,phone_number:number}));
      setName("");
      setNumber("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input 
            value={name} 
            onChange={(e) => setName(e.target.value) }
            placeholder="name" />
            <input
            value={number}
            placeholder="phone number" 
            onChange={(e) => setNumber(e.target.value)} />
            <div className="btn">
              <button type='submit' >Add</button>
            </div>
        </form>
    </div>
  )
}

export default Form