import { useState } from "react";
import { useRouter } from "next/router";
import landingStyle from "./landingLayout.module.sass";
import LoaderLayout from "../loaderLayout/loaderLayout";

const LandingLayout = () => {
  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);

  const navigateToDesign = () => {
    setLoader(true);
    router.push("/designs");
    setInterval(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <div>
      <div className={landingStyle.landingStyle}>
        <div className={landingStyle.landingContainer}>
          <p className={landingStyle.landingSlogan}>
            Don't Just Tell
            <br />
            <span style={{ fontWeight: "bold" }}>Show Them!!!</span>
          </p>
          <p className={landingStyle.landingText}>
            We provide large varities of Digital Resumes that helps you to
            showcase your skills and achievements.
          </p>
          <div
            className={landingStyle.landingButtonContainer}
            onClick={navigateToDesign}
          >
            <div className={landingStyle.landingButton}>
              <p className={landingStyle.landingButtonContent}>Get Started</p>
            </div>
          </div>
        </div>
        <div className={landingStyle.landingContainer}>
          <img
            src={"/static/landingBg.webp"}
            className={landingStyle.landingBg}
          />
        </div>
      </div>
      {loader && <LoaderLayout />}
    </div>
  );
};

export default LandingLayout;
