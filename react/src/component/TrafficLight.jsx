import { useEffect, useState } from "react"
import './traffic.css'

const TrafficLight = ()=>{

    const [currentLight, setCurrentLight] = useState('red')

    useEffect(()=>{
       
        const intervalId = setInterval(()=>{
            
            setCurrentLight((prevLight)=>{
                if(prevLight==='red') return 'yellow'
                if(prevLight ==='yellow') return 'green'
                return 'red'

            })


        },2000)

        return ()=> clearInterval(intervalId)
    },[])

    // useEffect(()=>{
    //     console.log("prev color",currentLight)
    // },[currentLight])







    return <>
    <h1>Traffic Light</h1>
    <div className="signal-light">
        <div className={`circle  ${currentLight === 'red'?'red':''}`}></div>
        <div className={`circle  ${currentLight === 'yellow'?'yellow':''}`}></div>
        <div className={`circle  ${currentLight === 'green'?'green':''}`}></div>


    </div>
    </>
}

export default TrafficLight