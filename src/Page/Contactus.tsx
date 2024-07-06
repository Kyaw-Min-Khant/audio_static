import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

const Contactus = () => {
  return (
    <section className=" flex overflow-hidden flex-col min-h-screen  items-center justify-center">
      <div className=" flex  rounded-lg shadow-2xl shadow-slate-500 w-8/12  justify-around items-center">
        <div className="w-6/12 py-5 px-5">
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
              <div className=" w-[30px] h-[30px] rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                <FaTiktok size={16} color="white" />
              </div>
              <div className=" w-[30px] h-[30px] rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center">
                <FaViber size={16} color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12 py-3 bg-[#fafafa] px-5">
          <form className="flex justify-around items-center gap-y-5 flex-col">
            <h2 className=" text-2xl  font-body font-semibold">
              Send us a Message
            </h2>
            <input
              placeholder="Enter Your Name"
              className=" px-2 w-full py-2 border border-gray-400 rounded outline-blue-600"
              type="text"
            />
            <input
              placeholder="Enter Your Email"
              className=" px-2 w-full py-2 border border-gray-400 rounded outline-blue-600"
              type="Email"
            />
            <textarea
              placeholder="Enter Your Name"
              className=" px-2 w-full min-h-[150px] py-2 border border-gray-400 rounded outline-blue-600"
            />
            <button className=" w-full py-2 bg-blue-700 text-white font-semibold text-[18px]">
              Send
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.7249930759044!2d96.12953811007958!3d16.79035231966449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ebdc55829e33%3A0xedb1fc9825e0b85f!2sOrchid%20Condominium!5e0!3m2!1sen!2smm!4v1719844462742!5m2!1sen!2smm"
        style={{ width: "100vw", height: 400, marginTop: 100 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className=" bg-blue-800 py-1 w-screen">
        <h1 className=" text-white font-medium text-[14px] text-center">
          Copyright @ 2024 KR .All right reserved
        </h1>
      </div>
    </section>
  );
};

export default Contactus;
