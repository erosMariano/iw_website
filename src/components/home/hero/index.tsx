import { Alef } from "next/font/google";
import Image from "next/image";
import React from "react";
const alerf = Alef({ weight: "700", subsets: ["latin"] });

import Girl from "../../../../public/images/girl_hero.png";
function Hero() {
  return (
    <section className="w-full px-6">
      <h1
        style={alerf.style}
        className="text-5xl text-[#07074A] mt-20 text-center relative"
      >
        Boost Your English Skills with <br /> Our{" "}
        <span className="bg-gradient-to-r from-[#F3DFC6] from-10% via-[#E5D8E5] via-30% to-[#DAD2FE] to-90% inline-flex items-center justify-center w-[201px] h-[85px] rounded-2xl -rotate-[6deg]">
          Study
        </span>
      </h1>

      <div className="mt-14 flex justify-center relative">
        <div className="bg-red w-[391px] h-[476px] absolute">
          <div className="absolute left-[-117px] bottom-[166px]">
            <div className="w-[127.5px] h-[1px] bg-white"></div>
            <div className="w-[101.5px] h-[1px] bg-white rotate-90 relative left-[-51px]"></div>
            <p className="flex text-[#07074A] text-5xl gap-2 items-center absolute left-[-173px] bottom-8">
              <span className="w-10 h-10 bg-green-400 rounded-full block"></span>
              100%
            </p>
            <p className="text-white font-medium text-xl absolute w-max left-[-173px] -bottom-8">
              More Efficient & <br /> Effective
            </p>
          </div>
        </div>
        <Image src={Girl} alt="Estudante da IW" quality={100} />
      </div>
    </section>
  );
}

export default Hero;
