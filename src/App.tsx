
import { Suspense } from 'react';
import './App.css'
import type { Typecode } from './Type/Type'
import TypiCode from './Components/TypiCode/TypiCode';

function App() {

  const TypiCodePromise =async():Promise<Typecode[]>=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data:Typecode[] = await res.json();
    return data;

  }

  return (
    <>
      <h1>React Typi Code Project </h1>
      <Suspense fallback={<div>Loading....</div>}>

        <TypiCode TypiCodePromise={TypiCodePromise()}></TypiCode>

      </Suspense>
    </>
  )
}

export default App
