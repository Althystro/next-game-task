"use client";
import { Button } from "bootstrap";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [bank, setBank] = useState(0);
  const [isButtonVisibility, setIsButtonVisibility] = useState(false);

  const viewVisability = () => {
    setIsButtonVisibility(true);
  };
  const removeVisability = () => {
    setIsButtonVisibility(false);
  };

  const toggleVisibilty = () => {
    setIsButtonVisibility(!isButtonVisibility);
  };
  // const bankAccount = (addToBank) => {
  //   if (addToBank > 10) {
  //     viewVisability();
  //     return addToBank + 10;
  //   }
  //   return addToBank;
  // };

  const powerUp = (power, modifer) => {
    return power + 2 * modifer;
  };

  const firstPowerup = (powerup) => {
    return powerup + 2; // 2 * 1
  };
  const secondPowerup = (powerup) => {
    return powerup + 10; // 2 * 5
  };
  const thirdPowerup = (powerup) => {
    return powerup + 50; // 2 * 25
  };
  const fourthPowerup = (powerup) => {
    return powerup + 100; // 2 * 50
  };
  const fifthPowerup = (powerup) => {
    return powerup + 200; // 2 * 100
  };
  const sixthPowerup = (powerup) => {
    return powerup + 500; // 2 * 250
  };
  // const seventhPowerup = (powerup) => {
  //   return powerup + 1000;
  // };

  const addToCounter = () => {
    powerUpbutton(bank);
  };

  const powerUpbutton = (bank) => {
    if (bank <= 10) {
      setBank(bank + 1);
    } else if (bank >= 10 && bank < 20) {
      if (isButtonVisibility == true) {
        setBank(firstPowerup(bank));
        removeVisability();
      }
    } else if (bank >= 20 && bank < 100) {
      setBank(secondPowerup(bank)); // setBank(powerUp(bank, 5))
    } else if (bank >= 100 && bank < 1000) {
      setBank(thirdPowerup(bank)); // setBank(powerUp(bank, 25))
    } else if (bank >= 1000 && bank < 2000) {
      setBank(fourthPowerup(bank)); // setBank(powerUp(bank, 50))
    } else if (bank >= 2000 && bank < 5000) {
      setBank(fifthPowerup(bank)); // setBank(powerUp(bank, 100))
    } else if (bank >= 5000) {
      setBank(sixthPowerup(bank));
    }

    // if(bank >= 5000){

    // } else if(bank >= 2000) {

    // } else if (bank >= 1000) {

    // }
  };

  return (
    <div className="bg-blue flex flex-col justify-around items-center w-screen h-screen ">
      {/* <h1 className="text-6xl	">count:{counter} </h1> */}
      <h1 className="text-6xl	">count:{bank} </h1>
      {isButtonVisibility ? (
        <button className="bg-red-700 text-6xl">hello</button>
      ) : null}
      <button className="bg-red-700 text-6xl" onClick={addToCounter}>
        Add +1
      </button>
    </div>
  );
}
