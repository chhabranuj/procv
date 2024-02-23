import { useState } from "react";
import { useRouter } from "next/router";
import { TbMessages } from "react-icons/tb";
import helpPreviewStyle from "./helpPreviewLayout.module.sass";
import LoaderLayout from "@/components/loaderLayout/loaderLayout";
import HelpQuestions from "../helpQuestionsLayout/helpQuestionsLayout";

const HelpPreviewLayout = () => {
  const faqs = [
    {
      question: "What is ProCv?",
      answer:
        "ProCv is a digital resume making website thats helps you to create your digital identity.",
    },
    {
      question: "Who can use ProCv?",
      answer:
        "ProCv is for everyone. Wheather you're seasoned professional or just starting your career journey, we're here to help you showcase your skills and experiences in the best possible light.",
    },
    {
      question: "How do I get my Digital Resume?",
      answer:
        "Well, you just need to provide us your details and we will convert it into a website which can be accessed from anywhere on the internet.",
    },
  ];

  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);

  const toHelpPage = () => {
    setLoader(true);
    router.push("/help");
    setInterval(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <div>
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
                Need to ask a question?&nbsp;
                <span
                  className={helpPreviewStyle.visitHelpLink}
                  onClick={toHelpPage}
                >
                  Visit FAQ page.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={helpPreviewStyle.helpPreviewRightContainer}>
          <img
            src="/static/help.svg"
            alt="Help Image"
            className={helpPreviewStyle.helpPreviewImage}
          />
        </div>
      </div>
      {loader && <LoaderLayout />}
    </div>
  );
};

export default HelpPreviewLayout;
