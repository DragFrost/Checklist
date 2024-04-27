// import { useState } from 'react'
import ListSection from './components/ListSection'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <Navbar />
        <div className="w-[95.5%]">
          <ListSection />
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
        </div>
      </div>
    </>
  )
}

export default App
