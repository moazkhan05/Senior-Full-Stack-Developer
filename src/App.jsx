import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import moment from 'moment'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(moment.format('h:mm:ss'))

  return (
    <>

{/* 
  1. create a hollow circle
  2. reduce .5 px from the circle radius and  create a 
  
  3.  center point + radius * angle of deviation ; 6 degree for seconds and minutes & 30 degree for hours
  4.  3 hand clock with different width sizes, denoting them with secs, mins, hours
  5. handling current and previous states for each clock handle
  6. updating time every second, and comparing the values ; if sec is eqaul to 0, min will also updated, and when minutes values changes to 0 hours will be updated
  7. when min and sec will be 59 , next value will again start from 0 , similarly when hours hit 12 , 1
   
*/}

    {/* every sec , run setTimeout , this will update my second clock hand 60*/}
    {/* I need to check the last min I have , once it updated, I have to change minute clock hand 60 */}
    {/* I need to check the last hour  I have , once it updated, I have to change hour clock hand 12 */} 
    </>
  )
}

export default App
