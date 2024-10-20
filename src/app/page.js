"use client";
import { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { motion } from "framer-motion";
import Image from "next/image";
import colonize from "./assets/colinize.webp";
import takeOver from "./assets/take-over.webp";
import logo from "./assets/logo.png";

export default function Home() {
  const [bank, setBank] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);
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
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxEhIhUDjhJu24c31Zt8C_2slJa5IFviJnqLWUWjq3fNcuetLlNHbSM5ZYa-5gUdbXYkFotLkCOXaR_pJBFiZaq-FqaAEXwfvCSST6GoQgz1RRF6AdfJphWR0acy1rSOir43acpE_1ga3C/s400/Velenril+Iriaebor+Tobeymoor.jpg",
    },
    {
      name: "Colonize other countries",
      cost: 200000,
      effect: () => setClickValue(20000),
      status: "You are colonizing other countries!",
      image: colonize,
    },
    {
      name: "Take over the world!",
      cost: 400000,
      effect: () => setClickValue(40000),
      status: "You have now taken over the world!",
      image: takeOver,
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
    <div className="bg-blue flex flex-col items-center w-screen h-screen">
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 flex justify-center items-start pt-10 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-3/4 md:w-1/2">
            <motion.button
              className="bg-red-600 text-white px-4 py-2 rounded mb-4"
              whileHover={{ scale: 1.1, backgroundColor: "red" }} // Animation on hover
              transition={{ duration: 0.3 }}
              onClick={() => setShowModal(false)}
            >
              Close
            </motion.button>
            {powerUps
              .filter((powerUp) => bank >= powerUp.cost)
              .map((powerUp) => (
                <div
                  key={powerUp.name}
                  className="p-1 text-center text-3xl mb-4 flex items-center justify-center flex-col
                  "
                >
                  <h4 className="text-black">{powerUp.name}</h4>
                  <p className="p-2 text-black">Cost: {powerUp.cost}</p>
                  <Image
                    src={powerUp.image}
                    width={300}
                    height={300}
                    alt={powerUp.name}
                    className="mb-2"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "green" }} // Animation on hover
                    transition={{ duration: 0.3 }}
                    style={{
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    className="bg-green-800 text-white px-4 py-2 rounded"
                    onClick={() => {
                      purchasePowerUp(powerUp);
                      setShowModal(false); // Close modal after purchase
                    }}
                    disabled={bank < powerUp.cost}
                  >
                    Purchase
                  </motion.button>
                </div>
              ))}
          </div>
        </div>
      )}
      <div className="flex flex-row justify-start bg-red justi">
        <Image src={logo} width={170} height={170}></Image>
      </div>{" "}
      {/* Button to open the modal */}
      {powerUps.some((powerUp) => bank >= powerUp.cost) && (
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "green" }} // Animation on hover
          transition={{ duration: 0.3 }}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          View Available Power-ups
        </motion.button>
      )}
      <h1 className="text-6xl justify-center items-center flex flex-row m-10 ">
        <span className="mr-4">Bank account:</span>
        {<AnimatedNumbers includeComma animateToNumber={bank} />}
        <span className="ml-2">KD</span>
      </h1>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "gray" }} // Animation on hover
        transition={{ duration: 0.3 }}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        className="bg-gray-600 text-5xl rounded p-4"
        onClick={addToCounter}
        disabled={showModal} // Disable button if modal is open
      >
        Work
      </motion.button>
      <h2 className="text-4xl mt-8">Status:</h2>
      <p className="text-4xl">{status ? status : "No status yet"}</p>
      <p>
        {image ? (
          <Image src={image} width={300} height={300} alt="Power-up Image" />
        ) : null}
      </p>
    </div>
  );
}
