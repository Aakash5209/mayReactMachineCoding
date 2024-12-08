import { useEffect, useState } from "react"


const AutoOtpGenerate = ()=>{

    const [otp, setOTP] = useState('')
    const [timer,setTimer] = useState(20);

    const generateOTP = () =>{
        const newOTp = Math.floor(1000 + Math.random()*9000)
        setOTP(newOTp)
    }

    useEffect(()=>{
        generateOTP()

        const otpInterval = setInterval(()=>{
            generateOTP()
            setTimer(20)

        },20000)

       const timerInterval = setInterval(()=>{
            setTimer((prev)=>prev>0?prev-1:prev)


        },1000)

        return ()=>{
            console.log("clen up task")
            clearInterval(otpInterval)
            clearInterval(timerInterval)
        }

    },[])




    return <>
    <h1> Your OTP is - {otp}</h1>
    <h2>New OTP generate in {timer} sec</h2>
    </>
}

export default AutoOtpGenerate