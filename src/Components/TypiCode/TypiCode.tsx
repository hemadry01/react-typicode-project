import { use, useState } from "react"
import type { Typecode } from "../../Type/Type"
import './TypiCode.css'
import Typi from "../Typi/Typi";
import './TypiCode.css'

export interface TypiCodeProps {
    TypiCodePromise: Promise<Typecode[]>
}

export default function TypiCode({TypiCodePromise }: TypiCodeProps) {

    const [detail,setDetail]=useState<Typecode | null>(null);
    // const handleDetail =(type:Typecode):void=>{

    //     //const newDetail =detail;
    //     setDetail(type);
    // }

    const handleDetail = (type: Typecode): void => {
        setDetail(type);
    };

    const typecode=use(TypiCodePromise);
    console.log(typecode);
    
    return (
        <div>
            <h2>Total User: {typecode.length}</h2>
            <div>
                    {/* <ul>
                        {
                           //detail.map(type=><li>{type.address.city}</li>)
                           <h3>{detail?.address.city}</h3>
                           
                        }
                    </ul> */}
                    {detail && (
                            <div>
                                <h2>{detail.address.city}</h2>
                                <p>{detail.address.street}</p>
                                <p>{detail.address.suite}</p>
                                <p>{detail.address.zipcode}</p>
                            </div>
                            )}
            </div>
            <div className="Typicode">
                {
                    typecode.map(type=><Typi 
                        key={type.id} 
                        Type={type}
                        handleDetail ={handleDetail }
                    ></Typi>)
                }
            </div>
        </div>
    )
}

{
    
}