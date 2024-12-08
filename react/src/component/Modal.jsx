import { useState } from "react"
import './modal.css'

const Modal = ()=>{

    const [isOpen,setIsOpen] = useState(false)

   const openModal = ()=>{
    setIsOpen(true)
    
   }
   const handleClose = ()=>{
    setIsOpen(false)


   }


    return <>
    <div className="modalContainer">
        <button className='btnOpen' onClick={openModal}>Open</button>
        {
            isOpen && (
                <div className="modalOverlay" onClick={handleClose}>
                    <div className="modal" onClick={(e)=>e.stopPropagation()}>
                        <h2>Modal Title</h2>
                        <p>this is simple modal</p>

                        <button onClick={handleClose}>close</button>

                    </div>
                </div>
            )

        }
    </div>
    </>
}

export default Modal