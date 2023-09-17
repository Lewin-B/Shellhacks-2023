import React, {useState, useRef} from 'react';
import Popup from './Popup';
import Spinner from './Spinner'




const Buttons: React.FC = () => {
  //Adding state for loading
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const [blur, setBlur] = useState('');
  const [show, setShow] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY ?? '';

  // Handles pop up close
  const handleClose = () => {
    setShow(false);
  }

  // Function to handle file selection
  const handleFileSelect = (e: React.ChangeEvent<any>) => {
    const file = e.target.files[0]; // Get the first selected file
    setSelectedFile(file);
  };
  
  //Triggers file selection
  const handleClick = (e: React.ChangeEvent<any>) => {
    //Prevent Form Submission
    e.preventDefault();

    //Click the hidden input
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }

  }

  // Function to take a photo from the camera and upload it
  const handleTakePhoto = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Create a video element to display the camera feed
      const video = document.createElement('video');
      video.srcObject = mediaStream;

      // Play the video to display the camera feed
      video.play();

      // Capture a frame from the camera feed
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Stop the camera feed
      mediaStream.getTracks().forEach((track) => track.stop());

    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };
  
  
  //Handles the form submission
  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('please select file');
      return
    } 
    //Set loading to true
    else{
      alert('Submission Succesfull Click to Continue...'
      )
    }

    //Make api call to blur faces
    const url = 'https://face-and-plate-blurer.p.rapidapi.com/img-anonymization/v1/results';
    const data = new FormData();
    data.append('image', selectedFile);
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'face-and-plate-blurer.p.rapidapi.com'
      },
      body: data
    };

    
    try {
      setIsLoading(true);
      
      const response = await fetch(url, options);
      const result = await response.json();
      if (response.ok) {
        //Extract blurred image
        setBlur(result['results'][0]['entities'][0]['image']);
        setShow(true);
      } else {
        console.log('error extracting image')
      }
    } catch (error) {
      if (error instanceof TypeError) {
        alert(error)
      }
      console.error(error);
    }
    
  }

  return (
    <>
      <Spinner trigger={isLoading}/>
      <form className="flex flex-col items-center justify-center h-screen" onSubmit={handleSubmit}>
      <Popup trigger={show} onClose={handleClose} img={`data:image/jpeg;base64,${blur}`} />
      <img className=' pt-5 rounded-full h-[300px] w-[300px]'
      src= "https://media.post.rvohealth.io/wp-content/uploads/2019/02/Blurred-vision-and-headache-What-Causes-Them-Both-_732x549-thumbnail.jpg" />
      
        <div className='flex flex-col pt-12'>
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
          <div className="p-3"></div>
          <button className="bg-dark-gray text-teal-400 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5">
              Submit...
          </button>
        </div>

      </form>
    </>
  );
};

export default Buttons;
