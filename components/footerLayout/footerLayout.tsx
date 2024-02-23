import { useState } from "react";
import { useRouter } from "next/router";
import { BiPhone } from "react-icons/bi";
import { FaCopyright } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import footerStyle from "./footerLayout.module.sass";
import LoaderLayout from "../loaderLayout/loaderLayout";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";

const FooterLayout = () => {
  const usefulLinks = [
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Help/FAQ's",
      link: "/help",
    },
    {
      title: "Privacy Policy",
      link: "/documentation/privacyPolicy",
    },
    {
      title: "Terms & Conditions",
      link: "/documentation/terms&Conditions",
    },
  ];
  const connectWithUs = [
    {
      icon: <HiOutlineMail style={{ marginRight: "0.5rem" }} />,
      title: "E-Mail",
      link: "mailto:procv.contact@gmail.com",
    },
    {
      icon: <BiPhone style={{ marginRight: "0.5rem" }} />,
      title: "Call Us",
      link: "tel:7217746275",
    },
    {
      icon: <AiFillLinkedin style={{ marginRight: "0.5rem" }} />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/anuj-chhabra-b0b2a422a/",
    },
    {
      icon: <AiOutlineWhatsApp style={{ marginRight: "0.5rem" }} />,
      title: "Whatsapp",
      link: "//api.whatsapp.com/send?phone=917217746275&text=Hey, I want some details about a Resume.",
    },
  ];

  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);

  const naviagetToSecretChamber = () => {
    setLoader(true);
    router.push("/admin/login");
    setInterval(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <div className={footerStyle.footerParent}>
      {/* Footer About For Small Screens */}
      <div className={footerStyle.footerAboutMobile}>
        <img
          src={"/static/logoLight.png"}
          alt="Logo"
          className={footerStyle.logo}
          onClick={naviagetToSecretChamber}
        />
        <p className={footerStyle.footerContent}>
          ProCv is an innovative platform that transforms traditional resumes
          into dynamic, interactive portfolios, showcasing your skills,
          experiences, and achievements in a visually engaging manner. Stand out
          in today's competitive job market with ProCv - where your career story
          comes to life.
        </p>
      </div>

      <div className={footerStyle.footerChild}>
        {/* Footer Useful Links Sections */}
        <div className={footerStyle.usefulLinksSection}>
          <p className={footerStyle.sectionTitle}>Useful Links</p>
          <div className={footerStyle.sectionContent}>
            {usefulLinks.map((item, index) => {
              return (
                <p
                  key={index}
                  className={footerStyle.sectionContentTitle}
                  onClick={() => {
                    setLoader(true);
                    router.push(
                      {
                        pathname: item.link,
                        query: { title: item.title },
                      },
                      item.link
                    );
                    setInterval(() => {
                      setLoader(false);
                    }, 3000);
                  }}
                >
                  {item.title}
                </p>
              );
            })}
          </div>
        </div>

        {/* Footer About For Large Screens */}
        <div className={footerStyle.footerAbout}>
          <img
            src={"/static/logoLight.png"}
            alt="Logo"
            className={footerStyle.logo}
            onClick={naviagetToSecretChamber}
          />
          <p className={footerStyle.footerContent}>
            ProCv is an innovative platform that transforms traditional resumes
            into dynamic, interactive portfolios, showcasing your skills,
            experiences, and achievements in a visually engaging manner. Stand
            out in today's competitive job market with ProCv - where your career
            story comes to life.
          </p>
        </div>

        {/* Footer Connect With Us Sections */}
        <div className={footerStyle.connectSection}>
          <p className={footerStyle.sectionTitle}>Connect With Us</p>
          <div className={footerStyle.connectSectionContent}>
            {connectWithUs.map((item, index) => {
              return (
                <div
                  key={index}
                  className={footerStyle.sectionContentContainer}
                  onClick={() => {
                    window.open(item.link);
                  }}
                >
                  {item.icon}
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className={footerStyle.footerCopyright}>
        <FaCopyright className={footerStyle.copyrightIcon} />
        &nbsp;&nbsp;
        <p className={footerStyle.copyrightText}>
          2023 - ProCv. All Rights Reserved.
        </p>
      </div>

      {loader && <LoaderLayout />}
    </div>
  );
};

export default FooterLayout;
