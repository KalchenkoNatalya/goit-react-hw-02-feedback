import css from '../Feedback/Feedback.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.wrapButton}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={css.btn}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
