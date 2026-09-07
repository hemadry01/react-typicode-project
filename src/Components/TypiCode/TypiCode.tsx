import { use } from "react"
import type { Typecode } from "../../Type/Type"

export interface TypiCodeProps {
    TypiCodePromise: Promise<Typecode[]>
}

export default function TypiCode({TypiCodePromise }: TypiCodeProps) {

    const typecode=use(TypiCodePromise);
    console.log(typecode);
    
    return 
}