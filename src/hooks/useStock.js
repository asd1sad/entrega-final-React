// import { useEffect, useState } from "react"
// import { getDoc , doc } from "firebase/firestore";
// import { db } from '../firebase/config'
// import { useParams } from "react-router-dom";


// export const useStock = () => {

    // const [ stock, setStock ] = useState()
    // const { itemId } = useParams()

    
    // const docRef = doc(db , 'productos', itemId)

 
    //     if (size === 'L') {
    //         getDoc(docRef)
    //         .then((doc) => {
    //             const newItem = { id:doc.id, ...doc.data()}
    //             setStock(newItem.stock.l)
    //         })
            
    //     } else if (size === 'M') {
    //         getDoc(docRef)
    //         .then((doc) => {
    //             const newItem = { id:doc.id, ...doc.data()}
    //             setStock(newItem.stock.m)
    //         })
            
    //     } else if (size === 'S') {
    //         getDoc(docRef)
    //         .then((doc) => {
    //             const newItem = { id:doc.id, ...doc.data()}
    //             setStock(newItem.stock.s)   
    //         })
    //     }
 
        
//     return {stock}
// }