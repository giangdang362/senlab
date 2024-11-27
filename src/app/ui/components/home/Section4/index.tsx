import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

interface Props {
  title: string;
  titleMobile: string;
  desc: string;
  arrSlide: {
    img: StaticImageData;
    title: string;
    sub: string;
  }[];
}

const Section4: FC<Props> = ({ titleMobile, title, desc, arrSlide }) => {
  return (
    <div className="flex items-center justify-center bg-[#fff]">
      <div className="mx-auto max-w-[1200px] py-[100px] mobile:p-[20px] mobile:py-[45px]">
        <div className="mb-[60px] mobile:mb-[35px]">
          <h1 className="mobile:hidden whitespace-pre-line text-center font-bold text-[50px] leading-[55px] text-[#231F20] mobile:text-center mobile:text-[26px] mobile:leading-[30px]">
            {title}
          </h1>
          <h1 className="hidden mobile:block whitespace-pre-line text-center font-bold text-[50px] leading-[55px] text-[#231F20] mobile:text-center mobile:text-[26px] mobile:leading-[30px]">
            {titleMobile}
          </h1>
          <p className="mt-[20px] text-center font-mono text-[18px] font-normal leading-[21px] text-[#231F20] mobile:mt-[14px] mobile:text-center mobile:text-[16px] mobile:leading-[19px]">
            {desc}
          </p>
        </div>
        <div className="flex justify-between gap-[40px] mobile:flex-col mobile:items-center mobile:gap-[30px]">
          {arrSlide?.map((item, index) => (
            <div
              key={item.title}
              className={`${index === 0 ? "bg-[#185BEA]" : index === 1 ? "bg-[#EB1773]" : index === 2 ? "bg-[#EBAB17]" : index === 3 ? "bg-[#1ACF21]" : ""} flex w-[270px] flex-col justify-between rounded-[20px] rounded-br-[100px] border-[1px] border-black ${index === 3 ? "p-4" : "p-6"} shadow-[4px_4px_0px_0px_#000] mobile:shadow-[2px_2px_0px_0px_#000]`}
            >
              <div>
                <Image
                  alt={item.title}
                  src={item.img}
                  className={`${arrSlide.length - 1 !== index ? "aspect-[1] w-[189px]" : "aspect-[266/231] w-[234px]"} mb-5 mx-auto`}
                />
                <div className="mb-4 text-center font-medium text-[18px] text-white">
                  {item.title}
                </div>
                <div className="h-[160px] text-center font-mono text-[16px] font-normal leading-5 text-white mobile:h-[100px] mobile:text-[14px] mobile:leading-4">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
