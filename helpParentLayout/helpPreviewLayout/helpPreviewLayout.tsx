import { useRouter } from "next/router";
import { TbMessages } from "react-icons/tb";
import helpPreviewStyle from "./helpPreviewLayout.module.sass";
import HelpQuestions from "../helpQuestionsLayout/helpQuestionsLayout";

const HelpPreviewLayout = () => {
  const faqs = [
    {
      question: "What is ProCv?",
      answer:
        "ProCv is a digital resume making website thats helps you to create your digital identity.",
    },
    {
      question: "Hellooo",
      answer:
        "No, there is no real money in Tradicious. When you Sign In we give you $10,000 as a signing bonus and you can invest them. No, there is no real money in Tradicious. When you Sign In we give you $10,000 as a signing bonus and you can invest them. nlkvsn dsnln lsdnlkcdsna",
    },
    {
      question:
        "How can I earn more money if I lost all of my money in trading?",
      answer:
        "With your referral code, you can earn $500. Whenever someone enter your referral you both get $500.",
    },
  ];

  const router = useRouter();

  const toHelpPage = () => {
    router.push("help");
  };

  return (
    <div className={helpPreviewStyle.helpPreviewParent}>
      <div className={helpPreviewStyle.helpPreviewLeftContainer}>
        <p className={helpPreviewStyle.helpPreviewHeading}>
          Frequently asked questions
        </p>
        <p className={helpPreviewStyle.helpPreviewSubHeading}>
          New to ProCv? Browse our list of frequently asked questions to find
          what interests you.
        </p>
        {faqs.map((item, index) => {
          return <HelpQuestions key={index} data={item} />;
        })}
        <div className={helpPreviewStyle.visitHelpParent}>
          <TbMessages className={helpPreviewStyle.visitHelpIcon} />
          <div style={{ width: "70%" }}>
            <p className={helpPreviewStyle.visitHelpTagline}>
              Need to ask a question? Try out our FAQ page
            </p>
            <p className={helpPreviewStyle.visitHelpLink} onClick={toHelpPage}>
              Visit FAQ page
            </p>
          </div>
        </div>
      </div>
      <div className={helpPreviewStyle.helpPreviewRightContainer}>
        <img
          src="/static/help.webp"
          alt="Help Image"
          className={helpPreviewStyle.helpPreviewImage}
        />
      </div>
    </div>
  );
};

export default HelpPreviewLayout;
