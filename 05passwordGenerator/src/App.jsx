import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css';

function App() {
  const [length, setLength] = useState(6);
  const [isNum, setIsNum] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [password, setPassword] = useState('');

  //useRef Hook
  const passwordRef = useRef(null);

  //this will also run
  // const passwordGenerator = () => {
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  //   if (isNum) str += "0123456789";
  //   if (isSymbol) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //   for (let i = 1; i <= length; i++) {
  //     let char = str[Math.floor(Math.random() * str.length)];
  //     pass += char;
  //   }

  //   setPassword(pass);
  // }
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNum) str += "0123456789";
    if (isSymbol) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    for (let i = 1; i <= length; i++) {
      let char = str[Math.floor(Math.random() * str.length)];
      pass += char;
    }

    setPassword(pass);
  }, [length, isNum, isSymbol, setPassword]);

  // passwordGenerator(); // why this causes error Too many re-renders. React limits the number of renders to prevent an infinite loop.

  const copyPasswodToClipboard =useCallback( () => {
    passwordRef.current.select();
    // passwordRef.current.setSelectionRange(0, 9999); // For mobile devices
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNum, isSymbol]);
  
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">

        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 text-green-500 bg-gray-700">
          <h1 className='text-4xl text-center text-gray-100 my-2'>Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3 text-yellow-400 bg-gray-800'
              placeholder='password'
              ref={passwordRef}
              readOnly
            />
            <button
              className='bg-green-500 text-white px-4 py-2'
              onClick={copyPasswodToClipboard}
            >
              Copy
            </button>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <label htmlFor="length" className='text-gray-100'>Length: {length}</label>
              <input
                type='range'
                min={6}
                max={100}
                value={length}
                className='w-full cursor-pointer'
                onChange={(e) => e.target.value && setLength(e.target.value)}
              />
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='isNum'
                defaultChecked={isNum}
                onChange={(e) => setIsNum(e.target.checked)}
              />
              <label htmlFor="isNum" className='text-gray-100'>Include Numbers</label>
            </div>

            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='isSymbol'
                defaultChecked={isSymbol}
                onChange={(e) => setIsSymbol(e.target.checked)}
              />
              <label htmlFor="isSymbol" className='text-gray-100'>Include Symbols</label>
            </div>
            <button
              className='bg-green-500 text-white px-4 py-2 rounded-lg'
              onClick={passwordGenerator}
            >
              Renerate Password
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
