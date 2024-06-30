import { LayoutGrid } from "../utils/layout-grid";
import Yamaha from "../assets/yamaha.svg";
import Adam from "../assets/adam.svg";
import KRK from "../assets/KRK.svg";
import UA from "../assets/ua.svg";
import Audio from "../assets/audio-technica.svg";
import MAudio from "../assets/m-audio.svg";

import Marquee from "react-fast-marquee";
export function Product() {
  return (
    <div className="py-10 min-h-screen">
      <div className="h-screen  w-full">
        <LayoutGrid cards={cards} />
        <div className="w-[100%] py-2 bg-[#E7F0DC]">
          <div className=" w-[80%] py-5   mx-auto">
            <h2 className=" text-center text-[26px]   py-5 font-semibold">
              Lorem Ipsum has been the industry's standard dummy text{" "}
            </h2>
            <Marquee
              pauseOnHover={true}
              className=" flex justify-center items-center"
            >
              <img
                className=" mx-10"
                src={Yamaha}
                width={200}
                height={100}
                alt=""
              />
              <img className=" mx-10" width={300} src={Audio} alt="" />
              <img className=" mx-10" width={250} src={Adam} />
              <img className=" mx-10" width={100} src={KRK} />
              <img className=" mx-10" width={100} src={UA} />
              <img className=" mx-10" width={200} src={MAudio} />
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Yamaha HS 4</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Yamaha HS 6</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Yamaha HS 7</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Yamaha HS 8</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://i.pinimg.com/564x/55/02/41/5502415dd47c32c963adf1d565a16b45.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://i.pinimg.com/564x/f9/71/61/f971610c19da363bffea4a16ed2332a7.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://i.pinimg.com/564x/6c/09/52/6c0952cde333cadeceb4f617d490a1bb.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://i.pinimg.com/564x/2c/5f/f2/2c5ff272cdbb7bc2acdd32ddc46e8a8d.jpg",
  },
];
