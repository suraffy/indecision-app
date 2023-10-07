import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <h3>Your Options</h3>
      <button onClick={props.onRemoveAllOptions}>Remove All</button>

      <ul>
        {props.options.map((option) => (
          <Option
            key={option.id}
            onRemoveOption={props.onRemoveOption}
            option={option}
          />
        ))}
      </ul>
    </div>
  );
};

export default Options;
