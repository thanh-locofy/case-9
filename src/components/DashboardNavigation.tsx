import { FunctionComponent } from "react";
import styles from "./DashboardNavigation.module.css";

const DashboardNavigation: FunctionComponent = () => {
  return (
    <div className={styles.dashboardNavigation}>
      <div className={styles.heading}>
        <div className={styles.navigation}>Navigation</div>
      </div>
      <div className={styles.accountLinks}>
        <img className={styles.dashboard2Icon} alt="" src="/dashboard-2.svg" />
        <div className={styles.dashboard}>Dashboard</div>
      </div>
      <div className={styles.accountLinks1}>
        <img
          className={styles.dashboard2Icon1}
          loading="lazy"
          alt=""
          src="/dashboard-2-1.svg"
        />
        <div className={styles.dashboard1}>Order History</div>
      </div>
      <div className={styles.accountLinks2}>
        <img
          className={styles.dashboard2Icon2}
          loading="lazy"
          alt=""
          src="/dashboard-2-2.svg"
        />
        <div className={styles.dashboard2}>Wishlist</div>
      </div>
      <div className={styles.accountLinks3}>
        <img
          className={styles.dashboard2Icon3}
          loading="lazy"
          alt=""
          src="/dashboard-2-3.svg"
        />
        <div className={styles.dashboard3}>Shopping Cart</div>
      </div>
      <div className={styles.accountLinks4}>
        <img
          className={styles.dashboard2Icon4}
          loading="lazy"
          alt=""
          src="/dashboard-2-4.svg"
        />
        <div className={styles.dashboard4}>Settings</div>
      </div>
      <div className={styles.accountLinks5}>
        <img
          className={styles.dashboard2Icon5}
          loading="lazy"
          alt=""
          src="/dashboard-2-5.svg"
        />
        <div className={styles.dashboard5}>Log-out</div>
      </div>
    </div>
  );
};

export default DashboardNavigation;
