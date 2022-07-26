import classes from './goto.module.css';
import Image from 'next/image';

const Goto = () => {
  return (
    <a href="/" className={classes.goto}>
      <div className={classes.info}>
        <div className={classes.next}>Up next</div>
        <h3 className={classes.title}>Aerial View of Rock Cliffs</h3>
        <div className={classes.arrow}>
          <img src="./static/vector.svg" alt="arrow" />
        </div>
      </div>

      <div className={classes.image}>
        <img src="./static/1.png" />
      </div>
    </a>
  );
};

export default Goto;
