import { useState } from 'react'

export const useHover = () => {

    const [isHovering, setIsHovering] = useState(false)
    
    const hover = ()=> setIsHovering(true)
    const noHover = ()=> setIsHovering(false)

    
    return {
        isHovering,
        noHover,
        hover 
    }
}


