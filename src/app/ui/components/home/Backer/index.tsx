import { FC } from "react";

interface Props {
  title: string;
}

const Backer: FC<Props> = ({ title }) => {
  return (
    <div className="border-b border-solid border-[#185BEA] bg-[#fff] mobile:border-b-0 mobile:py-[0px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-around mobile:hidden mobile:flex-col">
        <div className="w-[40%] whitespace-pre-line py-[80px] font-bold text-[30px] capitalize leading-9 text-[#231F20]">
          {title}
        </div>
        <div className="h-full w-[20%] border-l border-r border-[#185BEA] py-[80px] text-center font-bold text-[21px] capitalize leading-[72px] text-[#231F20]">
          LTS GROUP
        </div>
        <div className="w-[40%] py-[80px] text-center font-bold text-[21px] capitalize leading-[72px] text-[#231F20]">
          LTS GLOBAL DIGITAL SERVICES
        </div>
      </div>
      <div className="hidden mobile:block">
        <div className="whitespace-pre-line px-[20px] py-[40px] text-center font-bold text-[30px] capitalize leading-9 text-[#231F20] mobile:text-[23px] mobile:leading-[28px]">
          {title}
        </div>
        <div className="flex border-b border-t border-[#185BEA]">
          <div className="h-full w-1/2 border-r border-[#185BEA] py-[30px] text-center font-bold text-[21px] capitalize leading-[108px] text-[#231F20]">
            LTS GROUP
          </div>
          <div className="content-center w-1/2 py-[30px] text-center font-bold text-[21px] capitalize leading-[24px] text-[#231F20]">
            LTS GLOBAL DIGITAL SERVICES
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backer;
