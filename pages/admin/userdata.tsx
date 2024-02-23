import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import FooterLayout from "@/components/footerLayout/footerLayout";
import TitleBarLayout from "@/components/titleBarLayout/titleBarLayout";
import UserDataLayout from "@/components/userDataLayout/userDataLayout";
import PageAboutLayout from "@/components/pageAboutLayout/pageAboutLayout";

const UserData = () => {
  const router = useRouter();

  useEffect(() => {
    let adminData = JSON.parse(sessionStorage.getItem("AdminData") || "{}");
    if (
      adminData?.username != process.env.username ||
      adminData?.password != process.env.password
    ) {
      router.push("/");
    }
  });

  return (
    <div>
      <Head>
        <title>ProCv - User Data</title>
      </Head>
      <TitleBarLayout />
      <PageAboutLayout title="User Data" />
      <UserDataLayout />
      <FooterLayout />
    </div>
  );
};

export default UserData;
