import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        localStorage.setItem('userName', user);
        localStorage.setItem('password', pass);
        navigate('/');
        
    }
    function handleChange(e){
        let id=e.target.id;
        if(id === 'user'){
            setUser(e.target.value);
        }else{
            setPass(e.target.value);
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='user' id='user' placeholder='naam likho apna'  onChange={handleChange}/>
        <br />
        <input type="password" name='pass' id='pass' placeholder='password daaldo chupke se apna'onChange={handleChange}/>
        <button>login</button>
      </form>
    </div>
  )
}
