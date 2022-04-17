import React from 'react';
import styles from './styles.module.css';

interface P extends Warn {
  ref: React.Ref<HTMLElement>;
}

const Preview: React.FC<P> = React.forwardRef((props, ref) => {
  return (
    <article ref={ref} className={styles.container}>
      <div className={styles.userInfo}>
        <img className={styles.icon} src={props.icon} alt="icon" />
        <span className={styles.bold}>{props.name}#{props.tag} は警告されました</span>
      </div>
      <div className={styles.reason}>
        <span className={styles.bold}>理由: </span>
        {props.reason}
      </div>
    </article>
  )
});

export default Preview;
