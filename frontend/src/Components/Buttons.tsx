const Buttons: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full pr-5 pl-5">
          Upload Image...
        </button>

        <div className="p-5"></div>
        

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 pr-7 pl-7 rounded-full">
          Take a photo...
        </button>
      </div>
      
    </>
  );
};

export default Buttons;