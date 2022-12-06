import React from 'react';
import styles from './styles.module.css';

export const Statistic = ({
  statistics,
  stateItem,
  totalItem,
  positiveItem,
}) => {
  return (
    <>
      {statistics.map(el => (
        <li className={styles.listItem} key={Math.random(5)}>
          {el} {el !== 'Total' ? stateItem[el.toLowerCase()] : totalItem}
          {el === 'Positive' ? positiveItem + '%' : null}
        </li>
      ))}
    </>
  );
};
