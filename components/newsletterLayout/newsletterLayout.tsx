import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaLongArrowAltRight } from "react-icons/fa";
import newsletterStyle from "./newsletterLayout.module.sass";

const NewsletterLayout = () => {
  const router = useRouter();
  const [email, setEmail] = useState<{
    id: string;
    error: boolean;
    success: boolean;
  }>({
    id: "",
    error: false,
    success: false,
  });

  const setNewsletterEmail = (e: any) => {
    setEmail({
      id: e.target.value,
      error: false,
      success: false,
    });
  };

  const handleNewsletterEmail = () => {
    if (email.id.split("@")[1] === "gmail.com") {
      setEmail({
        id: "",
        error: false,
        success: true,
      });

      const data = {
        to: email.id,
        subject:
          "Welcome to ProCv! Let's Craft Your Digital Identity Together.",
        type: "newsletter",
      };

      axios.post("/api/sendEmail", data).then((response: any) => {});
    } else {
      setEmail({
        ...email,
        error: true,
      });
    }
  };
  return (
    <div className={newsletterStyle.newsletterParent}>
      <p className={newsletterStyle.newsletterHeading}>Newsletter</p>
      <p className={newsletterStyle.newsletterSubHeading}>
        ProCv{" "}
        <span style={{ opacity: "50%" }}>
          provides you all the updates with new designs on daily basis.
        </span>
      </p>
      <div className={newsletterStyle.newsletterChild}>
        <div className={newsletterStyle.newsletterContainer}>
          <p className={newsletterStyle.newsletterTagline}>
            Stay up to date with upcoming news and updates
          </p>
          <p className={newsletterStyle.newsletterSubTagline}>
            Subscribe and don't miss anything.
          </p>
        </div>
        <div className={newsletterStyle.newsletterContainer}>
          <div className={newsletterStyle.newsletterEmailParent}>
            <input
              className={newsletterStyle.newsletterEmail}
              type="email"
              name="email"
              value={email.id}
              placeholder="Enter your email address."
              onChange={setNewsletterEmail}
            />
            <button
              className={newsletterStyle.newsletterSubmitButton}
              onClick={handleNewsletterEmail}
            >
              <FaLongArrowAltRight
                className={newsletterStyle.newsletterEmailButtonIcon}
              />
            </button>
          </div>
          {email.error && (
            <p className={newsletterStyle.newsletterEmailError}>
              Please enter a valid Gmail id.
            </p>
          )}
          {email.success && (
            <p
              className={newsletterStyle.newsletterEmailError}
              style={{ color: "#0bd20b" }}
            >
              Email successfully added.
            </p>
          )}
          <p className={newsletterStyle.newsletterTAndC}>
            By entering your email address and clicking Submit, you affirm you
            have read and agree to the{" "}
            <span
              style={{ color: "skyblue", cursor: "pointer" }}
              onClick={() => {
                router.push(
                  {
                    pathname: "/documentation/privacyPolicy",
                    query: { title: "Privacy Policy" },
                  },
                  "/documentation/privacyPolicy"
                );
              }}
            >
              Privacy Policy
            </span>{" "}
            and{" "}
            <span
              style={{ color: "skyblue", cursor: "pointer" }}
              onClick={() => {
                router.push(
                  {
                    pathname: "/documentation/terms&Conditions",
                    query: { title: "Terms & Conditions" },
                  },
                  "/documentation/terms&Conditions"
                );
              }}
            >
              Terms & Conditions
            </span>{" "}
            and want to receive news.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterLayout;
