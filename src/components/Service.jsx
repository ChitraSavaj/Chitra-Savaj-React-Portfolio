//Service, Chitra Savaj, 301384748, 24/09/2024
import { TfiCrown } from "react-icons/tfi";
import { GrRobot } from "react-icons/gr";
import { CiDatabase } from "react-icons/ci";
import { FiBarChart } from "react-icons/fi";

const Service = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center">
          <div className="w-[70%]">
            
            <h2 className="capitalize text-gray-900 text-2xl font-medium py-4">
              what i do
            </h2>
            <p className="text-gray-500 mt-5 mb-8">

                I communicate fluently in code, make bugs diappear (most of the time), and transform coffee into innovative software. My superpower? I can harness AI to create intelligent solutions!
            </p>
          </div>
          <div className="w-[80%] grid max-[500px]:grid-cols-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-10">
            <div className="group flex flex-col gap-3 h-48 md:w-44 shadow-lg bg-white items-center justify-center border border-gray-100 hover:bg-[#ff7a57] hover:text-white">
              <TfiCrown className="w-9 h-9 text-[#ff7a57] group-hover:text-white" />
              <p className="text-xl">DSA</p>
            </div>
            <div className="group flex flex-col gap-3 h-48 md:w-44 shadow-lg bg-white items-center justify-center border border-gray-100 hover:bg-[#ff7a57] hover:text-white">
              <GrRobot className="w-9 h-9 text-[#ff7a57] group-hover:text-white" />
              <p className="text-xl">Automations</p>
            </div>
            <div className="group flex flex-col gap-3 h-48 md:w-44 shadow-lg bg-white items-center justify-center border border-gray-100 hover:bg-[#ff7a57] hover:text-white">
              <CiDatabase className="w-9 h-9 text-[#ff7a57] group-hover:text-white" />
              <p className="text-xl">SQL Database</p>
            </div>
            <div className="group flex flex-col gap-3 h-48 md:w-44 shadow-lg bg-white items-center justify-center border border-gray-100 hover:bg-[#ff7a57] hover:text-white">
              <FiBarChart className="w-9 h-9 text-[#ff7a57] group-hover:text-white" />
              <p className="text-xl">Insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
