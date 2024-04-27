import { useState } from 'react'
import Cards from './components/Cards'
import ListSection from './components/ListSection'
import NavButton from './components/NavButton'
import Navbar from './components/Navbar'

function App() {
  const [isOpen, setIsOpen] = useState("hidden")
  function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 41) + 30;
    const lightness = Math.floor(Math.random() * 31) + 60;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    return color;
  }

  return (
    <>
      <div className='flex'>
        <Navbar />
        <div className="w-[95.5%] relative">

          <div className="h-[85%] p-2 flex">
            <Cards setIsOpen={setIsOpen} taskName={"Task1"} description={"Task1 description"} bgColor={getRandomPastelColor()} discColor={getRandomPastelColor()}/>
            <Cards setIsOpen={setIsOpen} taskName={"Task2"} description={"Task2 description"} bgColor={getRandomPastelColor()} discColor={getRandomPastelColor()}/>
          </div>
          <div className='flex justify-between p-8'>
            <h1>
              
            </h1>
            <NavButton bgColor={"#FF00FF"}/>
          </div>

          <ListSection isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  )
}

export default App
