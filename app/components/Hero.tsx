import Image from "next/image";
import BlueArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";

export function Hero() {
  return (
    <div className="pt-4">
      <div className="px-[20px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026]">
          Start monitoring website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C]">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature.
          Booste productivity and efficiency!
        </p>

        <div className="flex w-full pt-8">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px]">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2">
            View Pricing
            <span>
              <Image src={BlueArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover"
        />
        <div className="absolute bottom-5 flex flex-col w-full items-center">
          <Image src={HeroImage} alt="hero-image" className="-ml-4 h-[310px]" />
          <div className="flex w-full flex-col items-center">
            <p className="text-[#FFFFFF] text-center">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle">
              <Image src={Google} alt="" />
              <Image src={Slack} alt="" />
              <Image src={Truspilot} alt="" />
              <Image src={Cnn} alt="" />
              <Image src={Cluth} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
