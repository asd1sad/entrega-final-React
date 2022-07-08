import { useState } from "react"
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'

export const useSize = () => {
     const { item } = ItemDetailContainer

    const [ size, setSize ] = useState('S')
    
    const s = () => setSize('S')
    const m = () => setSize('M')
    const l = () => setSize('L')
        
    const foundSize = () => {
        setSize( item.stock.find( e =>  e === s || e === m || e === l) ) 
    }

    if (size === 'S') {

    } else if (size === 'M') {
        
    } else {

    }

    return {
        foundSize
    }
}