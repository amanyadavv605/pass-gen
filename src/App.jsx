import React, { useCallback, useState } from "react";
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    for(let i = 1; i <= length; i++){

      let char = Math.floor(Math.random() * length + 1)
        pass += str.charAt(char)
    }

    if (numAllowed) str += "1234567890"
    if (numAllowed) str += "!@#$%^&*()"

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword]);

  return(
  <>
  <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-7 py-5 my-11 text-orange-500 bg-gray-600">
    <h1 className="text-3xl text-center text-white">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-2 my-3">
      <input type="text" value={Password} className="outline-none w-full px-3 py-1" placeholder="Password" readOnly/>
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
    </div>
  </div>
  </>
  )
}

export default App;
