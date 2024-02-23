import { useState } from "react";
import { useRouter } from "next/router";
import getStartedStyle from "./getStartedLayout.module.sass";
import LoaderLayout from "../loaderLayout/loaderLayout";

const GetStartedLayout = () => {
  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);

  const navigateToDesigns = () => {
    setLoader(true);
    router.push("/designs");
    setInterval(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <div className={getStartedStyle.getStartedParent}>
      <p className={getStartedStyle.getStartedTitle}>Your Skills, Our Tech</p>
      <p className={getStartedStyle.getStartedSubTitle}>
        Let's Create Your Digital Identity
      </p>
      <p className={getStartedStyle.getStartedContent}>
        Embrace the future of job applications and present your credentials in a
        way that leaves a lasting impact.
        <br />
        Get started today and take the next step towards unlocking new career
        opportunities!
      </p>
      <button
        className={getStartedStyle.getStartedButton}
        onClick={navigateToDesigns}
      >
        Get Started
      </button>
      {loader && <LoaderLayout />}
    </div>
  );
};

export default GetStartedLayout;
