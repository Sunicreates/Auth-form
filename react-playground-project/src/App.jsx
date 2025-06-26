import React, { useState } from 'react';

export default function KK() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);
  const [textt,setText]=useState('');

  function handleSubmit(e) {
    e.preventDefault()
    const enteredPassword = textt;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  return (
    
    <div>
    <div>
    <form onSubmit={handleSubmit}> 
    
    <input
    type='text'
    value={textt}
    onChange={(e) => setText(e.target.value)}
    />
    <button type="submit" >Submit </button>
    </form>
    </div>
          {authorized && <p>Access Granted </p>}
      {!authorized && textt && <p>Access Denied </p>}

      {authorized && (  
      <div id="authorization">
        <h1>Contact</h1>
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      </div>
      )
      }
      </div>
  );
}

