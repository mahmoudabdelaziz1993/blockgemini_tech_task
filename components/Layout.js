import styles from "../styles/layout.module.css";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className={styles.wrapper_doodle}>
      <Navbar />
      <div className="w-full min-h-screen px-8 pt-5">{children}</div>
    </div>
  );
}

export default Layout;
