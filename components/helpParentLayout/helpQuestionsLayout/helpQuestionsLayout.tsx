import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import helpQuestionsStyle from "./helpQuestionsLayout.module.sass";

const HelpQuestionsLayout = (props: any) => {
  const [selectedQuestion, setSelectedQuestion] = useState<boolean>(false);

  const handleQuestion = () => {
    setSelectedQuestion(!selectedQuestion);
  };

  return (
    <div className={helpQuestionsStyle.helpQuestionsParent}>
      <div
        className={helpQuestionsStyle.helpQuestionsChild}
        onClick={handleQuestion}
      >
        <p className={helpQuestionsStyle.helpQuestion}>{props.data.question}</p>
        <BsFillCaretDownFill
          className={helpQuestionsStyle.helpQuestionIcon}
          style={
            selectedQuestion
              ? { color: "#e14f4f", transform: "rotate(180deg)" }
              : { color: "#3bb77e" }
          }
        />
      </div>
      {selectedQuestion && (
        <p className={helpQuestionsStyle.helpAnswer}>{props.data.answer}</p>
      )}
    </div>
  );
};

export default HelpQuestionsLayout;
