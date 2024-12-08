import { useState } from "react"
import './elevator.css'

const Elevator = () => {

    const [currentFloor, setCurrentFloor] = useState(1)
    const [targetFloor, setTargetFloor] = useState(null)
    const [isMoving, setIsMoving] = useState(false)

    const floors = [1, 2, 3, 4, 5]


    const moveToFloor = (floor) => {
        if(floor ===currentFloor) return
        setTargetFloor(floor)
        setIsMoving(true)

        const timeToMove = Math.abs(floor - currentFloor)*1000

        setTimeout(()=>{
            setIsMoving(false)
            setCurrentFloor(floor)
        },timeToMove)



    }


    return <>
        <div className="elevatorConatiner">
            <div className="elevatorShaft">

                <div className={`elevator ${isMoving ? 'moving' : ''}`}
                style = {{bottom: `${(currentFloor-1)*20}%`}} 
                >
                    { isMoving?'Moving...': `Floor ${currentFloor}`}

                </div>


            </div>


            <div className="controls">
                {
                    floors.map((floor) =>

                    (
                        <button
                            key = {floor}
                            disabled = {isMoving}
                            onClick={() => moveToFloor(floor)}
                        >
                            {`Go to Floor ${floor}`}

                        </button>
                    ))
                }
            </div>


        </div>
    </>
}


export default Elevator