import { useState } from "react";
import { useRouter } from "next/router";
import LoaderLayout from "../loaderLayout/loaderLayout";
import adminLoginStyle from "./adminLoginLayout.module.sass";
import getInTouchStyle from "../getInTouchLayout/getInTouchLayout.module.sass";

const AdminLoginLayout = () => {
  const router = useRouter();
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const handleUsernameInput = (e: any) => {
    setAdminData({
      ...adminData,
      username: e.target.value,
    });
    setError(false);
  };

  const handlePasswordInput = (e: any) => {
    setAdminData({
      ...adminData,
      password: e.target.value,
    });
    setError(false);
  };

  const handleAdminLogin = () => {
    if (
      adminData.username == process.env.username &&
      adminData.password == process.env.password
    ) {
      setError(false);
      setLoader(true);
      sessionStorage.setItem("AdminData", JSON.stringify(adminData));
      router.push("/admin/userdata");
      setInterval(() => {
        setLoader(false);
      }, 3000);
    } else {
      setError(true);
    }
  };

  return (
    <div className={adminLoginStyle.adminLoginParent}>
      <div className={getInTouchStyle.getInTouchContainerSection}>
        <p className={adminLoginStyle.adminLoginTitle}>Login / SignIn</p>
        <div className={getInTouchStyle.getInTouchInputContainer}>
          <p className={getInTouchStyle.getInTouchInputLabel}>
            Username (required)
          </p>
          <input
            type="text"
            placeholder="Super Man"
            className={getInTouchStyle.getInTouchInput}
            onInput={handleUsernameInput}
          />
        </div>
        <div className={getInTouchStyle.getInTouchInputContainer}>
          <p className={getInTouchStyle.getInTouchInputLabel}>
            Password (required)
          </p>
          <input
            type="password"
            placeholder="********"
            className={getInTouchStyle.getInTouchInput}
            onInput={handlePasswordInput}
          />
        </div>
        <button
          className={getInTouchStyle.getInTouchSendButton}
          onClick={handleAdminLogin}
        >
          ENTER
        </button>
        {error && (
          <p
            className={getInTouchStyle.getInTouchInputError}
            style={{ textAlign: "center" }}
          >
            Error in connecting...
          </p>
        )}
        <p className={getInTouchStyle.whatsappUs}>
          This service is exclusively for&nbsp;
          <span
            style={{
              color: "#27AE60",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Admins
          </span>{" "}
          of the website only.
        </p>
      </div>
      {loader && <LoaderLayout />}
    </div>
  );
};

export default AdminLoginLayout;
