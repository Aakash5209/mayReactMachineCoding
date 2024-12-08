import { useState } from "react"

const ImageGallery = ()=>{

    const imageData = [
        'https://dummyjson.com/image/400x200/008080/ffffff?text=aman',
        'https://dummyjson.com/image/400x200/008080/ffffff?text=naman',
        'https://dummyjson.com/image/400x200/008080/ffffff?text=karan',
        'https://dummyjson.com/image/400x200/008080/ffffff?text=chaman',
    ]

    const [currentIndex,setCurrentIndex] = useState(0)

    const handleNext = ()=>{
        setCurrentIndex((currentIndex+1)%imageData.length)

        
    }
    const handleBack = ()=>{
        setCurrentIndex((currentIndex-1 + imageData.length)%imageData.length)

    }


    return (<>
    <h1> IMage Gallery</h1>
    <div className="galleryContainer">
        <img src={imageData[currentIndex]} alt="gallery" />
        <button onClick={handleBack}>Previous</button>
        <button onClick={handleNext}>Next</button>

    </div>

    
    </>)
}

export default ImageGallery