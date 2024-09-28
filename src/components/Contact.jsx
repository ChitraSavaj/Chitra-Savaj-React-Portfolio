//Contact, Chitra Savaj, 301384748, 24/09/2024
import { CiLocationOn } from "react-icons/ci";
import { MdPhoneAndroid, MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate(); // Imported useNavigate

  const submitData = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., display a success message)
    console.log("Form submitted:", e.target.elements);

    // Navigating to the home page using useNavigate
    navigate("/"); 
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center text-center">
        <div className="sm:px-20 px-15">
          <p>Contact</p>
          <h2 className="capitalize text-gray-900 text-2xl font-medium">
          </h2>
          <p className="text-gray-500 mt-5 mb-8">
            
          </p>
          <div className="shadow-lg flex p-10 gap-20">
            <div className="w-[65%] flex-1">
              <p className="text-gray-500 text-left text-sm"></p>
              <h1 className="capitalize font-medium text-2xl text-left pt-1">
                Contact Me
              </h1>
              <form onSubmit={submitData} className="flex flex-col gap-2 pt-7">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className="border outline-none h-10 pl-1 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="border outline-none h-10 pl-1 rounded-lg"
                  required
                />
                <input
                  type="tel" // Change to tel for phone number input
                  name="contactNumber"
                  id="contactNumber"
                  placeholder="Contact Number"
                  className="border outline-none h-10 pl-1 rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border outline-none h-10 pl-1 rounded-lg"
                  required
                />
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  rows="7"
                  placeholder="Message"
                  className="border outline-none pl-1 rounded-lg resize-none p-1"
                  required
                />
                <button
                  type="submit"
                  className="text-white rounded-full py-1 bg-[#ff7a57]"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex-col justify-center gap-3 w-[35%] pl-14 border-l hidden min-[950px]:flex">
              <div className="flex gap-2">
                <CiLocationOn className="mt-1 h-8 w-8 rounded-full p-1 text-[#ff7a57] border border-[#ff7a57]" />
                <div className="flex flex-col text-left">
                  <h1 className="text-gray-600 font-medium">Location</h1>
                  <p className="text-sm text-gray-500 border-b pb-1">
                    Scarborough
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <MdPhoneAndroid className="mt-1 h-8 w-8 rounded-full p-1 text-[#ff7a57] border border-[#ff7a57]" />
                <div className="flex flex-col text-left">
                  <h1 className="text-gray-600 font-medium">Phone Number</h1>
                  <p className="text-sm text-gray-500 border-b pb-1">
                    437-532-3245
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <MdOutlineMail className="mt-1 h-8 w-8 rounded-full p-1 text-[#ff7a57] border border-[#ff7a57]" />
                <div className="flex flex-col text-left">
                  <h1 className="text-gray-600 font-medium">Email Address</h1>
                  <p className="text-sm text-gray-500 border-b pb-1">
                    csavaj1212@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;