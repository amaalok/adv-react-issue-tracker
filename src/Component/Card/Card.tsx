import React from 'react';
import classes from './Card.module.css';
const Card = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes['card-header']}></div>
        <div className={classes['card-body']}>
          <span className={classes['tag tag-teal']}>Technology</span>
          <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
          <p>An exploration into the trucks polarising design</p>
          <div className={classes.user}>
            <img
              src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
              alt="user"
            />
            <div className="user-info">
              <h5>July Dec</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
