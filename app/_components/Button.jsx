"use client";

import ShinyText from "./ShinyText";
import Image from "next/image";
import enterLogo from "../../public/enter.svg";
import Magnet from "./Magnet";
import { useRouter } from "next/navigation";

const Button = ({ label, btnType, redirect, extraClass, isMagnetic, isShiny}) => {
  // btnType = 1 for Full Button and 2 for only bordered button

  const router = useRouter();

  const handleRedirect = () => {
    router.push(redirect);
  };

  return (
    <div className={extraClass}>
      <Magnet padding={100} disabled={!isMagnetic} magnetStrength={10}>
        <div
          className={`Button lg:h-[35px] w-fit ${
            btnType == 1 ? "bg-primaryRed" : "border-primaryRed lg:border-2"
          } flex justify-center items-center `}
          onClick={handleRedirect}
        >
          <Image
            src={enterLogo}
            alt="My Company Logo"
            className="lg:w-[15px] lg:h-[15px] mx-[15px] "
          />

          <ShinyText
            text={label}
            disabled={!isShiny}
            speed={3}
            className="font-clash-display lg:mr-[15px] lg:text-lg font-medium"
          />
        </div>
      </Magnet>
    </div>
  );
};

export default Button;
