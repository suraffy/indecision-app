const Option = (props) => {
  return (
    <li>
      <span>{props.option.text}</span>
      <button onClick={() => props.onRemoveOption(props.option.id)}>
        remove
      </button>
    </li>
  );
};

export default Option;
