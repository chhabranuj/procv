import Head from "next/head";
import Layout from "@/components/layout/layout";
import HelpLayout from "@/helpParentLayout/helpLayout/helpLayout";
import PageAboutLayout from "@/components/pageAboutLayout/pageAboutLayout";

const Help = () => {
  return (
    <Layout>
      <Head>
        <title>ProCv - Help</title>
      </Head>
      <PageAboutLayout title="Help" />
      <HelpLayout />
    </Layout>
  );
};

export default Help;
