import React, { Component } from 'react';
import { Options } from './Options';
import { Statistic } from './StatisticList';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class EspressoStatistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    buttonName: ['Good', 'Neutral', 'Bad'],

    listItem: ['Good', 'Neutral', 'Bad', 'Total', 'Positive'],
  };

  handleClickButton = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <section className={styles.section}>
        <h1 className={styles.title}>Please leave feedback</h1>
        <Options
          options={this.props.buttonName}
          onClick={this.handleClickButton}
        />

        <h2 className={styles.title}>Statistics</h2>
        {total ? (
          <ul className={styles.listItems}>
            <Statistic
              statistics={this.props.listItem}
              stateItem={this.state}
              totalItem={total}
              positiveItem={positive}
            />
          </ul>
        ) : (
          <p className={styles.notification}>"No feedback given"</p>
        )}
      </section>
    );
  }
}

EspressoStatistics.propType = {
  buttonName: PropTypes.arrayOf({
    Good: PropTypes.string,
    Neutral: PropTypes.string,
    Bad: PropTypes.string,
  }),
  listItem: PropTypes.arrayOf({
    Good: PropTypes.string.isRequired,
    Neutral: PropTypes.string.isRequired,
    Bad: PropTypes.string.isRequired,
    Total: PropTypes.string.isRequired,
    Positive: PropTypes.string.isRequired,
  }),

  
};

export default EspressoStatistics;
