import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.onRemoveAllOptions}
          disabled={props.options.length < 1}
        >
          Remove All
        </button>
      </div>

      <ul>
        {props.options.length === 0 && (
          <p className="widge__message">Please add an option to get started!</p>
        )}
        {props.options.map((option, index) => (
          <Option
            key={index}
            option={option}
            count={index + 1}
            onRemoveOption={props.onRemoveOption}
          />
        ))}
      </ul>
    </div>
  );
};

export default Options;
