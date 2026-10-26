import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState("olive")

  const changeColor = (colors) => {
    setColor(colors)

  }

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}


      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white'>

            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "red" }} onClick={() => changeColor("red")}>Red</button>


            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "green" }} onClick={() => changeColor("green")}>Green</button>


            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "blue" }} onClick={() => changeColor("blue")}>Blue</button>


            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "violet" }} onClick={() => changeColor("violet")}
            >violet</button>


            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "Orange" }} onClick={() => changeColor("orange")}>orange</button>



          </div>
        </div>

      </div>

    </>
  )
}

export default App
