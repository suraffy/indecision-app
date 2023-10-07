const Option = (props) => {
  return (
    <li>
      <span>{props.option.text}</span>
      <button>remove</button>
    </li>
  );
};

export default Option;
