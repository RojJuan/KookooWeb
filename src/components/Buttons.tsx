export default function Buttons() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900 underline">
          Vote for the best game!
        </h2>
        <div className="flex justify-center mt-10">
          <button className="mr-4">
            <img
              className="max-h-12 w-full object-contain"
              src="https://www.seaisland.com/content/uploads/2022/01/placeholder-image.png"
              alt="Game1"
              width={158}
              height={48}
            />
          </button>
          <button className="mr-4">
            <img
              className="max-h-12 w-full object-contain"
              src="https://www.seaisland.com/content/uploads/2022/01/placeholder-image.png"
              alt="Breakseption"
              width={158}
              height={48}
            />
          </button>
          <button>
            <img
              className="max-h-12 w-full object-contain"
              src="https://www.seaisland.com/content/uploads/2022/01/placeholder-image.png"
              alt="game3"
              width={158}
              height={48}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
