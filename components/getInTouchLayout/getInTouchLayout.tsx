import { useState } from "react";
import getInTouchStyle from "./getInTouchLayout.module.sass";

const GetInTouchLayout = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errorData, setErrorData] = useState({
    nameError: false,
    emailError: false,
    numberError: false,
    messageError: false,
    sendError: false,
    sendSuccess: false,
  });

  const handleNameInput = (e: any) => {
    setUserData({
      ...userData,
      name: e.target.value,
    });
    e.target.value.length < 1
      ? setErrorData({ ...errorData, nameError: true })
      : setErrorData({ ...errorData, nameError: false });
  };

  const handleEmailInput = (e: any) => {
    setUserData({
      ...userData,
      email: e.target.value,
    });
    !e.target.value.includes("@gmail.com")
      ? setErrorData({ ...errorData, emailError: true })
      : setErrorData({ ...errorData, emailError: false });
  };

  const handleNumberInput = (e: any) => {
    setUserData({
      ...userData,
      number: e.target.value,
    });
    e.target.value.length != 10
      ? setErrorData({ ...errorData, numberError: true })
      : setErrorData({ ...errorData, numberError: false });
  };

  const handleMessageInput = (e: any) => {
    setUserData({
      ...userData,
      message: e.target.value,
    });
    e.target.value.length < 1
      ? setErrorData({ ...errorData, messageError: true })
      : setErrorData({ ...errorData, messageError: false });
  };

  const handleSend = () => {
    if (
      !userData.name.length ||
      errorData.nameError ||
      !userData.email.length ||
      errorData.emailError ||
      !userData.number.length ||
      errorData.numberError ||
      !userData.message.length ||
      errorData.messageError
    ) {
      setErrorData({
        ...errorData,
        sendError: true,
      });
    } else {
      // Not working i.e. inputs are not empty on successful submit.
      setUserData({
        ...userData,
        name: "",
        email: "",
        number: "",
        message: "",
      });
      console.log("hi");
      setErrorData({
        ...errorData,
        sendError: false,
        sendSuccess: true,
      });
    }
  };

  return (
    <div className={getInTouchStyle.getInTouchParent}>
      <p className={getInTouchStyle.getInTouchTitle}>Get In Touch</p>
      <p className={getInTouchStyle.getInTouchContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        molestiae voluptatem iste ad delectus, magni ratione neque ea?
        Veritatis, expedita.
      </p>
      <div className={getInTouchStyle.getInTouchContainer}>
        <div className={getInTouchStyle.getInTouchContainerSection}>
          <img
            src={"/static/getInTouch.webp"}
            className={getInTouchStyle.getInTouchBg}
          />
        </div>
        <div className={getInTouchStyle.getInTouchContainerSection}>
          <div className={getInTouchStyle.getInTouchInputContainer}>
            <p className={getInTouchStyle.getInTouchInputLabel}>
              Your Name (required)
            </p>
            <input
              type="text"
              className={getInTouchStyle.getInTouchInput}
              onInput={handleNameInput}
            />
            {errorData.nameError && (
              <p className={getInTouchStyle.getInTouchInputError}>
                Please enter a valid name.
              </p>
            )}
          </div>
          <div className={getInTouchStyle.getInTouchInputContainer}>
            <p className={getInTouchStyle.getInTouchInputLabel}>
              Your Email (required)
            </p>
            <input
              type="email"
              className={getInTouchStyle.getInTouchInput}
              onInput={handleEmailInput}
            />
            {errorData.emailError && (
              <p className={getInTouchStyle.getInTouchInputError}>
                Please enter a valid g-mail id.
              </p>
            )}
          </div>
          <div className={getInTouchStyle.getInTouchInputContainer}>
            <p className={getInTouchStyle.getInTouchInputLabel}>
              Your Number (required)
            </p>
            <input
              type="number"
              className={getInTouchStyle.getInTouchInput}
              onInput={handleNumberInput}
            />
            {errorData.numberError && (
              <p className={getInTouchStyle.getInTouchInputError}>
                Please enter 10 digit number.
              </p>
            )}
          </div>
          <div className={getInTouchStyle.getInTouchInputContainer}>
            <p className={getInTouchStyle.getInTouchInputLabel}>
              Message (required)
            </p>
            <textarea
              rows={6}
              className={getInTouchStyle.getInTouchInput}
              onInput={handleMessageInput}
            />
            {errorData.messageError && (
              <p className={getInTouchStyle.getInTouchInputError}>
                Please enter a valid message.
              </p>
            )}
          </div>
          <button
            className={getInTouchStyle.getInTouchSendButton}
            onClick={handleSend}
          >
            SEND
          </button>
          {errorData.sendError && (
            <p
              className={getInTouchStyle.getInTouchInputError}
              style={{ textAlign: "center" }}
            >
              Please fill the form properly.
            </p>
          )}
          {errorData.sendSuccess && (
            <p className={getInTouchStyle.getInTouchFormFilled}>
              Form Filled Successfully :)
            </p>
          )}
          <p className={getInTouchStyle.whatsappUs}>
            Don't want to fill up the form.
            <br />
            Don't Worry, just{" "}
            <span
              style={{ color: "green" }}
              onClick={() => {
                window.open(
                  "//api.whatsapp.com/send?phone=917217746275&text=Hey, I want some details about a Resume."
                );
              }}
            >
              Whatsapp
            </span>{" "}
            us and we'll get back to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchLayout;
