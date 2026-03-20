"use client";

import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleClick = () => {
    setDisplayText(inputText);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-white">
      <h1 className="text-black text-7xl font-bold">Hello World</h1>

      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Escribe aquí"
        className="border-2 border-gray-400 p-4 text-xl text-black rounded-lg w-80"
      />

      <button
        onClick={handleClick}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
      >
        Presioname
      </button>

      {displayText && <p className="text-2xl text-gray-700">{displayText}</p>}
    </div>
  );
}
