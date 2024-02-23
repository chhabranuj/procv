import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import titleBarStyle from "./titleBarLayout.module.sass";
import LoaderLayout from "../loaderLayout/loaderLayout";

const TitleBarLayout = () => {
  const menu = ["home", "designs", "help", "contact"];

  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string>("home");
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  useEffect(() => {
    setActivePage(
      router.pathname == "/" ? "home" : router.pathname.split("/")[1]
    );
  });

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleScrollToTop = () => {
    setLoader(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    router.push("/");
    setInterval(() => {
      setLoader(false);
    }, 1000);
  };

  return (
    <div className={titleBarStyle.titleBarParent}>
      {/* For Screens with width more than 800px */}
      <div className={titleBarStyle.titleBarBigScreen}>
        <img
          src={"/static/logoRemovedBg.png"}
          alt="Logo"
          className={titleBarStyle.logo}
          onClick={handleScrollToTop}
        />
        <div className={titleBarStyle.menuContainer}>
          {menu.map((item, index) => {
            return (
              <p
                key={index}
                className={
                  activePage == item
                    ? titleBarStyle.menuContentActive
                    : titleBarStyle.menuContent
                }
                onClick={() => {
                  setLoader(true);
                  setActivePage(item);
                  item == "home" ? router.push("/") : router.push(item);
                }}
              >
                {item.toUpperCase()}
              </p>
            );
          })}
        </div>
      </div>

      {/* For screens with width less than 800px */}
      <div className={titleBarStyle.titleBarSmallScreen}>
        <img
          src={"/static/logoRemovedBg.png"}
          alt="Logo"
          className={titleBarStyle.logo}
          onClick={handleScrollToTop}
        />
        <HiOutlineMenuAlt3
          className={titleBarStyle.menuIcon}
          onClick={handleToggleMenu}
        />
        {toggleMenu && (
          <div className={titleBarStyle.menuContainer}>
            <GrFormClose
              className={titleBarStyle.closeIcon}
              onClick={handleToggleMenu}
            />
            <div className={titleBarStyle.menuContainerContent}>
              {menu.map((item, index) => {
                return (
                  <p
                    key={index}
                    className={
                      activePage == item
                        ? titleBarStyle.menuContentActive
                        : titleBarStyle.menuContent
                    }
                    onClick={() => {
                      setLoader(true);
                      setActivePage(item);
                      item == "home" ? router.push("/") : router.push(item);
                    }}
                  >
                    {item.toUpperCase()}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* To The Top Button */}
      {/* <button
        className={titleBarStyle.toTheTopButton}
        // style={{ display: toTheTopButton }}
        onClick={handleScrollToTop}
      >
        <p className={titleBarStyle.toTheTopButtonText}>TOP</p>
      </button> */}
      {loader && <LoaderLayout />}
    </div>
  );
};

export default TitleBarLayout;
