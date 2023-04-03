import React, { useEffect, useState } from 'react'

export default function Message() {
    const [Message,setMessage]=useState("Hello dear one, learning React...?");

    useEffect(()=>{
        console.log('use effect hook called');
        setTimeout(()=>{
            setMessage("Great...This is time to learn about HOOKS");
        },2000);
        return 
    })
return(
   <h3>{Message}</h3>
)
}
