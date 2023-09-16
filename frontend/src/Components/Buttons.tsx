const Buttons: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <button className="bg-dark-gray text-blue-300 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5">
          Upload Image...
        </button>

        <div className="p-5"></div>
        
        <button className="bg-dark-gray text-blue-300 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5">
          Take a photo...
        </button>
      </div>
    </>
  );
};

export default Buttons;
