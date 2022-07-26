import classes from './header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link href="/about">
          <a className={classes.navLink}>About</a>
        </Link>
        <Link href="/contact">
          <a className={classes.navLink}>Contact</a>
        </Link>
      </nav>

      <div className={classes.title}>
        <h1>Camping.</h1>
      </div>

      <div className={classes.sign}>
        <button className={classes.signIn}>Sign In</button>
        <button className={classes.signUp}>Sign Up</button>
        <button className={classes.search}>
          <img src="./static/search-line.svg" alt="search"></img>
        </button>
      </div>
    </header>
  );
};

export default Header;
