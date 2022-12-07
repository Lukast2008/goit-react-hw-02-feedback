import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

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

Options.propTypes = {
  buttonName: PropTypes.arrayOf({
    Good: PropTypes.string,
    Neutral: PropTypes.string,
    Bad: PropTypes.string,
  }),
  handleClickButton: PropTypes.func
}