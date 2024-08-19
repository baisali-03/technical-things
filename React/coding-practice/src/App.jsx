import { useState } from 'react';
import UseRef from './UseRef';
import "./App.css"
import UsePreviousHook from './customHooks/usePrevious';
import Stopwatch from './Stopwatch';
import TrafficLight from './TrafficLight';

export default function App() {
  return (
    <div>
      {/* <UseRef/> */}
      {/* <UsePreviousHook/> */}
      {/* <Stopwatch/> */}
      <TrafficLight/>
    </div>
  );
}

