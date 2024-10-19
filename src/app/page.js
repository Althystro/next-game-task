"use client";
import { useState } from "react";

export default function Home() {
  const [bank, setBank] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [powerUps, setPowerUps] = useState([
    {
      name: "Freelancer",
      cost: 10,
      effect: () => setClickValue(2),
    },
    {
      name: "Small Business Owner",
      cost: 20,
      effect: () => setClickValue(10),
    },
    {
      name: "Expand Business:",
      cost: 50,
      effect: () => setClickValue(50),
    },
    {
      name: "Automated Systems",
      cost: 200,
      effect: () => setClickValue(400),
    },
    {
      name: "Conglomerate CEO",
      cost: 2000,
      effect: () => setClickValue(1000),
    },
    {
      name: "Expand world-wide",
      cost: 20000,
      effect: () => setClickValue(5000),
    },
    {
      name: "Form a new country",
      cost: 10000,
      effect: () => setClickValue(10000),
    },
    {
      name: "Colnize Other countries",
      cost: 20000,
      effect: () => setClickValue(20000),
    },
  ]);

  const addToCounter = () => {
    setBank((prevBank) => prevBank + clickValue);
  };

  const purchasePowerUp = (powerUp) => {
    if (bank >= powerUp.cost) {
      setBank((prevBank) => prevBank - powerUp.cost);
      powerUp.effect();
      setPowerUps((prevUpgrades) => prevUpgrades.filter((u) => u !== powerUp));
    }
  };

  return (
    <div className="bg-blue flex flex-col justify-around items-center w-screen h-screen">
      <h2 className="text-4xl mt-8">Power-ups Available</h2>
      {powerUps
        .filter((powerUp) => bank >= powerUp.cost)
        .map((powerUp) => (
          <div className="border-2 border-black p-2 text-center">
            <h4>{powerUp.name}</h4>
            <p>Cost: {powerUp.cost}</p>
            <button
              className="bg-green-600 text-white px-4 py-2"
              onClick={() => purchasePowerUp(powerUp)}
              disabled={bank < powerUp.cost}
            >
              Purchase
            </button>
          </div>
        ))}
      <h1 className="text-6xl">{`Bank account: ${bank} KD`}</h1>
      <button
        className="bg-red-700 text-5xl rounded p-4 "
        onClick={addToCounter}
      >
        Work
      </button>
    </div>
  );
}
