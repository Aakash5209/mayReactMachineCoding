import { useState } from "react"

const CharacterCount = ()=>{
    const [text, setText] = useState('')

    // console.log('hey i m exe')

    const handeltext = (e)=>{
        console.log(e.target.value)

        setText(e.target.value)

    }

    return (<>
    <h1>hi i m CharacterCount</h1>

    <textarea value={text} placeholder="type something....." onChange={handeltext} /> 
    <h2> Character Count - {text.length}</h2>

    
    </>)

}

export default CharacterCount