import React, {useState, useRef} from 'react';
const Buttons: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);


  // Function to handle file selection
  const handleFileSelect = (e: React.ChangeEvent<any>) => {
    const file = e.target.files[0]; // Get the first selected file
    setSelectedFile(file);
  };
  
  const handleClick = () => {
    //Click the hidden input
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }

  }

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
