import React, { Component } from 'react';
import { Options } from './Options';
import { Statistic } from './StatisticList';
import PropTypes from 'prop-types'
import styles from './styles.module.css';

class EspressoStatistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    buttonName: ['Good', 'Neutral', 'Bad'],

    listItem: ['Good', 'Neutral', 'Bad', 'Total', 'Positive']
  };

  handleClickButton = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
    this.totalFeedback(key);
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeesBack = () => {
    return Math.floor((this.state.good * 100) / this.totalFeedback());
  };

  render() {
    const total = this.totalFeedback();
    const positive = this.positiveFeesBack();

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
  buttonName: PropTypes.arrayOf(
    PropTypes.shape({
      Good: PropTypes.number,
      Neutral: PropTypes.number,
      Bad:PropTypes.number,
    })
  ),

  listItem: PropTypes.arrayOf(
    PropTypes.shape({
      Good: PropTypes.number.isRequired,
      Neutral: PropTypes.number.isRequired,
      Bad: PropTypes.number.isRequired,
      Total: PropTypes.number.isRequired,
      Positive: PropTypes.number.isRequired,
    })
  )

}
  
  


    
  
   


export default EspressoStatistics;
