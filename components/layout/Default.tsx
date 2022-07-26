import Header from '../header/Header';
import styles from './default.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
