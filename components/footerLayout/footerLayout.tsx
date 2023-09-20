import { FaCopyright } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import footerStyle from "./footerLayout.module.sass";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";

const FooterLayout = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={footerStyle.footerParent}>
      {/* Footer About For Small Screens */}
      <div className={footerStyle.footerAboutMobile}>
        <img
          src={"/static/logoLight.png"}
          alt="Logo"
          className={footerStyle.logo}
          onClick={handleScrollToTop}
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
            <p className={footerStyle.sectionContentTitle}>About Us</p>
            <p className={footerStyle.sectionContentTitle}>Help/FAQ's</p>
            <p className={footerStyle.sectionContentTitle}>Privacy Policy</p>
            <p className={footerStyle.sectionContentTitle}>
              Terms & Conditions
            </p>
          </div>
        </div>

        {/* Footer About For Large Screens */}
        <div className={footerStyle.footerAbout}>
          <img
            src={"/static/logoLight.png"}
            alt="Logo"
            className={footerStyle.logo}
            onClick={handleScrollToTop}
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
            <div
              className={footerStyle.sectionContentContainer}
              onClick={() => {
                window.open("mailto:anujchhabra.work@gmail.com");
              }}
            >
              <HiOutlineMail style={{ marginRight: "0.5rem" }} />
              <p>E-Mail</p>
            </div>
            <div
              className={footerStyle.sectionContentContainer}
              onClick={() => {
                window.open("tel:7217746275");
              }}
            >
              <BiPhone style={{ marginRight: "0.5rem" }} />
              <p>Call Us</p>
            </div>
            <div
              className={footerStyle.sectionContentContainer}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/anuj-chhabra-b0b2a422a/"
                );
              }}
            >
              <AiFillLinkedin style={{ marginRight: "0.5rem" }} />
              <p>LinkedIn</p>
            </div>
            <div
              className={footerStyle.sectionContentContainer}
              onClick={() => {
                window.open(
                  "//api.whatsapp.com/send?phone=917217746275&text=Hey, I want some details about a Resume."
                );
              }}
            >
              <AiOutlineWhatsApp style={{ marginRight: "0.5rem" }} />
              <p>Whatsapp</p>
            </div>
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
    </div>
  );
};

export default FooterLayout;
