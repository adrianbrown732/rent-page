"use client";
import styles from "./page.module.css";
import { useState } from "react";
import HeroSectionMobile from "./hero-mobile";
import NavSectionMobile from "./nav-mobile";

export default function Home() {
  const [visible, setVisibility] = useState("hide");

  function showMobileNav() {
    setVisibility("");
  }

  function hideMobileNav() {
    setVisibility("hide");
  }

  return (
    <main className={styles.main}>
      <NavSectionMobile visible={visible} onIconClick={hideMobileNav} />
      <HeroSectionMobile onIconClick={showMobileNav} />
      {/* <section className={styles["signin-section"]}>
        <h2>Get home recommendations</h2>
        <p>Sign in for a more personalized experience</p>
        <button className={styles["signin-button"]}>Sign in</button>
      </section> */}
    </main>
  );
}
