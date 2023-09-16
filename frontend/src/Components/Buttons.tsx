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
  
  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('please select file');
      return
    } 

    const formData = new FormData();
    formData.append('image', selectedFile);

    //Pass File to Flask backend
    try {
      const response = await fetch('/upload', {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Image uploaded successfully.');
      } else {
        alert('Failed to upload image.');
      }

    } catch(error) {
      console.error('Error: ', error);
    }
  }

  return (
    <>
      <form className="flex flex-col items-center justify-center h-screen" onSubmit={handleSubmit}>
        
      <img className=' rounded-full h-[500px] w-[500px]'
      src= "https://media.post.rvohealth.io/wp-content/uploads/2019/02/Blurred-vision-and-headache-What-Causes-Them-Both-_732x549-thumbnail.jpg" />
      
        <div className='flex flex-row pt-5'>
          <button className="bg-dark-gray text-blue-300 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5" onClick={handleClick}>
            Upload Image...
          </button>
          <input
            ref={hiddenFileInput} // Reference to the hidden input element
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            className="hidden"
            onChange={handleFileSelect}
          />
          <div className="p-5"></div>
          
          <button className="bg-dark-gray text-blue-300 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5">
            Take a photo...
          </button>
        </div>

        <div className='pt-5'>
          <button className="bg-dark-gray text-blue-300 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5">
              Submit...
          </button>
        </div>

      </form>
    </>
  );
};

export default Buttons;
