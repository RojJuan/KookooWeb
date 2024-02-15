import React, { useState } from "react";
import "./Buttons.css";

export default function Buttons() {
  const [visibleText, setVisibleText] = useState<string | null>(null);

  const toggleVisibility = (buttonText: string) => {
    setVisibleText(buttonText);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900 underline">
          Vote for the best game!
        </h2>
        <div className="flex justify-center mt-10">
          <button className="mr-4" onClick={() => toggleVisibility("B.B.B.")}>
            <img
              className="max-h-12 w-full object-contain"
              src="https://www.seaisland.com/content/uploads/2022/01/placeholder-image.png"
              alt="B.B.B."
              width={158}
              height={48}
            />
          </button>
          <button
            className="mr-4"
            onClick={() => toggleVisibility("Brickception")}
          >
            <img
              className="max-h-12 w-full object-contain"
              src="https://www.seaisland.com/content/uploads/2022/01/placeholder-image.png"
              alt="Brickception"
              width={158}
              height={48}
            />
          </button>
          <button className="mr-4" onClick={() => toggleVisibility("Game3")}>
            <img
              className="max-h-12 w-full object-contain"
              src="https://www.seaisland.com/content/uploads/2022/01/placeholder-image.png"
              alt="Game3"
              width={158}
              height={48}
            />
          </button>
          <button onClick={() => toggleVisibility("Game4")}>
            <img
              className="max-h-12 w-full object-contain text-center"
              src="https://www.seaisland.com/content/uploads/2022/01/placeholder-image.png"
              alt="Game4"
              width={158}
              height={48}
            />
          </button>
        </div>
        {visibleText && (
          <>
            <p className="text-center font-bold text-3xl fade-in">
              {visibleText}
            </p>
            {visibleText === "B.B.B." && (
              <p className="text-center fade-in">
                A game about boats, battles and bread.
              </p>
            )}
            {visibleText === "Brickception" && (
              <p className="text-center fade-in">Spinny brick game</p>
            )}
            {visibleText === "Game3" && (
              <p className="text-center fade-in">Zombie.</p>
            )}
            {visibleText === "Game4" && (
              <p className="text-center fade-in">Steal cows.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
