import React, { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
    alert("Text copied...!!!")
  }, [Password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      
    }
    
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed,charAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-7 py-5 my-11 text-orange-500 bg-gray-600">
      <h1 className="text-3xl text-center text-white">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-2 my-3">
        <input
          type="text"
          value={Password}
          className="outline-none w-full px-3 py-1"
          placeholder="Password"
          ref={passwordRef}
          readOnly
        />
        <button className="outline-none bg-red-800 text-white px-3 py-0.5 shrink-0 active:scale-110 hover:contrast-200" onClick={copyPasswordToClipboard}>
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-4">
        <div className="flex items-center gap-x-1 ">
          <input
            type="range"
            min={4}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1 ">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1 ">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
