"use client";
import styles from "./page.module.css";
import { useState } from "react";
import HeroSectionMobile from "./hero-mobile";

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
      <div className={styles["menu-mobile"] + " " + styles[visible]}>
        <header className={styles["header-mobile"]}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={25}
            height={25}
            stroke="black"
            strokeWidth="8px"
            onClick={() => {
              hideMobileNav();
            }}
          >
            <polyline points="30 30 70 70" />
            <polyline points="70 30 30 70" />
          </svg>
          <h2 className={styles.title}>Rent Page</h2>
          <p className={styles["sign-in"]}>Sign In</p>
        </header>
        <nav className={styles["nav-mobile"]}>
          <ul>
            <li>Buy</li>
            <li>Rent</li>
            <li>Sell</li>
            <li>Home Loans</li>
            <li>Find an Agent</li>
            <li>Manage Rentals</li>
            <li>Advertise</li>
            <li>Help</li>
          </ul>
        </nav>
      </div>
      <HeroSectionMobile
        onIconClick={() => {
          showMobileNav();
        }}
      />
      {/* <section className={styles["signin-section"]}>
        <h2>Get home recommendations</h2>
        <p>Sign in for a more personalized experience</p>
        <button className={styles["signin-button"]}>Sign in</button>
      </section> */}
    </main>
  );
}
