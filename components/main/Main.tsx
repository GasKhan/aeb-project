import classes from './main.module.css';
import Goto from '../goto/Goto';

const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes.info}>
        <div className={classes.content}>
          <h3 className={classes.title}>Beautiful Places of England</h3>
          <p className={classes.text}>
            Plan your vacation on the most beatiful places of England
          </p>
        </div>
      </div>

      <Goto />
    </div>
  );
};

export default Main;
