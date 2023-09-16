const Buttons: React.FC = () => {
  return (
    <>
      <div className="flex items-center flex-col justify-center h-screen">

      <img className='h-[500px] w-[500px]'
      src= "https://media.post.rvohealth.io/wp-content/uploads/2019/02/Blurred-vision-and-headache-What-Causes-Them-Both-_732x549-thumbnail.jpg" />
      
        <div className="flex flex-row pt-5">
          <button className="bg-dark-gray text-blue-300 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5">
            Upload Image...
          </button>
          <div className="p-5"></div>
          
          <button className="bg-dark-gray text-blue-300 hover:bg-hover-color font-bold hover:text-white py-2 rounded-full pr-5 pl-5">
            Take a photo...
          </button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
