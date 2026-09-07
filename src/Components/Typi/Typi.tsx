import type { Typecode } from "../../Type/Type"
import './Typi.css'

export interface TypiProps {
    Type: Typecode,
    handleDetail:(Type:Typecode)=>void,
}

export default function Typi({ Type,handleDetail }: TypiProps) {

   
    
    return (
        <div className="Typi">
            <h2>Name:{Type.name}</h2>
            <h3>UserName:{Type.username}</h3>
            <h4>Email:{Type.email}</h4>
            <button onClick={()=>handleDetail(Type)} >View Details</button>
        </div>
    )
}