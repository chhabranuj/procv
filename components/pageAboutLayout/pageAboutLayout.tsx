import { useState } from "react";
import { useRouter } from "next/router";
import LoaderLayout from "../loaderLayout/loaderLayout";
import pageAboutStyle from "./pageAboutLayout.module.sass";

const PageAboutLayout = (props: any) => {
  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);

  const handleHome = () => {
    setLoader(true);
    router.push("/");
    setInterval(() => {
      setLoader(false);
    }, 3000);
  };
  return (
    <div className={pageAboutStyle.pageAboutParent}>
      <p className={pageAboutStyle.pageAboutTitle}>{props.title}</p>
      <p className={pageAboutStyle.pageAboutFrom}>
        <span className={pageAboutStyle.pageAboutHome} onClick={handleHome}>
          Home
        </span>
        &nbsp;/ {props.title}
      </p>
      {loader && <LoaderLayout />}
    </div>
  );
};

export default PageAboutLayout;
