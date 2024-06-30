import { motion } from "framer-motion";

import { Animation, staggerContainer } from "../utils/animation";
const Aboutus = () => {
  return (
    <section className=" flex justify-around mt-[70px] items-center container mx-auto min-h-screen">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer(3, 0.5)}
        className="w-5/12 relative"
      >
        <motion.div
          variants={Animation("up", "spring", 0.8, 1.2)}
          className=" bg-gradient-to-r shadow-[5px_5px_rgba(156,_39,_176,_0.4),_10px_10px_rgba(156,_39,_176,_0.3),_15px_15px_rgba(156,_39,_176,_0.2),_20px_20px_rgba(156,_39,_176,_0.1),_25px_25px_rgba(156,_39,_176,_0.05)]
  from-purple-500 to-purple-900 p-5 rounded absolute top-[50px] left-0  w-[300px]"
        >
          <h2 className=" text-2xl font-semibold text-white font-serif">
            Queality ++
          </h2>
          <p className="text-sm text-white">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </motion.div>
        <motion.div
          variants={Animation("up", "spring", 0.5, 1.2)}
          className=" bg-gradient-to-r shadow-[5px_5px_rgba(236,_72,_153,_0.4),_10px_10px_rgba(236,_72,_153,_0.3),_15px_15px_rgba(236,_72,_153,_0.2),_20px_20px_rgba(236,_72,_153,_0.1),_25px_25px_rgba(236,_72,_153,_0.05)]
  from-pink-500 to-rose-500 p-5 rounded absolute top-[-80px] right-[-100px]  w-[300px]  "
        >
          <h2 className=" text-2xl font-semibold text-white font-serif">
            Fastest Order
          </h2>
          <p className="text-sm text-white">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </motion.div>
        <motion.div
          variants={Animation("up", "spring", 0, 1.2)}
          className=" bg-gradient-to-r duration-[0.5s] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] shadow-[5px_5px_rgba(249,_115,_22,_0.4),_10px_10px_rgba(249,_115,_22,_0.3),_15px_15px_rgba(249,_115,_22,_0.2),_20px_20px_rgba(249,_115,_22,_0.1),_25px_25px_rgba(249,_115,_22,_0.05)]
  from-red-500 to-orange-500 absolute p-5 bottom-0 rounded left-0 w-[300px]"
        >
          <h2 className=" text-2xl font-semibold text-white font-serif">
            24/7 Support
          </h2>
          <p className="text-sm text-white">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </motion.div>
      </motion.div>
      <div className=" w-4/12">
        <h2 className="  text-3xl text-black/90">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </h2>
        <p>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
};

export default Aboutus;
