import { motion } from "framer-motion";
import {
  Animation,
  textVariant,
  staggerContainer,
} from "../../utils/animation";

interface PropTypes {
  item: {
    id: number;
    image: string;
    title: string;
    description: string;
    colorCode: string;
  };
}

const Slide = (props: PropTypes) => {
  const { id, title, image, description, colorCode } = props?.item;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerContainer(2, 0.5)}
      key={id}
      className={`w-screen flex justify-center gap-x-10 bg-gradient-to-r min-h-screen  ${colorCode}  items-center`}
    >
      <div className=" w-5/12  flex gap-y-5 flex-col">
        <motion.h1
          key={id}
          variants={textVariant}
          className=" text-6xl font-serif font-semibold text-white"
        >
          {title}
        </motion.h1>
        <p className=" text-lg font-sans text-white/90">{description}</p>
        <div>
          <button className=" px-5 py-2 border-white rounded border text-white ">
            Order Now
          </button>
        </div>
      </div>
      <motion.img
        key={id}
        src={image}
        variants={Animation("left", "fade", 0, 1)}
        className="object-contain w-[500px]"
      />
    </motion.div>
  );
};

export default Slide;
