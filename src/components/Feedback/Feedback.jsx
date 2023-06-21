import { Component } from 'react';
import css from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  };

  addGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  addBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
    countPositiveFeedbackPercentage = () => {
      const positivePercentage = Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)*100))
      return positivePercentage + '%'
    }


  render() {
    const goodFeedback = this.state.good;
    const neutralFeedback = this.state.neutral;
    const badFeedback = this.state.bad;
    // let total = goodFeedback + neutralFeedback + badFeedback;


    return (
      <div>
        <h2>Please leave feedback</h2>
        <div className={css.wrapButton}>
          <button
            type="button"
            className={css.btn}
            onClick={this.addGoodFeedback}
          >
            Good
          </button>
          <button
            type="button"
            className={css.btn}
            onClick={this.addNeutralFeedback}
          >
            Neutral
          </button>
          <button
            type="button"
            className={css.btn}
            onClick={this.addBadFeedback}
          >
            Bad
          </button>
        </div>
        <h3 className={css.titleStatistics}>Statistics</h3>
        <ul className={css.listStatistics}>
          <li>Good: {goodFeedback}</li>
          <li>Neutral: {neutralFeedback}</li>
          <li>Bad: {badFeedback}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}</li>
        </ul>
      </div>
    );
  }
}
