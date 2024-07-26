import styles from "./page.module.css";

export default function HeroSectionMobile({ onIconClick }) {
  return (
    <section className={styles["hero-section"]}>
      <header className={styles.header}>
        <nav>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={25}
            height={25}
            stroke="white"
            strokeWidth="8px"
            onClick={onIconClick}
          >
            <polyline points="15 30 85 30" />
            <polyline points="15 50 85 50" />
            <polyline points="15 70 85 70" />
          </svg>
        </nav>
        <h2 className={styles.title}>Rent Page</h2>
        <p className={styles["sign-in"]}>Sign In</p>
      </header>
      <h1 className={styles.tagline}>Agents. Tours. Loans. Homes.</h1>
      <form className={styles["search-wrapper"]}>
        <input type="text" id="search" placeholder="Enter an addrress" />
        <label className={styles.box}>
          <button type="submit">
            <span>
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false"
                role="img"
                className={styles.icon}
              >
                <path
                  stroke="none"
                  d="M29.41,26.59,23.77,21A12,12,0,0,0,14,2c-.17,0-.33,0-.5,0s-.33,0-.5,0A11,11,0,0,0,2,13c0,.17,0,.33,0,.5s0,.33,0,.5a12,12,0,0,0,19,9.77l5.64,5.64a2,2,0,0,0,2.82-2.82ZM14,22a8,8,0,1,1,8-8A8,8,0,0,1,14,22Z"
                ></path>
              </svg>
            </span>
          </button>
        </label>
      </form>
    </section>
  );
}
