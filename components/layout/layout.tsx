import Head from "next/head";
import FooterLayout from "../footerLayout/footerLayout";
import TitleBarLayout from "../titleBarLayout/titleBarLayout";
import GetInTouchLayout from "../getInTouchLayout/getInTouchLayout";
import NewsletterLayout from "../newsletterLayout/newsletterLayout";

const Layout = (props: any) => {
  return (
    <div>
      <Head>
        <title>ProCv</title>
      </Head>
      <TitleBarLayout />
      <main>{props.children}</main>
      <NewsletterLayout />
      <GetInTouchLayout />
      <FooterLayout />
    </div>
  );
};

export default Layout;
