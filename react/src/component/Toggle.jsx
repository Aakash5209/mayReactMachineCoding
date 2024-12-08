import { useState } from "react"



const Toggle = ()=>{

    const [visible,setVisible] = useState(true)

    return (<>
    <h1>ITs Toggle component</h1>
    <div>
        <button onClick={()=>setVisible(!visible)}>
            {visible? 'Hide': 'show'} Text
        </button>

       {visible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, magnam!</p>}
    </div>
    </>)
}

export default Toggle