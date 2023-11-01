import React, { useState } from "react";

const FirstFactoriel = () => {
  const [number, setNumber] = useState();

  const calculateFac = () => {
    if (number === 0) return 1;
    let num = 1;
    for (let i = 1; i <= number; i++) {
      num = num * i;
    }
    setNumber(num);
    return num;
  };

  return (
    <div>
      <input
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        placeholder="Faktoriyel için sayı giriniz"
      />
      <button onClick={calculateFac}>Hesapla</button>
      <h4>Sonuç : {number} </h4>
    </div>
  );
};

export default FirstFactoriel;
