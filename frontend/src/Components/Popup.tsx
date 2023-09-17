import React from 'react';

type PopupProps = {
  trigger: boolean;
  onClose: () => void;
  img: string;
};

const Popup: React.FC<PopupProps> = ({ trigger, onClose, img }) => {
  // Function to handle downloading the image
  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = img;
    anchor.download = 'image.jpg';
    anchor.click();
  };


  return trigger ? (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="bg-black p-8 rounded-lg shadow-lg z-10 w-96 flex flex-col justify-center items-center">
          <img className="h-[300px] pb-10" src={img} alt="Doesn't Work" onClick={onClose} />
          <div className="flex justify-center">
            {/* Button to download the image */}
            <button
              className="bg-teal-400 hover:bg-teal-500 text-white py-2 px-4 rounded-full"
              onClick={handleDownload}
            >
              Download
            </button>

          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Popup;





