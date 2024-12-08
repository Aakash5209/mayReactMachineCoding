import { useEffect, useState } from "react"


const Counter = ()=>{

    const [count, setCount] = useState(()=>{
        console.log('usestate i/s running')
        const savecount = parseInt(localStorage.getItem('count'))
        return savecount?savecount : 0
    }) 

  


    useEffect(()=>{
        console.log('hiii i m runnig count')
        localStorage.setItem('count',count)

    },[count])



   

   
    const handelIncre=()=>{

        setCount(count+1)
        
      
        //get
      
    }
   


    const handeldcre = ()=>{
        
        setCount(count-1)
    }

    return <>
    <h1>hey i m a counter</h1>
    <h2>here is ur count state var= {count}</h2>
    <button onClick={handelIncre}>Increment</button>
    <button onClick={handeldcre}>Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>

    </>
}

export default Counter