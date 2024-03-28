import React, { useState } from "react";
import Modal from "react-modal";
import "./Buttons.css"; // Your custom CSS file
import cowHeistGIF from "./cowheistGIF.gif"; // Import the cow heist GIF
import breadImage from "./bread.png"; // Import the transparent bread image
import cowHeistImage from "./cow_heist.png";
import limbaLogo from "./LIMBAKOOKOOLOGO.png"; // Import the transparent cow heist image

Modal.setAppElement("#root");

export default function Buttons() {
  const [visibleText, setVisibleText] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [voteSuccess, setVoteSuccess] = useState<boolean>(false);
  const [showCowHeistGif, setShowCowHeistGif] = useState<boolean>(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const toggleVisibility = (buttonText: string) => {
    setVisibleText(buttonText);
    setModalIsOpen(false);
    if (buttonText === "Cow heist") {
      setShowCowHeistGif(true);
    } else {
      setShowCowHeistGif(false);
    }
    setSelectedGame(buttonText); // Set the selected game
  };

  const openModal = () => {
    if (visibleText) {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setVoteSuccess(false);
  };

  const handleVoteClick = () => {
    setVoteSuccess(true);
  };

  const getButtonGradient = () => {
    // Define gradient classes for each game
    const gameGradients: { [key: string]: string } = {
      "B.B.B.": "bg-gradient-to-r from-cyan-500 to-green-500",
      "Brickception": "bg-gradient-to-r from-pink-500 to-purple-700",
      "Undead pursuit": "bg-gradient-to-r from-slate-700 to-green-800",
      "Cow heist": "bg-gradient-to-r from-red-800 to-orange-600"
    };
    // Return the gradient class based on the selected game
    return gameGradients[selectedGame || ""] || "";
  };

  return (
    <div>
      <div className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900 underline">
            Vote for the best game!
          </h2>
          <div className="flex justify-center mt-10">
            <button className="mr-4 p-2" onClick={() => toggleVisibility("B.B.B.")}>
              <img
                className="max-h-24 w-full object-contain border-2 border-black rounded-lg"
                src={breadImage}
                alt="B.B.B."
                width={158}
                height={48}
              />
            </button>
            <button
              className="mr-4 p-2"
              onClick={() => toggleVisibility("Brickception")}
            >
              <img
                className="max-h-24 w-full object-contain"
                src="https://www.seaisland.com/content/uploads/2022/01/placeholder-image.png"
                alt="Brickception"
                width={158}
                height={48}
              />
            </button>
            <button className="mr-4 p-2" onClick={() => toggleVisibility("Undead pursuit")}>
              <img
                className="max-h-24 w-full object-contain"
                src="https://www.seaisland.com/content/uploads/2022/01/placeholder-image.png"
                alt="Undead pursuit"
                width={158}
                height={48}
              />
            </button>
            <button onClick={() => toggleVisibility("Cow heist")}>
              <img
                className="max-h-24 w-full object-contain border-2 border-black rounded-lg"
                src={cowHeistImage}
                alt="Cow heist"
                width={158}
                height={48}
              />
            </button>
          </div>
          {visibleText && (
            <>
              <p className={`text-center font-bold text-3xl bg-gradient-to-r ${getButtonGradient()} text-transparent bg-clip-text`}>
                {visibleText}
              </p>
              {visibleText === "B.B.B." && (
                <p className="text-center fade-in text-2xl">
                  A game about boats, battles and bread.
                </p>
              )}
              {visibleText === "Brickception" && (
                <p className="text-center fade-in text-2xl">Spinny brick game</p>
              )}
              {visibleText === "Undead pursuit" && (
                <p className="text-center fade-in text-2xl">Zombie.</p>
              )}
              {visibleText === "Cow heist" && (
                <p className="text-center fade-in text-2xl">Steal cows.</p>
              )}
              <div className="flex justify-center mt-4">
                <button
                  className={`text-lg font-semibold text-white px-4 py-2 rounded-md ${getButtonGradient()}`}
                  onClick={openModal}
                >
                  Vote for {visibleText}!
                </button>
              </div>
            </>
          )}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Vote Modal"
          >
            {!voteSuccess ? (
              <>
              <p className="text-center font-bold text-3xl">Are you sure you want to vote for {visibleText}?</p>
              <div className="flex justify-center mt-4">
                <button
                  className="text-lg font-semibold text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md mr-4"
                  onClick={handleVoteClick}
                >
                  Confirm Vote
                </button>
                <button
                  className="text-lg font-semibold text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </>
            
            ) : (
              <div className="text-center">
                <span className="text-black text-5xl mb-4 inline-block">
                  &#10003;
                </span>{" "}
                <h2 className=" font-bold text-3xl">Vote Successful!</h2>
                <button className="bg-black text-white px-3 py-1 rounded-md" onClick={closeModal}>Close</button>
              </div>
            )}
          </Modal>
        </div>
      </div>
      {showCowHeistGif && (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <img
            src={cowHeistGIF}
            alt="Cow Heist GIF"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>
      )}
      <div className="flex justify-center">
        <img src={limbaLogo} alt="bruhhhh" className="w-96 h-auto"></img>
      </div>
      <div className="text-center py-8">
        <p className={`font-bold text-2xl bg-gradient-to-r ${getButtonGradient()} text-transparent bg-clip-text`}>What is Limbakookoo Game Studios?</p>
        <p className="text-lg text-black mb-6">Limbakookoo Game Studios is an indie studio started by a few high school students.</p>
        <p className={`font-bold text-2xl bg-gradient-to-r ${getButtonGradient()} text-transparent bg-clip-text`}>Why was it named Limbakookoo?</p>
        <p className="text-lg text-black">We needed a codename for a GitHub project, and I asked the manager what it should be called. He said "limbakookoo", and so, the name stuck.</p>
      </div>
    </div>
  );
}
