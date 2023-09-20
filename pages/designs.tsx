import Head from "next/head";
import Layout from "@/components/layout/layout";
import PageAboutLayout from "@/components/pageAboutLayout/pageAboutLayout";
import DealOfTheDayLayout from "@/components/dealOfTheDayLayout/dealOfTheDayLayout";

const Designs = () => {
  return (
    <Layout>
      <Head>
        <title>ProCv - Designs</title>
      </Head>
      <PageAboutLayout title="Designs" />
      <DealOfTheDayLayout />
    </Layout>
  );
};

export default Designs;
