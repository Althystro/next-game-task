"use client";
import { useState } from "react";
import { Inter, Roboto, Open_Sans } from "next/font/google";
import AnimatedNumbers from "react-animated-numbers";

export default function Home() {
  const [bank, setBank] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [status, setStatus] = useState("");
  const [powerUps, setPowerUps] = useState([
    {
      name: "Freelancer",
      cost: 10,
      effect: () => setClickValue(2),
      status: "You are now a Freelancer!",
    },
    {
      name: "Small Business Owner",
      cost: 20,
      effect: () => setClickValue(10),
      status: "You now own a small business!",
    },
    {
      name: "Expand Business",
      cost: 50,
      effect: () => setClickValue(50),
      status: "Your business is expanding!",
    },
    {
      name: "Automated Systems",
      cost: 200,
      effect: () => setClickValue(400),
      status: "Your business is now automated!",
    },
    {
      name: "Conglomerate CEO",
      cost: 2000,
      effect: () => setClickValue(1000),
      status: "You are now the CEO of a conglomerate!",
    },
    {
      name: "Expand worldwide",
      cost: 20000,
      effect: () => setClickValue(5000),
      status: "Your business is now worldwide!",
    },
    {
      name: "Form a new country",
      cost: 100000,
      effect: () => setClickValue(10000),
      status: "You formed a new country!",
    },
    {
      name: "Colonize other countries",
      cost: 200000,
      effect: () => setClickValue(20000),
      status: "You are colonizing other countries!",
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
      setStatus(powerUp.status); // Set the status when a power-up is purchased
    }
  };

  return (
    <div className="bg-blue flex flex-col justify-around items-center w-screen h-screen">
      <h2 className="text-4xl mt-8">Power-ups Available</h2>
      {powerUps
        .filter((powerUp) => bank >= powerUp.cost)
        .map((powerUp) => (
          <div className="border-2 border-black p-1 text-center text-3xl">
            <h4>{powerUp.name}</h4>
            <p className=" p-2">Cost: {powerUp.cost}</p>
            <button
              className="bg-green-600 text-white px-4 py-2  rounded"
              onClick={() => purchasePowerUp(powerUp)}
              disabled={bank < powerUp.cost}
            >
              Purchase
            </button>
          </div>
        ))}
      <h1 className="text-6xl justify-center items-center flex flex-col m-10 ">
        Bank account:
        {<AnimatedNumbers animateToNumber={bank} />}
        KD
      </h1>
      <button
        className="bg-red-700 text-5xl rounded p-4 "
        onClick={addToCounter}
      >
        Work
      </button>
      <h2>Status:</h2>
      <p>{status ? status : "No status yet"}</p>
    </div>
  );
}
