import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttonsSet">
      {options.map(btnLabel => (
        <button
          className={css.statisticsButton}
          key={btnLabel}
          type="button"
          onClick={() => onLeaveFeedback(btnLabel)}
        >
          {btnLabel}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
