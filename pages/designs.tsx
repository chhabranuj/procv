import Head from "next/head";
import Layout from "@/components/layout/layout";
import PageAboutLayout from "@/components/pageAboutLayout/pageAboutLayout";
import Design from "@/components/designParentLayout/design Layout/designLayout";

const Designs = () => {
  return (
    <Layout>
      <Head>
        <title>ProCv - Designs</title>
      </Head>
      <PageAboutLayout title="Designs" />
      <Design />
    </Layout>
  );
};

export default Designs;
