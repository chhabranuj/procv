import { useRouter } from "next/router";
import pageAboutStyle from "./pageAboutLayout.module.sass";

const PageAboutLayout = (props: any) => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
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
    </div>
  );
};

export default PageAboutLayout;
