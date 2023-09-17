import React, {useState, useRef} from 'react';
const Buttons: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const [uploadedImage, setUploadedImage] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle file selection
  const handleFileSelect = (e: React.ChangeEvent<any>) => {
    console.log(e.target.files);
    const file = e.target.files[0]; // Get the first selected file
    setSelectedFile(file);
    console.log(file[0])
  };
  
  const handleClick = (e: React.ChangeEvent<any>) => {
    //Prevent Form Submission
    e.preventDefault();

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
    formData.append('file', selectedFile);

    //Pass File to Flask backend
    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        mode: 'cors',
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log("response ok")
        const blob = await response.blob();
        const imageURL = URL.createObjectURL(blob);
        setUploadedImage(imageURL);
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
        
      <img className=' pt-5 rounded-full h-[300px] w-[300px]'
      src= "https://media.post.rvohealth.io/wp-content/uploads/2019/02/Blurred-vision-and-headache-What-Causes-Them-Both-_732x549-thumbnail.jpg" />
      
        <div className='flex flex-row pt-12'>
          <button className="bg-dark-gray text-teal-400 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5" onClick={handleClick}>
            Upload Image...
          </button>
          <input
            ref={hiddenFileInput} // Reference to the hidden input element
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            className="hidden"
            name='image'
            value=''
            onChange={handleFileSelect}
          />
          <div className="p-5"></div>
          
          <button className="bg-dark-gray text-teal-400 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5">
            Take a photo...
          </button>
        </div>

        <div className='pt-5'>
          <button className="bg-dark-gray text-teal-400 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5">
              Submit...
          </button>
        </div>

      </form>
    </>
  );
};

export default Buttons;
