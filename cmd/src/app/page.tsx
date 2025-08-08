import React from 'react';
import StatusLabel, { Status } from './components/active-label/status-label';
import {headers} from 'next/headers';



export default function Home() {
  console.log(headers())
  
  return (
   <main >
    <h1 className="text-xl, m:20">Home page {new Date().toTimeString()}</h1>
    <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
          <StatusLabel status={Status.Suspended}>Supended</StatusLabel>
   
   </main>

  );
}
