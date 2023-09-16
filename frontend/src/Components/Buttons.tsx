

const Buttons: React.FC = () => {
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Upload Image...
      </button>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Take a photo ...
      </button>
    </>
  );
};

export default Buttons;