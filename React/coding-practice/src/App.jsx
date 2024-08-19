import { useState } from 'react';
import UseRef from './UseRef';
import UsePreviousHook from './customHooks/usePrevious';

export default function App() {
  return (
    <div>
      {/* <UseRef/> */}
      <UsePreviousHook/>
    </div>
  );
}

