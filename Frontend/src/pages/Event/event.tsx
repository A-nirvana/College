import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

interface eve{
    name ?: string,
    description ?: string,
    prize ?: number
}
export default function Event(){
    const [event,setEvent] = useState<eve>({})
    const eventId = useParams();
    useEffect(()=>{
        axios.get("http://localhost:3000/user/"+eventId).then(
                res =>{
                    setEvent(res.data)
                }
            )
    },[])
    return(
        <div>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            {event.prize}
        </div>
    )
}