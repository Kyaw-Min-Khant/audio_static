import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Contactus = () => {
  return (
    <section>
      <div className=" flex justify-center items-center">
        <div className="w-4/12">
          <h2 className=" text-[24px] font-serif text-black">Get in touch</h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley
          </p>
          <div className=" flex justify-start  items-center gap-x-5 py-2">
            <div className=" w-[50px] h-[50px] rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex justify-center items-center">
              <IoMdMail size={30} color="white" />
            </div>
            <div>
              <h2 className="text-[18px] font-semibold"> Email Us</h2>
              <p className=" text-[14px] font-body">
                example1@gmail.com
                <br />
                example2@gmail.com
              </p>
            </div>
          </div>
          <div className=" flex justify-start  items-center gap-x-5 py-2">
            <div className=" w-[50px] h-[50px] rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex justify-center items-center">
              <FaPhoneVolume size={30} color="white" />
            </div>
            <div>
              <h2 className="text-[18px] font-semibold"> Call Us</h2>
              <p className=" text-[14px] font-body">
                09950276464
                <br />
                09950276464
              </p>
            </div>
          </div>
          <div className=" flex justify-start  items-center gap-x-5 py-2">
            <div className=" w-[50px] h-[50px] rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex justify-center items-center">
              <IoLocationSharp size={30} color="white" />
            </div>
            <div>
              <h2 className="text-[18px] font-semibold"> Location</h2>
              <p className=" text-[14px] font-body">Yangon, Myanmar ,Asia</p>
            </div>
          </div>
          <hr />
          <div>
            <h2>Follow our Social Media</h2>
            <div className="flex justify-start pt-2 items-center gap-x-5">
              <div className=" w-[30px] h-[30px] rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                <FaFacebookF size={16} color="white" />
              </div>
              <div className=" w-[30px] h-[30px] rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                <FaTelegramPlane size={16} color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12"></div>
      </div>
    </section>
  );
};

export default Contactus;
