const Option = (props) => {
  return (
    <li className="option">
      <span className="option__text">
        {props.count}. {props.option.text}
      </span>
      <button
        className="button button--link"
        onClick={() => props.onRemoveOption(props.option.id)}
      >
        remove
      </button>
    </li>
  );
};

export default Option;
