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

function NavParent({ link, name }) {
  return (
    <li key={name}>
      <a className={styles["nav-link"]} href={link}>
        {name}
      </a>
      <div className={styles["arrow-wrapper"]}>
        <svg viewBox="0 0 32 32" className={styles["arrow-icon"]}>
          <polyline points="4 4 15 16 28 4" />
        </svg>
      </div>
    </li>
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
          <NavParent name="Buy" link="#" />
          <NavParent name="Rent" link="#" />
          <NavParent name="Sell" link="#" />
          <NavParent name="Home Loans" link="#" />
          <NavParent name="Find an Agent" link="#" />
          <NavParent name="Manage Rentals" link="#" />
          <li className={styles.other}>Advertise</li>
          <li className={styles.other}>Help</li>
        </ul>
      </nav>
    </div>
  );
}
