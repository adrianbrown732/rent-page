import styles from "./page.module.css";

function CloseIcon({ onIconClick }) {
  return (
    <svg
      className={styles["close-mobile"]}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      onClick={onIconClick}
    >
      <polyline points="30 30 70 70" />
      <polyline points="70 30 30 70" />
    </svg>
  );
}

export default function NavSectionMobile({ visible, onIconClick }) {
  return (
    <div className={styles["menu-mobile"] + " " + styles[visible]}>
      <header className={styles["header-mobile"]}>
        <CloseIcon onIconClick={onIconClick} />
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
  );
}
