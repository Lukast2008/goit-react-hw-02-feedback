import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

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

Statistic.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  stateItem: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,

  totalItem: PropTypes.number,
  positiveItem: PropTypes.number,
};
