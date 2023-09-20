import aboutUsPreviewStyle from "./aboutUsPreviewLayout.module.sass";
import { FaRegLightbulb, FaRegMoneyBillAlt, FaRegClock } from "react-icons/fa";

const AboutUsPreviewLayout = () => {
  const aboutUsCards = [
    {
      icon: <FaRegLightbulb className={aboutUsPreviewStyle.aboutUsCardIcon} />,
      title: "Unique Designs",
      content: "We provide a variety of templates with awesome designs.",
    },
    {
      icon: (
        <FaRegMoneyBillAlt className={aboutUsPreviewStyle.aboutUsCardIcon} />
      ),
      title: "Pocket Friendly",
      content: "We provides resumes that are easy on pocket and super cheap.",
    },
    {
      icon: <FaRegClock className={aboutUsPreviewStyle.aboutUsCardIcon} />,
      title: "Quick Service",
      content: "We provide service like a ninja, friendly and super quick.",
    },
  ];
  return (
    <div className={aboutUsPreviewStyle.aboutUsPreviewParent}>
      <div className={aboutUsPreviewStyle.aboutUsCardContainer}>
        {aboutUsCards.map((item, index) => {
          return (
            <div key={index} className={aboutUsPreviewStyle.aboutUsCardData}>
              {item.icon}
              <p className={aboutUsPreviewStyle.aboutUsCardTitle}>
                {item.title}
              </p>
              <p className={aboutUsPreviewStyle.aboutUsCardContent}>
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
      <p className={aboutUsPreviewStyle.aboutUsTitle}>About Us</p>
      <p className={aboutUsPreviewStyle.aboutUsContent}>
        At ProCv, we are dedicated to empowering individuals to craft compelling
        and professional resumes that stand out in today's competitive job
        market. Our user-friendly interface, coupled with a variety of
        customizable templates and expert adive, makes the resume creation
        process seamless and efficient. Wheather you're seasoned professional or
        just starting your career journey, we're here to help you showcase your
        skills and experiences in the best possible light. Join us and take the
        enxt step towards landing your dream job with a standout resume that
        trusly represents you.
      </p>
    </div>
  );
};

export default AboutUsPreviewLayout;
