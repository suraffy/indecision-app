const Action = (props) => {
  return (
    <div>
      <button
        className="big-button"
        disabled={!props.hasOptions}
        onClick={props.onPickOption}
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;
