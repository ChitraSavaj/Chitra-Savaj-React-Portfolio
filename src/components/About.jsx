//About, Chitra Savaj, 301384748, 24/09/2024
import avatar from "../assets/Chitra Picture.jpg";

const About = () => {
  //  link with Google Drive link
  const resumeLink = "https://drive.google.com/file/d/1WZoIpyAzlgnIhbbtNuTKVAT1RK4cEfbQ/view?usp=sharing"; 

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center w-[85%]">
          <div className="col-span-1 flex justify-center">
            <img 
              src={avatar} 
              alt="avatar" 
              className="h-65 w-56 rounded-full border-4 border-[#ff7a57]" 
            />
          </div>
          <div className="col-span-1 md:col-span-2 pl-10 lg:px-0 pt-10 md:py-0">
            <h2 className="font-bold text-4xl text-gray-600">Chitra Savaj</h2>
            <p className="py-2 font-mono text-lg text-gray-600">
              AI Developer
            </p>
            <p className="text-gray-500">
              I am a passionate AI Engineer and Database Engineer, skilled in leveraging machine learning models and optimizing data management systems. With a strong foundation in Data Structures and Algorithms (DSA), I create intelligent solutions while ensuring data integrity and accessibility across SQL and NoSQL databases.

              Fueled by countless cups of coffee, I thrive during late-night coding sessions, transforming raw data into actionable insights and bringing innovative ideas to life.
            </p>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <button className="mt-10 py-1 px-4 text-white rounded-full bg-[#ff7a57]">
                View Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
