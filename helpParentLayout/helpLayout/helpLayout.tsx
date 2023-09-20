import helpStyle from "./helpLayout.module.sass";
import HelpQuestions from "../helpQuestionsLayout/helpQuestionsLayout";

const HelpLayout = () => {
  const faqs = [
    {
      question: "What is ProCv?",
      answer:
        "ProCv is a digital resume making website thats helps you to create your digital identity.",
    },
    {
      question: "Hellooo",
      answer:
        "No, there is no real money in Tradicious. When you Sign In we give you $10,000 as a signing bonus and you can invest them. No, there is no real money in Tradicious. When you Sign In we give you $10,000 as a signing bonus and you can invest them. lhlncd dkbfnkjw kwebfkbe",
    },
    {
      question:
        "How can I earn more money if I lost all of my money in trading?",
      answer:
        "With your referral code, you can earn $500. Whenever someone enter your referral you both get $500.",
    },
    {
      question: "What is ProCv?",
      answer:
        "ProCv is a digital resume making website thats helps you to create your digital identity.",
    },
    {
      question: "Hellooo",
      answer:
        "No, there is no real money in Tradicious. When you Sign In we give you $10,000 as a signing bonus and you can invest them.",
    },
    {
      question:
        "How can I earn more money if I lost all of my money in trading?",
      answer:
        "With your referral code, you can earn $500. Whenever someone enter your referral you both get $500.",
    },
    {
      question: "What is ProCv?",
      answer:
        "ProCv is a digital resume making website thats helps you to create your digital identity.",
    },
    {
      question: "Hellooo",
      answer:
        "No, there is no real money in Tradicious. When you Sign In we give you $10,000 as a signing bonus and you can invest them.",
    },
    {
      question:
        "How can I earn more money if I lost all of my money in trading?",
      answer:
        "With your referral code, you can earn $500. Whenever someone enter your referral you both get $500.",
    },
    {
      question: "What is ProCv?",
      answer:
        "ProCv is a digital resume making website thats helps you to create your digital identity.",
    },
    {
      question: "Hellooo",
      answer:
        "No, there is no real money in Tradicious. When you Sign In we give you $10,000 as a signing bonus and you can invest them.",
    },
    {
      question:
        "How can I earn more money if I lost all of my money in trading?",
      answer:
        "With your referral code, you can earn $500. Whenever someone enter your referral you both get $500.",
    },
  ];

  return (
    <div className={helpStyle.helpParent}>
      {faqs.map((item, index) => {
        return <HelpQuestions key={index} data={item} />;
      })}
    </div>
  );
};

export default HelpLayout;
