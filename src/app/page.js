"use client";
import { useState } from "react";
import { Inter, Roboto, Open_Sans } from "next/font/google";
import AnimatedNumbers from "react-animated-numbers";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [bank, setBank] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [powerUps, setPowerUps] = useState([
    {
      name: "Freelancer",
      cost: 10,
      effect: () => setClickValue(2),
      status: "You are now a Freelancer!",
      image:
        "https://static.vecteezy.com/system/resources/previews/030/577/581/non_2x/freelance-with-ai-generated-free-png.png",
    },
    {
      name: "Small Business Owner",
      cost: 20,
      effect: () => setClickValue(10),
      status: "You now own a small business!",
      image:
        "https://png.pngtree.com/png-vector/20221024/ourmid/pngtree-small-business-owner-shaking-hands-with-money-lender-png-image_6346574.png",
    },
    {
      name: "Expand Business",
      cost: 50,
      effect: () => setClickValue(50),
      status: "Your business is expanding!",
      image: "https://cdn-icons-png.flaticon.com/512/4997/4997482.png",
    },
    {
      name: "Automated Systems",
      cost: 200,
      effect: () => setClickValue(400),
      status: "Your business is now automated!",
      image: "https://cdn-icons-png.flaticon.com/512/8759/8759255.png",
    },
    {
      name: "Conglomerate CEO",
      cost: 2000,
      effect: () => setClickValue(1000),
      status: "You are now the CEO of a conglomerate!",
      image: "https://cdn-icons-png.flaticon.com/512/6171/6171506.png",
    },
    {
      name: "Expand worldwide",
      cost: 20000,
      effect: () => setClickValue(5000),
      status: "Your business is now worldwide!",
      image: "https://cdn-icons-png.flaticon.com/512/179/179768.png",
    },
    {
      name: "Form a new country",
      cost: 100000,
      effect: () => setClickValue(10000),
      status: "You are now forming a new country!",
      image:
        "https://i.redd.it/i-made-a-made-up-country-v0-lwwg9ayfnxp81.png?width=1151&format=png&auto=webp&s=9fba7b06320fff52e13bb830a0fc7f1f2450bc48!",
    },
    {
      name: "Colonize other countries",
      cost: 200000,
      effect: () => setClickValue(20000),
      status: "You are colonizing other countries!",
      image:
        "https://files.oaiusercontent.com/file-aQ49ji43eJWsStEZweQuy08T?se=2024-10-20T07%3A08%3A56Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc0c6bb21-8a6e-4f53-886e-022e170c89be.webp&sig=K%2Bainssxrm7YJ/wg0jYI/GXiVemuwrUvjzA3mHRbT%2BY%3D",
    },
    {
      name: "Take over the world!",
      cost: 400000,
      effect: () => setClickValue(40000),
      status: "You have now taken over the world!",
      image:
        "https://files.oaiusercontent.com/file-6e1b9PLTuq3d9rq80CqCzGaC?se=2024-10-20T07%3A10%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df5573d7d-a57a-4ed3-9212-54d2ccebbe96.webp&sig=XaxbJM7cD1sbk5aOysbRDMaDz72Z5cZ4XhfHh8DMi14%3D",
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
      setStatus(powerUp.status);
      setImage(powerUp.image);
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
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "green" }} // Animation on hover
              transition={{ duration: 0.3 }}
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              className="bg-green-800 text-white px-4 py-2  rounded"
              onClick={() => purchasePowerUp(powerUp)}
              disabled={bank < powerUp.cost}
            >
              Purchase
            </motion.button>
          </div>
        ))}
      <h1 className="text-6xl justify-center items-center flex flex-row m-10 ">
        <span className="mr-4">Bank account:</span>
        {<AnimatedNumbers includeComma animateToNumber={bank} />}
        <span className="ml-2">KD</span>
      </h1>
      {/* <button
        className="bg-red-700 text-5xl rounded p-4 "
        onClick={addToCounter}
      >
        Work
      </button> */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "gray" }} // Animation on hover
        transition={{ duration: 0.3 }}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        className="bg-gray-600 text-5xl rounded p-4 "
        onClick={addToCounter}
      >
        Work
      </motion.button>
      <h2>Status:</h2>
      <p>{status ? status : "No status yet"}</p>
      {/* {alert( */}
      <p>
        {image ? <Image src={image} width={300} height={300}></Image> : null}
      </p>
    </div>
  );
}
