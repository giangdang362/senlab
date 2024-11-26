import Image from "next/image";
import { FC } from "react";
import PrimaryBtn from "../../common/PrimaryBtn";

interface Props {
  title: string;
}

const CTA: FC<Props> = ({ title }) => {
  return (
    <div className="bg-[#185BEA] px-[20px] py-[80px] mobile:py-[45px]">
      <div className="mx-auto flex max-w-[1200px] justify-around mobile:flex-col">
        <div className="text-shadow-custom whitespace-pre-line font-bold text-[40px] leading-[45px] text-[#17EB1F] mobile:mb-[36px] mobile:text-center mobile:text-[26px] mobile:leading-[30px]">
          {title}
        </div>
        <div className="flex items-center justify-center gap-[26px] mobile:gap-[18px] mobile:flex-col">
          <input
            placeholder="Enter your email address"
            type="email"
            className="h-[40px] w-[344px] rounded-lg px-[14px] py-[8px] font-mono text-[21px] font-normal text-[#000000] shadow-[3px_3px_0px_0px_#000] mobile:text-[16px] mobile:leading-4 mobile:h-[30px] mobile:w-[262px]"
          />
          <PrimaryBtn label="Notify Me" className="h-[40px] w-[150px] leading-[8px] mobile:h-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
