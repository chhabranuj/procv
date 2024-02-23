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
      question: "Who can use ProCv?",
      answer:
        "ProCv is for everyone. Wheather you're seasoned professional or just starting your career journey, we're here to help you showcase your skills and experiences in the best possible light.",
    },
    {
      question: "How do I get my Digital Resume?",
      answer:
        "Well, you just need to provide us your details and we will convert it into a website which can be accessed from anywhere on the internet.",
    },
    {
      question: "Do I also get any certificate with my resume?",
      answer:
        "Yes, we will provide you with the certificate of authenticity with the purchased resume, that you can post in your LinkedIn and other social media sites to tell everyone about your new digital identity.",
    },
    {
      question: "What if I need to change/update information in the resume?",
      answer:
        "Here at ProCv, we provide free service for all our customers for 3 months. After that any modification will be charged.",
    },
    {
      question: "Do I get the code for the website?",
      answer:
        "No. We don't provide the code of the website as it is confidential. We'll provide you with the link of your digital resume that you can use anywhere.",
    },
    {
      question:
        "Is there any hidden fees like for publishing or something else?",
      answer:
        "No, there is no hidden fees for anything. Everything including publishing of the website will be done at our (ProCv) end.",
    },
    {
      question: "How can I purchase any resume?",
      answer:
        "Just fill up the form in contact section and we'll get back to you as soon as possible. Or you can whatsapp us also.",
    },
    {
      question: "Can I customize the content and design of my digital resume?",
      answer:
        "We'll surely add all your details in the resume you choose, but as these websites are coded so it might be difficult to customize the resume. We can remove the section that you don.t need but adding section can will cause more money as per the work.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, your personal information is very much secure with us. Also we'll need only your professional information that can be shared with anyone.",
    },
    {
      question:
        "How long does it take to receive my digital resume after purchase?",
      answer:
        "Good things take time. It takes 3-4 business days to create your digital identity.",
    },
    {
      question: "Do you offer discounts for bulk orders or subscriptions?",
      answer:
        "Everything feels good with a discount. On your recommendation if someone buys a digital resume, we'll give 25% of your order payment back to you.",
    },
    {
      question: "Do you create a resume on order?",
      answer:
        "Don't like our products. Don't worry, our expertise is creating digital resume. We create resume on special order also.",
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
