import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [myData, setMydata] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={myData}
        onChange={(e) => setMydata(e.target.value)}
      />
      <p>The Number of times render : {count.current}</p>
    </>
  );
};
export default UseRef;
