import React from 'react';
import styles from './styles.module.css';

export const Options = ({ options, onClick }) => {
  return (
    <div className={styles.buttons}>
      {options.map(el => (
        <button className={styles.button} key={Math.random()} type="button" onClick={() => onClick(el.toLowerCase())}>
          {el}
        </button>
      ))}
    </div>

  );
};
