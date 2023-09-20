import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import titleBarStyle from "./titleBarLayout.module.sass";

const TitleBarLayout = () => {
  const menu = ["home", "about", "help", "designs", "contact"];

  const router = useRouter();
  const [activePage, setActivePage] = useState("home");
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toTheTopButton, setToTheTopButton] = useState<string>("none");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50
        ? setToTheTopButton("inline")
        : setToTheTopButton("none");
    });
    setActivePage(
      router.pathname == "/" ? "home" : router.pathname.split("/")[1]
    );
  });

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        style={{ display: toTheTopButton }}
        onClick={handleScrollToTop}
      >
        <p className={titleBarStyle.toTheTopButtonText}>TOP</p>
      </button> */}
    </div>
  );
};

export default TitleBarLayout;
