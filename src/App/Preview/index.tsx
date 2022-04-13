import React from 'react';
import { SuperChat } from 'App';
import styles from './styles.module.scss';

interface P extends SuperChat {
  ref: React.Ref<HTMLElement>;
}

const getColorType = (price: number) => {
  if (price < 200) return 'blue';
  if (price < 500) return 'skyblue';
  if (price < 1000) return 'lime';
  if (price < 2000) return 'yellow';
  if (price < 5000) return 'orange';
  if (price < 10000) return 'magenta';
  return 'red';
}

const Preview: React.FC<P> = React.forwardRef((props, ref) => {
  const colorType = getColorType(props.price);
  return (
    <section ref={ref} className={`${styles.container} ${styles[colorType]}`}>
      <header className={styles.header}>
        <figure className={styles.icon}>
          <img className={styles.image} src={props.icon} alt="icon" />
        </figure>
        <div className={styles.wrapper}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.price}>￥{props.price}</div>
        </div>
      </header>
      <p className={styles.message}>{props.message}</p>
    </section>
  );
});

export default Preview;
