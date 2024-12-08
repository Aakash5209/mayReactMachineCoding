import { useEffect, useState } from "react"





const Stopwatch = () => {

    const [counter, setCounter] = useState(0)
    const [isrunning, setIsRunning] = useState(false)


    useEffect(() => {
        
        let timerId;
        if (isrunning) {
        timerId =  setInterval(() => {
                setCounter((prev) => prev + 10)
            }, 10)
        }
        else{
            clearInterval(timerId)


        }
       //clean up task
        return ()=>{
            clearInterval(timerId)

        }

    }, [isrunning])


    const formatTime =(time)=>{
        const ms = `0${Math.floor((time%1000)/10)}`.slice(-2)
        const sec = `0${Math.floor((time/1000)%60)}`.slice(-2)
        const min = `0${Math.floor((time/60000)%60)}`.slice(-2)

        return `${min} : ${sec} : ${ms}`
    }

    const handleStart = () => {
        setIsRunning(true)


    }
    const handleStop = () => {
        setIsRunning(false)

    }
    const handleReset = () => {

        setIsRunning(false)
        setCounter(0)

    }

    return (<>
        <h1>hi i m Stopwatch</h1>
        <h2>current time- {formatTime(counter)}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>

    </>)

}

export default Stopwatch