import React from "react";
import styles from "./styles.module.scss";

interface P extends DiscordRank {
  ref: React.Ref<HTMLElement>;
}

const humanize = (num: number) => {
  const units = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
    { value: 1e21, symbol: "Z" },
    { value: 1e24, symbol: "Y" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const unit = units
    .slice()
    .reverse()
    .find((unit) => {
      return num >= unit.value;
    });
  return unit
    ? (num / unit.value).toFixed(2).replace(rx, "$1") + unit.symbol
    : "0";
};

const Preview: React.FC<P> = React.forwardRef((props, ref) => {
  let level = 0;
  let xp = Number(props.exp || 0);
  const getXPNeedToLevelUp = (lvl: number, xp: number) => {
    return 5 * lvl ** 2 + 50 * lvl + 100 - xp;
  };
  let needXP = getXPNeedToLevelUp(level, xp);
  while (needXP <= 0) {
    xp = xp - getXPNeedToLevelUp(level, 0);
    level++;
    needXP = getXPNeedToLevelUp(level, xp);
  }

  return (
    <div className={styles.container}>
      <section ref={ref} className={styles.preview}>
        <div className={styles.body}>
          <figure className={styles.iconWrapper}>
            <img className={styles.icon} src={props.icon} alt="icon" />
            <span className={`${styles.status} ${styles[props.status]}`}></span>
          </figure>
          <div className={styles.info}>
            <div className={styles.row}>
              <div className={styles.label}>RANK</div>
              <div className={styles.rank}>#{props.rank}</div>
              <div style={{ color: props.color }} className={styles.label}>
                LEVEL
              </div>
              <div style={{ color: props.color }} className={styles.level}>
                {level}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.name}>{props.name}</div>
              <div className={styles.tag}>#{props.tag}</div>
              <div className={styles.exp}>{humanize(xp)}</div>
              <div className={styles.nextExp}>/ {humanize(xp + needXP)} XP</div>
            </div>
            <div className={styles.barContainer}>
              <div
                className={styles.bar}
                style={{
                  right: `${100 - (xp / (needXP + xp)) * 100}%`,
                  background: props.color,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Preview;
