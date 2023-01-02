import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total() > 0 ? (
        <ul className={css.statisticsList}>
          <li className={css.statisticsItem}>
            Good:
            {good}
          </li>
          <li className={css.statisticsItem}>
            Neutral:
            {neutral}
          </li>
          <li className={css.statisticsItem}>
            Bad:
            {bad}{' '}
          </li>
          <li className={css.statisticsItem}>
            Total:
            {total()}{' '}
          </li>
          <li className={css.statisticsItem}>
            Positive feedback:
            {positivePercentage()}%
          </li>
        </ul>
      ) : (
        <p>"There is no feedback" </p>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
