import Head from "next/head";
import FooterLayout from "@/components/footerLayout/footerLayout";
import TitleBarLayout from "@/components/titleBarLayout/titleBarLayout";
import PageAboutLayout from "@/components/pageAboutLayout/pageAboutLayout";
import AdminLoginLayout from "@/components/adminLoginLayout/adminLoginLayout";

const AdminLogin = () => {
  return (
    <div>
      <Head>
        <title>ProCv - Admin Login</title>
      </Head>
      <TitleBarLayout />
      <PageAboutLayout title="Admin Login" />
      <AdminLoginLayout />
      <FooterLayout />
    </div>
  );
};

export default AdminLogin;
