import Head from "next/head";
import { useRouter } from "next/router";
import FooterLayout from "@/components/footerLayout/footerLayout";
import TitleBarLayout from "@/components/titleBarLayout/titleBarLayout";
import PageAboutLayout from "@/components/pageAboutLayout/pageAboutLayout";
import GetInTouchLayout from "@/components/getInTouchLayout/getInTouchLayout";

const Contact = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>ProCv - Contact Us</title>
      </Head>
      <TitleBarLayout />
      <PageAboutLayout title="Contact Us" />
      <GetInTouchLayout name={router.query.name} />
      <FooterLayout />
    </div>
  );
};

export default Contact;
