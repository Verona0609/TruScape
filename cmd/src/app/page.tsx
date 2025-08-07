import React from 'react';
import StatusLabel, { Status } from './components/active-label/status-label';



export default function Home() {
  return (
   <main >
    <h1 className="text-xl, m:20">Home page</h1>
    <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
          <StatusLabel status={Status.Suspended}>Supended</StatusLabel>
   
   </main>

  );
}
