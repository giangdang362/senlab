import Image from "next/image";
import { FC } from "react";
import s1 from "@/../public/homepage/section2/s1.png";
import s2 from "@/../public/homepage/section2/s2.png";
import s3 from "@/../public/homepage/section2/s3.png";

interface Props {
  title: string;
  desc: string;
}

const Section2: FC<Props> = ({ title, desc }) => {
  return (
    <div className="flex items-center justify-center bg-[#17EB1F]">
      <div className="mx-auto flex max-w-[1200px] justify-between py-[100px] mobile:block mobile:p-[20px] mobile:py-[45px]">
        <div className="w-[45%] mobile:mb-[34px] mobile:w-full">
          <h1 className="whitespace-pre-line font-bold text-[65px] leading-[64px] text-[#231F20] mobile:text-center mobile:text-[26px] mobile:leading-[30px]">
            {title}
          </h1>
          <p className="mobile:[16px] mt-[22px] text-[18px] font-normal leading-[21px] text-[#231F20] mobile:mt-[14px] mobile:text-center mobile:leading-[19px]">
            {desc}
          </p>
        </div>
        <div className="flex w-[50%] justify-center gap-[20px] mobile:w-full mobile:gap-[14px]">
          <div className="flex flex-col justify-center gap-5">
            <Image
              alt={"s1"}
              src={s1}
              className="ml-auto aspect-[200/195] w-[200px] shadow-[8px_8px_0px_0px_#185BEA] mobile:w-[113px] mobile:shadow-[5px_5px_0px_0px_#185BEA]"
            />
            <Image
              alt={"s2"}
              src={s2}
              className="aspect-[256/235] w-[256px] shadow-[8px_8px_0px_0px_#EBAB17] mobile:w-[145px] mobile:shadow-[5px_5px_0px_0px_#EBAB17]"
            />
          </div>
          <Image
            alt={"s3"}
            src={s3}
            className="aspect-[299/416] w-[299px] shadow-[8px_8px_0px_0px_#EB1773] mobile:w-[169px] mobile:shadow-[5px_5px_0px_0px_#EB1773]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
