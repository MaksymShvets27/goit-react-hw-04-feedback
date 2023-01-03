import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = btn => {
    switch (btn) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        alert('error');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const goodPercentage = (good / countTotalFeedback()) * 100;

    if (isNaN(goodPercentage)) {
      return 0;
    }
    return Math.round(goodPercentage);
  };

  let stateKeys = Object.keys({ good, neutral, bad });

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={stateKeys} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
};
