import React, { useEffect, useState } from "react";

function TrafficLight() {
  const [activeLight, setActiveLight] = useState("grey");

  useEffect(() => {
    const lightSequence = [
      { color: "red", duration: 5000 },
      { color: "yellow", duration: 2000 },
      { color: "green", duration: 3000 },
    ];

    let currentIndex = 0;

    const changeLight = () => {
      setActiveLight(lightSequence[currentIndex].color);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % lightSequence.length;
        changeLight();
      }, lightSequence[currentIndex].duration);
    };

    changeLight();
    
    return () => setActiveLight("grey");
  }, []);

  return (
    <>
      <div className="traffic-light">
        <div className={activeLight === "red" ? "red" : "grey"}></div>
        <div className={activeLight === "yellow" ? "yellow" : "grey"}></div>
        <div className={activeLight === "green" ? "green" : "grey"}></div>
      </div>
    </>
  );
}

export default TrafficLight;
