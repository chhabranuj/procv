import axios from "axios";
import { useState } from "react";
import LoaderLayout from "../loaderLayout/loaderLayout";
import getInTouchStyle from "./getInTouchLayout.module.sass";

const GetInTouchLayout = (props: any) => {
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
    formError: false,
    sendError: false,
    sendSuccess: false,
  });
  const [loader, setLoader] = useState<boolean>(false);

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
        formError: true,
      });
    } else {
      setLoader(true);
      const data = {
        Name: userData.name,
        Email: userData.email,
        Number: userData.number,
        Message: userData.message,
      };

      axios.post("/api/addUserData", data).then((response: any) => {
        if (response.data.dataAdded) {
          setUserData({
            name: "",
            email: "",
            number: "",
            message: "",
          });
          setErrorData({
            ...errorData,
            formError: false,
            sendError: false,
            sendSuccess: true,
          });
        } else {
          setErrorData({
            ...errorData,
            formError: false,
            sendSuccess: false,
            sendError: true,
          });
        }
        setLoader(false);

        const emailData = {
          to: userData.email,
          subject: "Thanks for reaching out to ProCv!.",
          type: "contact",
        };
        axios.post("/api/sendEmail", emailData).then((response: any) => {});
      });
    }
  };

  return (
    <div className={getInTouchStyle.getInTouchParent}>
      <p className={getInTouchStyle.getInTouchTitle}>Get In Touch</p>
      <p className={getInTouchStyle.getInTouchContent}>
        No need to Sign Up/Login for our service.
        <br />
        Just fill up the form and we'll get back to you as soon as possible.
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
              placeholder="Super Man"
              className={getInTouchStyle.getInTouchInput}
              onInput={handleNameInput}
              value={userData.name}
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
              placeholder="super.man@dc.com"
              className={getInTouchStyle.getInTouchInput}
              onInput={handleEmailInput}
              value={userData.email}
            />
            {errorData.emailError && (
              <p className={getInTouchStyle.getInTouchInputError}>
                Please enter a valid gmail id.
              </p>
            )}
          </div>
          <div className={getInTouchStyle.getInTouchInputContainer}>
            <p className={getInTouchStyle.getInTouchInputLabel}>
              Your Number (required)
            </p>
            <input
              type="number"
              placeholder="(999) 999-9999"
              className={getInTouchStyle.getInTouchInput}
              onInput={handleNumberInput}
              value={userData.number}
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
              placeholder={
                props.name
                  ? `Can I get some information about ${props.name} resume?`
                  : "Can I get some information about ProCV?"
              }
              className={getInTouchStyle.getInTouchInput}
              onInput={handleMessageInput}
              value={userData.message}
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
          {errorData.formError && (
            <p
              className={getInTouchStyle.getInTouchInputError}
              style={{ textAlign: "center" }}
            >
              Please fill the form properly.
            </p>
          )}
          {errorData.sendSuccess && (
            <p className={getInTouchStyle.getInTouchFormFilled}>
              Thank you for reaching out. We will get back to you shortly :)
            </p>
          )}
          {errorData.sendError && (
            <p
              className={getInTouchStyle.getInTouchFormFilled}
              style={{ backgroundColor: "red" }}
            >
              Something Went Wrong :( Please try again.
            </p>
          )}
          <p className={getInTouchStyle.whatsappUs}>
            Don't want to fill up the form?
            <br />
            Don't Worry, just{" "}
            <span
              style={{ color: "green" }}
              onClick={() => {
                window.open(
                  "//api.whatsapp.com/send?phone=917217746275&text=Hey, can I get some information about ProCV?"
                );
              }}
            >
              Whatsapp
            </span>{" "}
            us and we'll get back to you.
          </p>
        </div>
      </div>
      {loader && <LoaderLayout />}
    </div>
  );
};

export default GetInTouchLayout;
