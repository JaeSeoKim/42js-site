import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";

export interface NavProps {}

let prev_windows_scrollY = 0;

const Nav: React.FC<NavProps> = () => {
  const [isTop, setIsTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = (_e: Event) => {
    if (window.scrollY < 64) setIsTop(true);
    else setIsTop(false);
    if (window.scrollY < prev_windows_scrollY) {
      prev_windows_scrollY = window.scrollY;
      setIsVisible(true);
    } else {
      prev_windows_scrollY = window.scrollY;
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={`${styles.header} ${
            !isTop
              ? isVisible
                ? styles.slideIn
                : styles.slideOut
              : styles.test
          } ${!isTop ? styles.borderBottom : ""}`}
        >
          <div className={`${styles.container}`}>
            <Link href={"/"}>
              <a>
                <h1 className={styles.title}>42JS</h1>
              </a>
            </Link>
            <div className={styles.nav}>
              <Link href={"/"}>
                <a>link 1</a>
              </Link>
              <Link href={"/"}>
                <a>link 2</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
