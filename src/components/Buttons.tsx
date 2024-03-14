import React, { useState } from "react";
import Modal from "react-modal";
import "./Buttons.css";
import cowHeistGIF from "./cowheistGIF.gif"; // Import the cow heist GIF

Modal.setAppElement("#root");

export default function Buttons() {
  const [visibleText, setVisibleText] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [voteSuccess, setVoteSuccess] = useState<boolean>(false);
  const [showCowHeistGif, setShowCowHeistGif] = useState<boolean>(false);

  const toggleVisibility = (buttonText: string) => {
    setVisibleText(buttonText);
    setModalIsOpen(false);
    if (buttonText === "Cow heist") {
      setShowCowHeistGif(true);
    } else {
      setShowCowHeistGif(false);
    }
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

  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900 underline">
            Vote for the best game!
          </h2>
          <div className="flex justify-center mt-10">
            <button className="mr-4 p-2" onClick={() => toggleVisibility("B.B.B.")}>
              <img
                className="max-h-24 w-full object-contain border-2 border-black rounded-lg"
                src="public/bread.png"
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
                src="public/cow_heist.png"
                alt="Cow heist"
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
              {visibleText === "Undead pursuit" && (
                <p className="text-center fade-in">Zombie.</p>
              )}
              {visibleText === "Cow heist" && (
                <p className="text-center fade-in">Steal cows.</p>
              )}
              <div className="flex justify-center mt-4">
                <button
                  className="text-lg font-semibold text-white bg-black px-4 py-2 rounded-md"
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
    </div>
  );
}
