import { useState } from "react"

const OTP = ()=>{
    const [otp,setOtp] = useState('')

    const handleOtp = ()=>{
        const newOtp = Math.floor(100 + Math.random()*900)
        setOtp(newOtp)
    }





    return <>
    <h1>your OTP is - {otp}</h1>
    <button onClick={handleOtp}>generate OTP</button>
    </>
}

export default OTP