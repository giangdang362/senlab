import Image from "next/image";
import { FC } from "react";
import s1 from "@/../public/homepage/section3/s1.png";
import s2 from "@/../public/homepage/section3/s2.png";
import s3 from "@/../public/homepage/section3/s3.png";
import s4 from "@/../public/homepage/section3/s4.png";
import linkedin from "@/../public/linkedin.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

interface Props {
  title: string;
  titleMobile: string;
  desc: string;
}

const arrSlide = [
  {
    img: s1,
    name: "Vu Quang Dung",
    pos: "AI and Semiconductor Specialist",
    linkin: "/",
  },
  {
    img: s2,
    name: "Nguyen Duy Anh",
    pos: "Head of AI Services",
    linkin: "/",
  },
  {
    img: s3,
    name: "Trinh Thi Minh Tam",
    pos: "AI Engineer",
    linkin: "/",
  },
  {
    img: s4,
    name: "Nguyen Minh Duc",
    pos: "AI Engineer",
    linkin: "/",
  },
];

const Section3: FC<Props> = ({ titleMobile, title, desc }) => {
  return (
    <div className="flex items-center justify-center bg-[#FFE8B2]">
      <div className="mx-auto max-w-[1200px] overflow-hidden py-[100px] mobile:p-[20px] mobile:pt-[45px] mobile:pb-[25px]">
        <div className="mb-[70px] mobile:mb-[35px]">
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
        <div className="mobile:hidden flex items-center justify-center gap-[30px] mobile:flex-row mobile:gap-[15px]">
          {arrSlide?.map((item) => (
            <div
              key={item.name}
              className="flex h-full w-[220px] flex-col justify-between bg-white p-4 shadow-[8px_8px_0px_0px_#EB1773] mobile:shadow-[5px_5px_0px_0px_#EB1773]"
            >
              <div>
                <Image
                  alt={item.name}
                  src={item.img}
                  className="mb-5 aspect-[189/208] w-[189px]"
                />
                <div className="mb-4 rounded border-[1px] border-[#000] bg-[#EB1773] text-center font-medium text-[18px] text-white">
                  {item.name}
                </div>
                <div className="h-[40px] text-center font-mono text-[16px] leading-5 text-[#231F20] mobile:h-auto mobile:text-[14px] mobile:leading-4">
                  {item.pos}
                </div>
              </div>
              <div className="relative mt-[24px] flex justify-center">
                <div className="absolute top-[50%] z-0 h-[0.5px] w-[70%] -translate-y-1/2 bg-[#3f3f3f]"></div>
                <Link
                  href={item.linkin}
                  className="relative z-[1] w-[32px] bg-white p-[6px]"
                >
                  <Image src={linkedin} alt={"linkedin-logo"} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden mobile:block">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={"220px"}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            className="h-[450px] custom-pagination"
          >
            {arrSlide?.map((item) => (
              <SwiperSlide
                key={item.name}
                className="flex items-center justify-center"
                style={{ width: "220px" }}
              >
                <div className="flex h-[405px] w-full flex-col justify-between bg-white p-4 shadow-[8px_8px_0px_0px_#EB1773]">
                  <div>
                    <Image
                      alt={item.name}
                      src={item.img}
                      className="mb-5 aspect-[189/208] w-[189px]"
                    />
                    <div className="mb-4 rounded border-[1px] border-[#000] bg-[#EB1773] text-center font-medium text-[18px] text-white">
                      {item.name}
                    </div>
                    <div className="h-[40px] text-center font-mono text-[16px] leading-5 text-[#231F20]">
                      {item.pos}
                    </div>
                  </div>
                  <div className="relative mt-[24px] flex justify-center">
                    <div className="absolute top-[50%] z-0 h-[0.5px] w-[70%] -translate-y-1/2 bg-[#3f3f3f]"></div>
                    <Link
                      href={item.linkin}
                      className="relative z-[1] w-[32px] bg-white p-[6px]"
                    >
                      <Image src={linkedin} alt={"linkedin-logo"} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section3;
