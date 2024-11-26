"use client";

import { useTranslations } from "next-intl";
import Banner from "../components/home/Banner";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";

import s1 from "@/../public/homepage/section4/s1.png";
import s2 from "@/../public/homepage/section4/s2.png";
import s3 from "@/../public/homepage/section4/s3.png";
import s4 from "@/../public/homepage/section4/s4.png";
import Section4 from "../components/home/Section4";
import CTA from "../components/home/CTA";
import Backer from "../components/home/Backer";

const HomePage = () => {
  const t = useTranslations("homepage");
  const arrSection4 = [
    {
      img: s1,
      title: t("section4.item1.title"),
      sub: t("section4.item1.sub"),
    },
    {
      img: s2,
      title: t("section4.item2.title"),
      sub: t("section4.item2.sub"),
    },
    {
      img: s3,
      title: t("section4.item3.title"),
      sub: t("section4.item3.sub"),
    },
    {
      img: s4,
      title: t("section4.item4.title"),
      sub: t("section4.item4.sub"),
    },
  ];
  return (
    <div className="bg-white">
      <Banner
        titleMobile={t("banner.titleMobile")}
        title={t("banner.title")}
        desc={t("banner.desc")}
        btnLabel1={t("banner.btnLabel1")}
        btnLabel2={t("banner.btnLabel2")}
      />
      <Section2 title={t("section2.title")} desc={t("section2.desc")} />
      <Section3 titleMobile={t("section3.titleMobile")} title={t("section3.title")} desc={t("section3.desc")} />
      <Section4
        arrSlide={arrSection4}
        titleMobile={t("section4.titleMobile")}
        title={t("section4.title")}
        desc={t("section4.desc")}
      />
      <CTA title={t("ctaTitle")} />
      <Backer title={t("backerTitle")} />
    </div>
  );
};

export default HomePage;
