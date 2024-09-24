//Blogs, Chitra Savaj, 301384748, 24/09/2024
import blog1 from "../assets/What_is_SQL_Database.png";
import blog2 from "../assets/189_poster.png";
import blog3 from "../assets/Frame_1261_1_cdbae75ff2.png";

const Blogs = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <nav className="bg-gray-100 p-12">

      </nav>
      <div className="container mx-auto mt-4">
        <div className="w-[100%] xl:w-[70%] grid max-[500px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 px-3">
          <div className="shadow-lg rounded-lg p-4">
            <img src={blog1} alt="" width="400" height="200" className="rounded-t-lg" />
            <h2 className="text-center px-5 font-medium text-xl pt-2">
              Video Game Retailer Management System
            </h2>
            <div className="flex flex-col text-sm px-0 text-left py-2">
              <div className="flex justify text-gray-500  pb-2">
                <div className="flex items-center gap-2">
                </div>
              </div>
              <p class="justify-center text-center">
                VGRMS is a comprehensive database for video game retailers, streamlining inventory, customer relations, and supplier interactions. It includes game info, genres, platforms, suppliers, inventory, customers, transactions, and more.
              </p>
            </div>
          </div>
          <div className="shadow-lg rounded-lg p-4">
            <div class="flex justify-center items-center">
            <img src={blog2} alt="" width="220" height="" className="rounded-lg"  />
            </div>
            <h2 className="capitalize text-center px-4 font-medium text-xl pt-2">
              Python
            </h2>
            <div className="flex flex-col text-sm px-5 text-left py-2">
              <div className="flex justify-between text-gray-500 w-full pb-2">
                <div className="flex items-center gap-2"></div>
              </div>
              <p class="justify-center text-center">
                Analyzed 1.2 million Americans with bachelor's degrees using Python. Cleaned data, found highest-paying majors, compared earnings across fields (Business, STEM, HASS), and analyzed financial risks based on degree choices.
              </p>
            </div>
          </div>
          <div className="shadow-lg rounded-lg p-4">
            <img src={blog3} alt="" width="350" height="300" className="rounded-t-lg" />
            <h2 className="capitalize text-center px-4 font-medium text-xl pt-2">
              SRS
            </h2>
            <div className="flex flex-col text-sm px-3 text-left py-2">
              <div className="flex justify-between text-gray-500 w-full pb-2">
                <div className="flex items-center gap-2">
                </div>
              </div>
              <p class="justify-center text-center">
                SRS for "Campus Explorer" outlines scope, features, and functionalities, including an interactive map interface for intuitive navigation. It specifies user requirements for accessibility and personalization to enhance the overall user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;