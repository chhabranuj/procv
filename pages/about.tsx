import Head from "next/head";
import PageAboutLayout from "@/components/pageAboutLayout/pageAboutLayout";
import OurAim from "@/components/ourAimLayout/ourAimLayout";
import AboutUsPreviewLayout from "@/components/aboutUsPreviewLayout/aboutUsPreviewLayout";
import TitleBarLayout from "@/components/titleBarLayout/titleBarLayout";
import FooterLayout from "@/components/footerLayout/footerLayout";
import GetInTouchLayout from "@/components/getInTouchLayout/getInTouchLayout";

const About = () => {
  return (
    <div>
      <Head>
        <title>ProCv - About</title>
      </Head>
      <TitleBarLayout />
      <PageAboutLayout title="About" />
      <OurAim />
      <AboutUsPreviewLayout />
      <GetInTouchLayout />
      <FooterLayout />
    </div>
  );
};

export default About;
